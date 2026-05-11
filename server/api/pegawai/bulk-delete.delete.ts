import prisma from '../../utils/prisma'
import { suksesResponse, gagalResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'
import { simpanLog } from '../../services/logService'

export default defineEventHandler(async (event) => {
  await wajibHakAkses(event, 'hapus_pegawai')

  const body = await readBody(event)
  const { ids } = body

  if (!Array.isArray(ids) || ids.length === 0) {
    return gagalResponse('ID pegawai tidak valid', 400)
  }

  const auth = event.context.auth

  // Cek apakah ada pegawai superadmin di dalam daftar yang akan dihapus
  const superadmins = await prisma.pegawai.findMany({
    where: {
      id_pegawai: { in: ids },
      pengguna: {
        peran: { nama_peran: 'Superadmin' }
      }
    }
  })

  if (superadmins.length > 0 && auth?.nama_peran !== 'Superadmin') {
    return gagalResponse('Beberapa data yang Anda pilih adalah Superadmin. Anda tidak memiliki izin untuk menghapusnya.', 403)
  }

  // Soft delete
  await prisma.pegawai.updateMany({
    where: { id_pegawai: { in: ids } },
    data: { 
      dihapus_pada: new Date(),
      status_aktif: false
    }
  })

  await simpanLog(event, 'Pegawai', 'HAPUS', `Menghapus ${ids.length} data pegawai secara massal`)

  return suksesResponse(null, 'Data pegawai berhasil dihapus')
})
