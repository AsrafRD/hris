import { sseHub } from '../../utils/sse'

export default defineEventHandler(async (event) => {
  // Get current user from context (populated by auth middleware)
  const auth = event.context.auth
  if (!auth) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const userId = auth.id_pengguna

  const eventStream = createEventStream(event)

  // Listen for logout event for THIS user
  const logoutListener = (targetUserId: number) => {
    if (targetUserId === userId) {
      eventStream.push({
        event: 'logout',
        data: JSON.stringify({ message: 'Akun Anda telah dinonaktifkan.' })
      })
    }
  }

  sseHub.on('logout', logoutListener)

  // Clean up on connection close
  eventStream.onClosed(() => {
    sseHub.off('logout', logoutListener)
  })

  // Keep alive every 30 seconds
  const keepAliveInterval = setInterval(() => {
    eventStream.push({ event: 'ping', data: 'keep-alive' })
  }, 30000)

  eventStream.onClosed(() => {
    clearInterval(keepAliveInterval)
  })

  return eventStream.send()
})
