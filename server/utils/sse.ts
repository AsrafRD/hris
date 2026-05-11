import { EventEmitter } from 'events'

class SSEHub extends EventEmitter {
  private static instance: SSEHub

  private constructor() {
    super()
    this.setMaxListeners(0) // Unlimited listeners
  }

  public static getInstance(): SSEHub {
    if (!SSEHub.instance) {
      SSEHub.instance = new SSEHub()
    }
    return SSEHub.instance
  }

  public notifyLogout(userId: number) {
    this.emit('logout', userId)
  }
}

export const sseHub = SSEHub.getInstance()
