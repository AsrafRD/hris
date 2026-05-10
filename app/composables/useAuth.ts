import type { LoginPayload, ApiResponse, AuthUser } from '../../types'
import { useAuthStore } from '../stores/auth'

export const useAuth = () => {
  const authStore = useAuthStore()
  const loading = ref(false)
  const error = ref<string | null>(null)

  const login = async (payload: LoginPayload) => {
    loading.value = true
    error.value = null
    try {
      const response = await $fetch<ApiResponse<AuthUser>>('/api/auth/login', {
        method: 'POST',
        body: payload
      })

      if (response.sukses) {
        authStore.setUser(response.data)
        return response
      }
    } catch (err: any) {
      error.value = err.data?.pesan || 'Gagal login. Periksa kembali identitas Anda.'
      throw err
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    await authStore.logout()
  }

  const getCaptcha = async () => {
    const response = await $fetch<ApiResponse<{ svg: string }>>('/api/auth/captcha')
    return response.data.svg
  }

  return {
    user: computed(() => authStore.user),
    isLoggedIn: computed(() => authStore.isLoggedIn),
    loading,
    error,
    login,
    logout,
    getCaptcha,
    hasPermission: authStore.hasPermission
  }
}
