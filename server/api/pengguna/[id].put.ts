import bcrypt from 'bcrypt'
import prisma from '../../utils/prisma'
import { penggunaSchema, validasiInput } from '../../utils/validasi'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'ubah_pengguna')
  const id = parseInt(getRouterParam(event, 'id') || '0')
  const body = await readBody(event)

  // Cek Keberadaan User
  const user = await prisma.pengguna.findUnique({ where: { id_pengguna: id } })
  if (!user) return gagalResponse('Pengguna tidak ditemukan', 404)

  // Validasi Input (Password optional during update)
  const validated = validasiInput(penggunaSchema.partial(), body)

  // Cek Username Unik jika berubah
  if (validated.username && validated.username !== user.username) {
    const existing = await prisma.pengguna.findUnique({ where: { username: validated.username } })
    if (existing) return gagalResponse('Username sudah digunakan', 422)
  }

  const updateData: any = { ...validated }
  
  // Handle Password Update
  if (body.kata_sandi) {
    updateData.kata_sandi = await bcrypt.hash(body.kata_sandi, 10)
  } else {
    delete updateData.kata_sandi
  }

  const result = await prisma.pengguna.update({
    where: { id_pengguna: id },
    data: updateData,
    include: { peran: true }
  })

  await simpanLog(event, 'Pengguna', 'UBAH', `Memperbarui data pengguna: ${result.username}`)

  return suksesResponse(result, 'Pengguna berhasil diperbarui')
})
