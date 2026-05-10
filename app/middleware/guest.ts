import { useAuthStore } from '../stores/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()
  
  if (!authStore.isInitialized) {
    await authStore.fetchUser()
  }

  // If already logged in, redirect to dashboard
  if (authStore.isLoggedIn) {
    return navigateTo('/dashboard')
  }
})
