import prisma from '../../utils/prisma'
import { suksesResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'ubah_pegawai')

  const body = await readBody(event)
  const { ids, status } = body

  if (!Array.isArray(ids) || ids.length === 0) {
    throw createError({ statusCode: 400, message: 'ID pegawai tidak valid' })
  }

  await prisma.pegawai.updateMany({
    where: { id_pegawai: { in: ids } },
    data: { status_aktif: status }
  })

  await simpanLog(event, 'Pegawai', 'UBAH', `Mengubah status ${ids.length} pegawai menjadi ${status ? 'Aktif' : 'Nonaktif'}`)

  return suksesResponse(null, 'Status pegawai berhasil diperbarui')
})
