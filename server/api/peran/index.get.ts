import prisma from '../../utils/prisma'
import { suksesResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'

export default defineEventHandler(async (event) => {
  await wajibSuperadmin(event)

  const data = await prisma.peran.findMany({
    include: {
      _count: { select: { pengguna: true } },
      peran_hak_akses: {
        include: { hak_akses: true }
      }
    },
    orderBy: { nama_peran: 'asc' }
  })

  return suksesResponse(data)
})
