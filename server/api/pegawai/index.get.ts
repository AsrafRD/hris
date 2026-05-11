import prisma from '../../utils/prisma'
import { ambilQueryPaginasi, paginasiResponse } from '../../utils/response'
import type { JenisPegawai } from '../../../app/generated/prisma'
import { wajibHakAkses } from '../../utils/rbac'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'lihat_pegawai')

  const query = getQuery(event)
  const { halaman, perHalaman, skip } = ambilQueryPaginasi(event)

  const cari = query.cari as string
  const jabatan = query.jabatan as string // comma separated
  const jenis_pegawai = query.jenis_pegawai as string
  const status_aktif = query.status_aktif === 'true' ? true : query.status_aktif === 'false' ? false : undefined

  // Tenure Filter (Masa Kerja)
  const masa_kerja_operator = query.masa_kerja_operator as string // '>', '=', '<'
  const masa_kerja_nilai = query.masa_kerja_nilai ? parseInt(query.masa_kerja_nilai as string) : undefined

  // Sorting
  const sortKey = (query.sortKey as string) || 'dibuat_pada'
  const sortOrder = (query.sortOrder as string) || 'desc'

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

  if (jabatan && jabatan !== 'undefined') {
    const jabatanList = jabatan.split(',').filter(j => j)
    if (jabatanList.length > 0) {
      where.jabatan = { in: jabatanList }
    }
  }

  if (jenis_pegawai) {
    where.jenis_pegawai = jenis_pegawai
  }

  if (status_aktif !== undefined) {
    where.status_aktif = status_aktif
  }

  // Handle Masa Kerja Filter
  if (masa_kerja_operator && masa_kerja_nilai !== undefined) {
    const today = new Date()

    if (masa_kerja_operator === '>') {
      // Masa Kerja > 5 means they have completed at least 6 years
      // JoinDate must be BEFORE (Today - 6 years)
      const targetDate = new Date(today.getFullYear() - (masa_kerja_nilai), today.getMonth(), today.getDate())
      where.tanggal_masuk = { lt: targetDate }
    } else if (masa_kerja_operator === '<') {
      // Masa Kerja < 5 means tenure is 0, 1, 2, 3, 4
      // JoinDate must be AFTER (Today - 5 years)
      const targetDate = new Date(today.getFullYear() - masa_kerja_nilai, today.getMonth() - 1, today.getDate() - 1)
      where.tanggal_masuk = { gt: targetDate }
    } else if (masa_kerja_operator === '=') {
      // Masa Kerja = 5 means JoinDate is in [Today - 6 years + 1 day, Today - 5 years]
      const minDate = new Date(today.getFullYear() - (masa_kerja_nilai + 1), today.getMonth(), today.getDate() + 1)
      const maxDate = new Date(today.getFullYear() - masa_kerja_nilai, today.getMonth(), today.getDate())
      where.tanggal_masuk = {
        gte: minDate,
        lte: maxDate
      }
    }
  }

  // Count total
  const totalData = await prisma.pegawai.count({ where })

  // Define OrderBy
  let orderBy: any = {}
  if (sortKey === 'masa_kerja') {
    // Sorting by tenure is inverse of sorting by tanggal_masuk
    orderBy.tanggal_masuk = sortOrder === 'asc' ? 'desc' : 'asc'
  } else {
    orderBy[sortKey] = sortOrder
  }

  // Get data
  const data = await prisma.pegawai.findMany({
    where,
    skip,
    take: perHalaman,
    orderBy,
    include: {
      pendidikan: true,
      pengguna: {
        include: { peran: true }
      }
    }
  })

  return paginasiResponse(data, totalData, halaman, perHalaman)
})
