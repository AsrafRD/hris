import svgCaptcha from 'svg-captcha'
import { encryptCaptcha } from '../../utils/captcha'
import { suksesResponse } from '../../utils/response'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  
  // Konfigurasi captcha
  const captcha = svgCaptcha.create({
    size: 4, // 4 karakter
    noise: 3, // 3 garis noise
    color: true,
    background: '#f8f9fa',
    width: 120,
    height: 40,
    fontSize: 40,
  })

  // DEBUG LOG
  console.log('Generated Captcha:', captcha.text.toLowerCase())

  // Simpan nilai captcha di cookie (dienkripsi)
  const encryptedValue = encryptCaptcha(captcha.text.toLowerCase(), config.jwtSecret)
  
  setCookie(event, 'captcha_val', encryptedValue, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 300, // Berlaku 5 menit
    path: '/',
  })

  // Return SVG dan data image
  return suksesResponse({
    svg: captcha.data
  }, 'Captcha berhasil digenerate')
})
