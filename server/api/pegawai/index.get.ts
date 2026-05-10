import prisma from '../../utils/prisma'
import { ambilQueryPaginasi, paginasiResponse } from '../../utils/response'
import type { JenisPegawai } from '../../../app/generated/prisma'
import { wajibHakAkses } from '../../utils/rbac'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'lihat_pegawai')

  const query = getQuery(event)
  const { halaman, perHalaman, skip } = ambilQueryPaginasi(event)
  
  const cari = query.cari as string
  const jabatan = query.jabatan as string // could be comma separated
  const jenis_pegawai = query.jenis_pegawai as JenisPegawai
  const status_aktif = query.status_aktif === 'true' ? true : query.status_aktif === 'false' ? false : undefined

  // Filters
  const where: any = {
    dihapus_pada: null
  }

  if (cari) {
    where.OR = [
      { nama_pegawai: { contains: cari, mode: 'insensitive' } },
      { nip: { contains: cari, mode: 'insensitive' } },
      { jabatan: { contains: cari, mode: 'insensitive' } },
    ]
  }

  if (jabatan) {
    const jabatanList = jabatan.split(',')
    where.jabatan = { in: jabatanList }
  }

  if (jenis_pegawai) {
    where.jenis_pegawai = jenis_pegawai
  }

  if (status_aktif !== undefined) {
    where.status_aktif = status_aktif
  }

  // Count total
  const totalData = await prisma.pegawai.count({ where })

  // Get data
  const data = await prisma.pegawai.findMany({
    where,
    skip,
    take: perHalaman,
    orderBy: { dibuat_pada: 'desc' },
    include: {
      pendidikan: true
    }
  })

  return paginasiResponse(data, totalData, halaman, perHalaman)
})
