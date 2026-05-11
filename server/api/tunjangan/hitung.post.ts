import prisma from '../../utils/prisma'
import { tunjanganHitungSchema, validasiInput } from '../../utils/validasi'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'kelola_pengaturan_tunjangan')

  const body = await readBody(event)
  const validated = validasiInput(tunjanganHitungSchema, body)

  // 1. Ambil data pegawai
  const pegawai = await prisma.pegawai.findUnique({
    where: { id_pegawai: validated.id_pegawai, dihapus_pada: null }
  })

  if (!pegawai) return gagalResponse('Pegawai tidak ditemukan', 404)

  // 2. Cek Aturan: Hanya pegawai tetap
  if (pegawai.jenis_pegawai !== 'TETAP') {
    return gagalResponse('Tunjangan transport hanya berlaku untuk pegawai TETAP', 422)
  }

  // 3. Cek Aturan: Jarak Minimal (> 5KM)
  const jarakAsli = pegawai.jarak_km || 0
  if (jarakAsli <= 5) {
    return gagalResponse(`Jarak (${jarakAsli} KM) tidak berhak mendapatkan tunjangan (Min > 5KM)`, 422)
  }

  // 4. Cek Aturan: Jarak Maksimal (Capped at 25KM)
  // Kelebihan jarak tidak dihitung tunjangan
  const jarakDibatasi = Math.min(jarakAsli, 25)

  // 5. Aturan Pembulatan KM: < 0.5 turun, >= 0.5 naik
  const jarakBulat = Math.round(jarakDibatasi)

  // 6. Cek Aturan: Minimal hadir 19 hari
  if (validated.hari_masuk < 19) {
    return gagalResponse('Minimal kehadiran untuk tunjangan transport adalah 19 hari', 422)
  }

  // 7. Ambil tarif aktif (Base Fare)
  const pengaturan = await prisma.pengaturan_tunjangan.findFirst({
    where: { status_aktif: true },
    orderBy: { dibuat_pada: 'desc' }
  })

  if (!pengaturan) return gagalResponse('Tarif per KM belum diatur. Silakan atur di Pengaturan.', 422)

  const tarif = pengaturan.tarif_per_km
  
  // 8. Hitung: tunjangan = base_fare × km_bulat × hari_masuk
  const total = tarif * jarakBulat * validated.hari_masuk

  // 8. Simpan/Upsert
  const result = await prisma.tunjangan_transport.upsert({
    where: {
      id_pegawai_bulan_tahun: {
        id_pegawai: validated.id_pegawai,
        bulan: validated.bulan,
        tahun: validated.tahun
      }
    },
    update: {
      jarak_km: jarakBulat,
      hari_masuk: validated.hari_masuk,
      tarif_per_km: tarif,
      total_tunjangan: total
    },
    create: {
      id_pegawai: validated.id_pegawai,
      bulan: validated.bulan,
      tahun: validated.tahun,
      jarak_km: jarakBulat,
      hari_masuk: validated.hari_masuk,
      tarif_per_km: tarif,
      total_tunjangan: total
    }
  })

  await simpanLog(event, 'Tunjangan', 'TAMBAH', `Menghitung tunjangan transport untuk: ${pegawai.nama_pegawai} bulan ${validated.bulan}/${validated.tahun}`)

  return suksesResponse(result, 'Tunjangan berhasil dihitung dan disimpan')
})
