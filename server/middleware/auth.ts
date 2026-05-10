import type { H3Event } from 'h3'
import type { TokenPayload } from '../../types'
import { ambilTokenDariCookie, verifikasiToken, hapusAuthCookies } from '../utils/jwt'
import prisma from '../utils/prisma'

export default defineEventHandler(async (event: H3Event) => {
  const url = getRequestURL(event)

  if (!url.pathname.startsWith('/api/') || url.pathname.startsWith('/api/auth/login') || url.pathname.startsWith('/api/auth/captcha')) {
    return
  }

  // Skip middleware for refresh token endpoint
  if (url.pathname === '/api/auth/refresh') return

  const token = ambilTokenDariCookie(event)
  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Sesi tidak valid. Silakan login kembali.',
      data: { sukses: false, pesan: 'Sesi tidak valid. Silakan login kembali.', data: null },
    })
  }

  const payload = verifikasiToken(token)
  if (!payload) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Token tidak valid atau sudah kedaluwarsa.',
      data: { sukses: false, pesan: 'Token tidak valid atau sudah kedaluwarsa.', data: null },
    })
  }

  // Check if user is still active
  const pengguna = await prisma.pengguna.findUnique({
    where: { id_pengguna: payload.id_pengguna, dihapus_pada: null },
    select: { status_aktif: true },
  })

  if (!pengguna || !pengguna.status_aktif) {
    hapusAuthCookies(event)
    throw createError({
      statusCode: 403,
      statusMessage: 'Akun tidak aktif. Hubungi administrator.',
      data: { sukses: false, pesan: 'Akun tidak aktif. Hubungi administrator.', data: null },
    })
  }

  // Attach user to event context
  event.context.auth = payload
})
