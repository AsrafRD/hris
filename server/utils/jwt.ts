import type { H3Event } from 'h3'
import jwt from 'jsonwebtoken'
import type { TokenPayload } from '../../types'

const config = useRuntimeConfig()

export function buatToken(payload: TokenPayload): string {
  return jwt.sign(payload, config.jwtSecret as string, {
    expiresIn: config.jwtExpiresIn as any,
  })
}

export function buatRefreshToken(payload: TokenPayload): string {
  return jwt.sign(payload, config.jwtRefreshSecret as string, {
    expiresIn: config.jwtRefreshExpiresIn as any,
  })
}

export function verifikasiToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, config.jwtSecret as string) as TokenPayload
  } catch {
    return null
  }
}

export function verifikasiRefreshToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, config.jwtRefreshSecret as string) as TokenPayload
  } catch {
    return null
  }
}

export function setAuthCookies(event: H3Event, accessToken: string, refreshToken: string, ingatSaya: boolean) {
  const maxAgeAccess = 8 * 60 * 60
  const maxAgeRefresh = ingatSaya ? 7 * 24 * 60 * 60 : 24 * 60 * 60

  setCookie(event, 'token', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: maxAgeAccess,
    path: '/',
  })

  setCookie(event, 'refresh_token', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: maxAgeRefresh,
    path: '/',
  })
}

export function hapusAuthCookies(event: H3Event) {
  deleteCookie(event, 'token', { path: '/' })
  deleteCookie(event, 'refresh_token', { path: '/' })
}

export function ambilTokenDariCookie(event: H3Event): string | null {
  return getCookie(event, 'token') || null
}

export function ambilRefreshTokenDariCookie(event: H3Event): string | null {
  return getCookie(event, 'refresh_token') || null
}
