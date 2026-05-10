import prisma from '../../utils/prisma'
import { pengaturanTunjanganSchema, validasiInput } from '../../utils/validasi'
import { suksesResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'kelola_pengaturan_tunjangan')

  const body = await readBody(event)
  const validated = validasiInput(pengaturanTunjanganSchema, body)

  // Nonaktifkan pengaturan sebelumnya jika ada
  await prisma.pengaturan_tunjangan.updateMany({
    where: { status_aktif: true },
    data: { status_aktif: false }
  })

  // Buat pengaturan baru
  const result = await prisma.pengaturan_tunjangan.create({
    data: validated
  })

  await simpanLog(event, 'Tunjangan', 'TAMBAH', `Mengubah tarif transport menjadi: Rp ${validated.tarif_per_km}/KM`)

  return suksesResponse(result, 'Tarif transport berhasil diperbarui')
})
