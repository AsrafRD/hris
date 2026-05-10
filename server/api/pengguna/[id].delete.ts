import prisma from '../../utils/prisma'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'hapus_pengguna')
  const id = parseInt(getRouterParam(event, 'id') || '0')

  const user = await prisma.pengguna.findUnique({ where: { id_pengguna: id } })
  if (!user) return gagalResponse('Pengguna tidak ditemukan', 404)

  // Cegah hapus diri sendiri
  const session = event.context.auth
  if (session && session.id === id) {
    return gagalResponse('Anda tidak dapat menghapus akun Anda sendiri', 403)
  }

  await prisma.pengguna.delete({ where: { id_pengguna: id } })

  await simpanLog(event, 'Pengguna', 'HAPUS', `Menghapus pengguna: ${user.username}`)

  return suksesResponse(null, 'Pengguna berhasil dihapus')
})
