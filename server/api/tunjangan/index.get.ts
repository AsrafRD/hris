import prisma from '../../utils/prisma'
import { suksesResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import dayjs from 'dayjs'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'lihat_tunjangan')

  const query = getQuery(event)
  const bulan = parseInt(query.bulan as string) || dayjs().month() + 1
  const tahun = parseInt(query.tahun as string) || dayjs().year()
  const cari = query.cari as string

  const where: any = {
    bulan,
    tahun
  }

  if (cari) {
    where.pegawai = {
      nama_pegawai: { contains: cari, mode: 'insensitive' }
    }
  }

  const data = await prisma.tunjangan_transport.findMany({
    where,
    include: {
      pegawai: true
    },
    orderBy: {
      total_tunjangan: 'desc'
    }
  })

  // Ambil pengaturan tarif saat ini
  const pengaturan = await prisma.pengaturan_tunjangan.findFirst({
    where: { status_aktif: true },
    orderBy: { dibuat_pada: 'desc' }
  })

  return suksesResponse({
    tunjangan: data,
    pengaturan
  })
})
