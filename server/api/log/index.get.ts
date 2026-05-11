import prisma from '../../utils/prisma'
import { ambilQueryPaginasi, paginasiResponse } from '../../utils/response'
import { wajibSuperadmin } from '../../utils/rbac'

export default defineEventHandler(async (event) => {
  await wajibSuperadmin(event)

  const query = getQuery(event)
  const { halaman, perHalaman, skip } = ambilQueryPaginasi(event)
  
  const cari = query.cari as string
  const aksi = query.aksi as string
  const id_pengguna = query.id_pengguna ? parseInt(query.id_pengguna as string) : undefined
  const tgl_mulai = query.tgl_mulai as string
  const tgl_akhir = query.tgl_akhir as string

  const where: any = {}

  if (cari) {
    where.OR = [
      { modul: { contains: cari, mode: 'insensitive' } },
      { keterangan: { contains: cari, mode: 'insensitive' } },
      { pengguna: { nama_pengguna: { contains: cari, mode: 'insensitive' } } }
    ]
  }

  if (aksi) {
    where.aksi = aksi
  }

  if (id_pengguna) {
    where.id_pengguna = id_pengguna
  }

  if (tgl_mulai || tgl_akhir) {
    where.dibuat_pada = {}
    if (tgl_mulai) where.dibuat_pada.gte = new Date(tgl_mulai)
    if (tgl_akhir) where.dibuat_pada.lte = new Date(tgl_akhir + 'T23:59:59')
  }

  const totalData = await prisma.log_aktivitas.count({ where })

  const data = await prisma.log_aktivitas.findMany({
    where,
    skip,
    take: perHalaman,
    orderBy: { dibuat_pada: 'desc' },
    include: {
      pengguna: {
        select: { nama_pengguna: true, username: true }
      }
    }
  })

  return paginasiResponse(data, totalData, halaman, perHalaman)
})
