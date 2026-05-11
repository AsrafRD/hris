import bcrypt from 'bcrypt'
import prisma from '../../utils/prisma'
import { penggunaSchema, validasiInput } from '../../utils/validasi'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'tambah_pengguna')

  const body = await readBody(event)
  if (body.kata_sandi === '') delete body.kata_sandi
  const validated = validasiInput(penggunaSchema, body)

  // Cek Username Unik
  const existingUsername = await prisma.pengguna.findUnique({
    where: { username: validated.username }
  })
  if (existingUsername) return gagalResponse('Username sudah digunakan', 422)

  // Password Auto-generated if not provided
  const rawPassword = validated.kata_sandi || Math.random().toString(36).slice(-10) + 'A1!'
  const passwordHash = await bcrypt.hash(rawPassword, 10)

  const result = await prisma.pengguna.create({
    data: {
      ...validated,
      kata_sandi: passwordHash,
      status_aktif: true
    },
    include: { peran: true }
  })

  await simpanLog(event, 'Pengguna', 'TAMBAH', `Menambah pengguna baru: ${result.username} (Peran: ${result.peran.nama_peran})`)

  return suksesResponse({
    ...result,
    kata_sandi_plain: rawPassword // Only return once for record-keeping during creation
  }, 'Pengguna berhasil ditambahkan')
})
