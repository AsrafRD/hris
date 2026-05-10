import prisma from '../../utils/prisma'
import { pegawaiSchema, validasiInput } from '../../utils/validasi'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'ubah_pegawai')

  const id = parseInt(event.context.params?.id || '0')
  if (!id) return gagalResponse('ID tidak valid', 400)

  const body = await readBody(event)
  const validated = validasiInput(pegawaiSchema, body)

  // Cek NIP unik (kecuali miliknya sendiri)
  const existingNip = await prisma.pegawai.findFirst({
    where: { 
      nip: validated.nip,
      NOT: { id_pegawai: id }
    }
  })

  if (existingNip) return gagalResponse('NIP sudah digunakan oleh pegawai lain', 422)

  // Transaction for Update
  const result = await prisma.$transaction(async (tx: any) => {
    const { pendidikan, ...pegawaiData } = validated
    
    const updatedPegawai = await tx.pegawai.update({
      where: { id_pegawai: id },
      data: {
        ...pegawaiData,
        tanggal_lahir: pegawaiData.tanggal_lahir ? new Date(pegawaiData.tanggal_lahir) : null,
        tanggal_masuk: new Date(pegawaiData.tanggal_masuk),
      }
    })

    // Delete and recreate education
    if (pendidikan) {
      await tx.pendidikan_pegawai.deleteMany({
        where: { id_pegawai: id }
      })
      
      if (pendidikan.length > 0) {
        await tx.pendidikan_pegawai.createMany({
          data: pendidikan.map(p => ({
            ...p,
            id_pegawai: id
          }))
        })
      }
    }

    return updatedPegawai
  })

  await simpanLog(event, 'Pegawai', 'UBAH', `Mengubah data pegawai: ${result.nama_pegawai} (${result.nip})`)

  return suksesResponse(result, 'Data pegawai berhasil diperbarui')
})
