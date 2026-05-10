import type { H3Event } from 'h3'
import prisma from '../utils/prisma'
import type { AksiLog } from '../../app/generated/prisma'
import { ambilIpAddress, ambilUserAgent } from '../utils/response'

export async function simpanLog(
  event: H3Event,
  modul: string,
  aksi: AksiLog,
  keterangan?: string
) {
  try {
    const auth = event.context.auth
    const ipAddress = ambilIpAddress(event)
    const userAgent = ambilUserAgent(event)

    await prisma.log_aktivitas.create({
      data: {
        id_pengguna: auth?.id_pengguna || null,
        modul,
        aksi,
        keterangan: keterangan || null,
        ip_address: ipAddress,
        user_agent: userAgent,
      },
    })
  } catch (error) {
    console.error('Gagal menyimpan log aktivitas:', error)
  }
}
