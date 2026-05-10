import prisma from '../../utils/prisma'
import { pegawaiSchema, validasiInput } from '../../utils/validasi'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'tambah_pegawai')

  const body = await readBody(event)
  const validated = validasiInput(pegawaiSchema, body)

  // Cek NIP unik
  const existingNip = await prisma.pegawai.findUnique({
    where: { nip: validated.nip }
  })

  if (existingNip) {
    return gagalResponse('NIP sudah terdaftar', 422)
  }

  // Cek Email unik jika diisi
  if (validated.email) {
    const existingEmail = await prisma.pegawai.findUnique({
      where: { email: validated.email }
    })
    if (existingEmail) return gagalResponse('Email sudah terdaftar', 422)
  }

  // Transaction for Employee and Education
  const result = await prisma.$transaction(async (tx: any) => {
    const { pendidikan, ...pegawaiData } = validated
    
    const newPegawai = await tx.pegawai.create({
      data: {
        ...pegawaiData,
        tanggal_lahir: pegawaiData.tanggal_lahir ? new Date(pegawaiData.tanggal_lahir) : null,
        tanggal_masuk: new Date(pegawaiData.tanggal_masuk),
      }
    })

    if (pendidikan && pendidikan.length > 0) {
      await tx.pendidikan_pegawai.createMany({
        data: pendidikan.map(p => ({
          ...p,
          id_pegawai: newPegawai.id_pegawai
        }))
      })
    }

    return newPegawai
  })

  await simpanLog(event, 'Pegawai', 'TAMBAH', `Menambahkan pegawai baru: ${result.nama_pegawai} (${result.nip})`)

  return suksesResponse(result, 'Pegawai berhasil ditambahkan')
})
