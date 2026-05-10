import prisma from '../../utils/prisma'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'hapus_pegawai')

  const id = parseInt(event.context.params?.id || '0')
  if (!id) return gagalResponse('ID tidak valid', 400)

  // Cek apakah ini pegawai superadmin (Tidak boleh dihapus oleh Admin HRD)
  const auth = event.context.auth
  const pegawai = await prisma.pegawai.findUnique({
    where: { id_pegawai: id },
    include: { pengguna: { include: { peran: true } } }
  })

  if (pegawai?.pengguna?.peran.nama_peran === 'Superadmin' && auth?.nama_peran !== 'Superadmin') {
    return gagalResponse('Anda tidak memiliki izin untuk menghapus data Superadmin', 403)
  }

  // Soft Delete
  const result = await prisma.pegawai.update({
    where: { id_pegawai: id },
    data: { 
      dihapus_pada: new Date(),
      status_aktif: false
    }
  })

  await simpanLog(event, 'Pegawai', 'HAPUS', `Menghapus pegawai: ${result.nama_pegawai} (${result.nip})`)

  return suksesResponse(null, 'Data pegawai berhasil dihapus')
})
