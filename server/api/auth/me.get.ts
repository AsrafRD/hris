import type { AuthUser } from '../../../types'
import { suksesResponse, gagalResponse } from '../../utils/response'
import prisma from '../../utils/prisma'
import { hapusAuthCookies } from '../../utils/jwt'
import { ambilSemuaHakAkses } from '../../utils/rbac'

export default defineEventHandler(async (event) => {
  const auth = event.context.auth
  
  if (!auth) {
    return gagalResponse('Sesi tidak valid', 401)
  }

  const pengguna = await prisma.pengguna.findUnique({
    where: { id_pengguna: auth.id_pengguna },
    include: {
      peran: true,
    }
  })

  if (!pengguna || !pengguna.status_aktif || pengguna.dihapus_pada) {
    hapusAuthCookies(event)
    return gagalResponse('Sesi berakhir atau akun tidak aktif', 401)
  }

  const hakAkses = await ambilSemuaHakAkses(pengguna.id_peran)

  const authUser: AuthUser = {
    id_pengguna: pengguna.id_pengguna,
    nama_pengguna: pengguna.nama_pengguna,
    username: pengguna.username,
    email: pengguna.email,
    nomor_hp: pengguna.nomor_hp,
    foto: pengguna.foto,
    peran: {
      id_peran: pengguna.id_peran,
      nama_peran: pengguna.peran.nama_peran,
    },
    hak_akses: hakAkses,
  }

  return suksesResponse(authUser)
})
