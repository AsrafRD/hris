import bcrypt from 'bcrypt'
import type { LoginPayload, AuthUser } from '../../../types'
import { loginSchema, validasiInput } from '../../utils/validasi'
import { ambilIpAddress } from '../../utils/response'
import { cekRateLimit, tambahLoginAttempt, resetLoginAttempt } from '../../utils/keamanan'
import { buatToken, buatRefreshToken, setAuthCookies } from '../../utils/jwt'
import { simpanLog } from '../../services/logService'
import { ambilSemuaHakAkses } from '../../utils/rbac'
import prisma from '../../utils/prisma'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { decryptCaptcha } from '../../utils/captcha'

export default defineEventHandler(async (event) => {
  // 1. Ambil data login
  const body = await readBody<LoginPayload>(event)
  
  // 2. Validasi input menggunakan Zod
  const validatedData = validasiInput(loginSchema, body)

  // 3. Rate Limit Check (Security)
  const identifier = `${ambilIpAddress(event)}:${validatedData.identitas}`
  if (!cekRateLimit(identifier)) {
    return gagalResponse('Terlalu banyak percobaan login. Silakan tunggu beberapa menit.', 429)
  }

  // 4. Captcha Validation
  const captchaCookie = getCookie(event, 'captcha_val')
  const config = useRuntimeConfig()
  
  if (!captchaCookie) {
    return gagalResponse('Captcha kadaluarsa, silakan refresh', 422)
  }

  const decryptedCaptcha = decryptCaptcha(captchaCookie, config.jwtSecret)
  
  // DEBUG LOG (Hapus jika sudah fix)
  console.log('Captcha Debug:', {
    input: validatedData.captcha.toLowerCase(),
    expected: decryptedCaptcha,
    cookieExists: !!captchaCookie
  })
  
  if (validatedData.captcha.toLowerCase() !== decryptedCaptcha) {
    tambahLoginAttempt(identifier)
    // Clear captcha cookie after failed attempt to force new one
    deleteCookie(event, 'captcha_val')
    return gagalResponse('Captcha tidak valid', 422)
  }

  // Clear captcha cookie after successful validation
  deleteCookie(event, 'captcha_val')

  // 5. Cari pengguna berdasarkan username, email, atau nomor_hp
  const pengguna = await prisma.pengguna.findFirst({
    where: {
      OR: [
        { username: validatedData.identitas },
        { email: validatedData.identitas },
        { nomor_hp: validatedData.identitas },
      ],
      dihapus_pada: null,
    },
    include: {
      peran: true,
    }
  })

  if (!pengguna) {
    tambahLoginAttempt(identifier)
    return gagalResponse('Identitas atau kata sandi salah', 401)
  }

  if (!pengguna.status_aktif) {
    return gagalResponse('Akun sedang dinonaktifkan, silakan konfirmasi ke admin', 403)
  }

  // 6. Verifikasi Password
  const passwordMatch = await bcrypt.compare(validatedData.kata_sandi, pengguna.kata_sandi)
  if (!passwordMatch) {
    tambahLoginAttempt(identifier)
    return gagalResponse('Identitas atau kata sandi salah', 401)
  }

  // 7. Generate JWT & Cookies
  const tokenPayload = {
    id_pengguna: pengguna.id_pengguna,
    username: pengguna.username,
    id_peran: pengguna.id_peran,
    nama_peran: pengguna.peran.nama_peran,
  }

  const accessToken = buatToken(tokenPayload)
  const refreshToken = buatRefreshToken(tokenPayload)

  setAuthCookies(event, accessToken, refreshToken, validatedData.ingat_saya)
  resetLoginAttempt(identifier)

  // 8. Update terakhir login
  await prisma.pengguna.update({
    where: { id_pengguna: pengguna.id_pengguna },
    data: { terakhir_login: new Date() }
  })

  // 9. Simpan Log
  await simpanLog(event, 'Auth', 'LOGIN', `Pengguna ${pengguna.username} berhasil login`)

  // 10. Ambil Hak Akses
  const hakAkses = await ambilSemuaHakAkses(pengguna.id_peran)

  const authUser: AuthUser = {
    id_pengguna: pengguna.id_pengguna,
    nama_pengguna: pengguna.nama_pengguna,
    username: pengguna.username,
    email: pengguna.email,
    nomor_hp: pengguna.nomor_hp,
    foto: pengguna.foto,
    peran: {
      id_peran: pengguna.id_peran,
      nama_peran: pengguna.peran.nama_peran,
    },
    hak_akses: hakAkses,
  }

  return suksesResponse(authUser, 'Login berhasil')
})
