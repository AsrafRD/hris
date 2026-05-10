import crypto from 'crypto'

export function encryptCaptcha(text: string, secret: string): string {
  const key = crypto.createHash('sha256').update(secret).digest()
  const cipher = crypto.createCipheriv('aes-256-cbc', key, Buffer.alloc(16, 0))
  let encrypted = cipher.update(text, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

export function decryptCaptcha(encrypted: string, secret: string): string {
  try {
    const key = crypto.createHash('sha256').update(secret).digest()
    const decipher = crypto.createDecipheriv('aes-256-cbc', key, Buffer.alloc(16, 0))
    let decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
  } catch (error) {
    console.error('Captcha Decryption Error:', error)
    return ''
  }
}
