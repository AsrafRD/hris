import prisma from '../../utils/prisma'
import { peranSchema, validasiInput } from '../../utils/validasi'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'kelola_peran')

  const id = parseInt(event.context.params?.id || '0')
  if (!id) return gagalResponse('ID tidak valid', 400)

  const body = await readBody(event)
  const validated = validasiInput(peranSchema, body)

  // Transaction: Update Role and Sync Permissions
  const result = await prisma.$transaction(async (tx: any) => {
    // 1. Update Role Info
    const role = await tx.peran.update({
      where: { id_peran: id },
      data: {
        nama_peran: validated.nama_peran,
        deskripsi: validated.deskripsi
      }
    })

    // 2. Clear old permissions
    await tx.peran_hak_akses.deleteMany({
      where: { id_peran: id }
    })

    // 3. Add new permissions
    if (validated.hak_akses_ids.length > 0) {
      await tx.peran_hak_akses.createMany({
        data: validated.hak_akses_ids.map(hakId => ({
          id_peran: id,
          id_hak_akses: hakId
        }))
      })
    }

    return role
  })

  await simpanLog(event, 'Peran', 'UBAH', `Mengupdate hak akses untuk peran: ${result.nama_peran}`)

  return suksesResponse(result, 'Hak akses peran berhasil diperbarui')
})
