import { useAuthStore } from '../stores/auth'

export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore()
  
  // If not initialized, try to fetch user
  if (!authStore.isInitialized) {
    await authStore.fetchUser()
  }

  // If still not logged in, redirect to login
  if (!authStore.isLoggedIn) {
    return navigateTo('/login')
  }
})
