const loginAttempts = new Map<string, { count: number; lastAttempt: number }>()

export function cekRateLimit(identifier: string): boolean {
  const config = useRuntimeConfig()
  const maxAttempts = config.loginMaxAttempts || 5
  const windowMs = config.loginWindowMs || 900000

  const now = Date.now()
  const record = loginAttempts.get(identifier)

  if (!record) return true

  if (now - record.lastAttempt > windowMs) {
    loginAttempts.delete(identifier)
    return true
  }

  return record.count < maxAttempts
}

export function tambahLoginAttempt(identifier: string) {
  const now = Date.now()
  const record = loginAttempts.get(identifier)

  if (record) {
    record.count++
    record.lastAttempt = now
  } else {
    loginAttempts.set(identifier, { count: 1, lastAttempt: now })
  }
}

export function resetLoginAttempt(identifier: string) {
  loginAttempts.delete(identifier)
}

export function sanitasiString(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}
