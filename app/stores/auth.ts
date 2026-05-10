import { defineStore } from 'pinia'
import type { AuthUser, ApiResponse } from '../../types'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as AuthUser | null,
    isInitialized: false,
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
    currentUser: (state) => state.user,
    userRole: (state) => state.user?.peran.nama_peran,
    permissions: (state) => state.user?.hak_akses || [],
  },

  actions: {
    setUser(user: AuthUser | null) {
      this.user = user
      this.isInitialized = true
    },

    hasPermission(permission: string) {
      if (this.userRole === 'Superadmin') return true
      return this.permissions.includes(permission)
    },

    async fetchUser() {
      try {
        const response = await $fetch<ApiResponse<AuthUser>>('/api/auth/me')
        if (response.sukses) {
          this.setUser(response.data)
          return response.data
        }
      } catch (error) {
        this.setUser(null)
      } finally {
        this.isInitialized = true
      }
      return null
    },

    async logout() {
      try {
        await $fetch('/api/auth/logout', { method: 'POST' })
      } finally {
        this.setUser(null)
        navigateTo('/login')
      }
    }
  }
})
