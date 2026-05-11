import prisma from '../../utils/prisma'
import { suksesResponse } from '../../utils/response'
import { wajibHakAkses } from '../../utils/rbac'

export default defineEventHandler(async (event) => {
  await wajibSuperadmin(event)

  const data = await prisma.hak_akses.findMany({
    orderBy: [
      { modul: 'asc' },
      { nama_akses: 'asc' }
    ]
  })

  // Group by module for the UI matrix
  const grouped = data.reduce((acc: any, curr: any) => {
    if (!acc[curr.modul]) acc[curr.modul] = []
    acc[curr.modul].push(curr)
    return acc
  }, {})

  return suksesResponse(grouped)
})
