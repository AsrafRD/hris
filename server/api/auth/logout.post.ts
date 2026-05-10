import { simpanLog } from '../../services/logService'
import { hapusAuthCookies } from '../../utils/jwt'
import { suksesResponse } from '../../utils/response'

export default defineEventHandler(async (event) => {
  const auth = event.context.auth
  
  if (auth) {
    await simpanLog(event, 'Auth', 'LOGOUT', `Pengguna ${auth.username} keluar dari sistem`)
  }

  hapusAuthCookies(event)

  return suksesResponse(null, 'Berhasil keluar dari sistem')
})
