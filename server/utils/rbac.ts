import type { H3Event } from 'h3'
import prisma from '../utils/prisma'

export async function cekHakAkses(event: H3Event, namaAkses: string): Promise<boolean> {
  const auth = event.context.auth
  if (!auth) return false

  const peranHakAkses = await prisma.peran_hak_akses.findMany({
    where: { id_peran: auth.id_peran },
    include: { hak_akses: true },
  })

  return peranHakAkses.some((pha: any) => pha.hak_akses.nama_akses === namaAkses)
}

export async function wajibHakAkses(event: H3Event, namaAkses: string) {
  const punya = await cekHakAkses(event, namaAkses)
  if (!punya) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Anda tidak memiliki akses untuk melakukan tindakan ini.',
      data: { sukses: false, pesan: 'Anda tidak memiliki akses untuk melakukan tindakan ini.', data: null },
    })
  }
}

export async function ambilSemuaHakAkses(idPeran: number): Promise<string[]> {
  const peranHakAkses = await prisma.peran_hak_akses.findMany({
    where: { id_peran: idPeran },
    include: { hak_akses: true },
  })
  return peranHakAkses.map((pha: any) => pha.hak_akses.nama_akses)
}

export async function wajibSuperadmin(event: H3Event) {
  const auth = event.context.auth
  if (!auth || auth.nama_peran !== 'Superadmin') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Akses terbatas. Hanya Superadmin yang diizinkan.',
      data: { sukses: false, pesan: 'Akses terbatas. Hanya Superadmin yang diizinkan.', data: null },
    })
  }
}
