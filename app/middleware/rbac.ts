import { useAuthStore } from '../stores/auth'

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()
  
  // Skip if no permission meta defined
  const requiredPermission = to.meta.permission as string
  if (!requiredPermission) return

  if (!authStore.hasPermission(requiredPermission)) {
    return navigateTo('/dashboard', { replace: true })
  }
})
