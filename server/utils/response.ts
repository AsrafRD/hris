import type { H3Event } from 'h3'

export function suksesResponse<T>(data: T, pesan: string = 'Berhasil') {
  return {
    sukses: true,
    pesan,
    data,
  }
}

export function gagalResponse(pesan: string = 'Terjadi kesalahan', statusCode: number = 400) {
  throw createError({
    statusCode,
    statusMessage: pesan,
    data: {
      sukses: false,
      pesan,
      data: null,
    },
  })
}

export function paginasiResponse<T>(
  data: T[],
  totalData: number,
  halaman: number,
  perHalaman: number,
  pesan: string = 'Berhasil'
) {
  return {
    sukses: true,
    pesan,
    data,
    meta: {
      halaman,
      perHalaman,
      totalData,
      totalHalaman: Math.ceil(totalData / perHalaman),
    },
  }
}

export function ambilQueryPaginasi(event: H3Event) {
  const query = getQuery(event)
  const halaman = Math.max(1, parseInt(query.halaman as string) || 1)
  const perHalaman = Math.min(100, Math.max(1, parseInt(query.per_halaman as string) || 10))
  const skip = (halaman - 1) * perHalaman

  return { halaman, perHalaman, skip }
}

export function ambilIpAddress(event: H3Event): string {
  const forwarded = getHeader(event, 'x-forwarded-for')
  if (typeof forwarded === 'string') {
    const parts = forwarded.split(',')
    return parts[0]?.trim() || 'unknown'
  }
  return getHeader(event, 'x-real-ip') || event.node.req.socket.remoteAddress || 'unknown'
}

export function ambilUserAgent(event: H3Event): string {
  return getHeader(event, 'user-agent') || 'unknown'
}
