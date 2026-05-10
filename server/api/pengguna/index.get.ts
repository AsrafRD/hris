import prisma from '../../utils/prisma'
import { ambilQueryPaginasi, paginasiResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'lihat_pengguna')

  const { halaman, perHalaman, skip } = ambilQueryPaginasi(event)
  const query = getQuery(event)
  const cari = query.cari as string

  const where: any = {
    dihapus_pada: null
  }

  if (cari) {
    where.OR = [
      { nama_pengguna: { contains: cari, mode: 'insensitive' } },
      { username: { contains: cari, mode: 'insensitive' } },
      { email: { contains: cari, mode: 'insensitive' } },
    ]
  }

  const totalData = await prisma.pengguna.count({ where })

  const data = await prisma.pengguna.findMany({
    where,
    skip,
    take: perHalaman,
    orderBy: { dibuat_pada: 'desc' },
    include: {
      peran: true,
      pegawai: { select: { nip: true, jabatan: true } }
    }
  })

  return paginasiResponse(data, totalData, halaman, perHalaman)
})
