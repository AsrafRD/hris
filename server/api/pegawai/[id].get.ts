import prisma from '../../utils/prisma'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'lihat_pegawai')

  const id = parseInt(event.context.params?.id || '0')
  if (!id) return gagalResponse('ID tidak valid', 400)

  const data = await prisma.pegawai.findUnique({
    where: { id_pegawai: id, dihapus_pada: null },
    include: {
      pendidikan: {
        orderBy: { tahun_lulus: 'desc' }
      },
      pengguna: {
        select: { username: true, status_aktif: true }
      }
    }
  })

  if (!data) return gagalResponse('Data pegawai tidak ditemukan', 404)

  return suksesResponse(data)
})
