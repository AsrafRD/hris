import { defineStore } from 'pinia'
import type { Pegawai, PaginationMeta, ApiResponsePagination, ApiResponse } from '../../types'

export const usePegawaiStore = defineStore('pegawai', {
    state: () => ({
        items: [] as Pegawai[],
        meta: null as PaginationMeta | null,
        loading: false,
        filters: {
            cari: '',
            jabatan: [],
            jenis_pegawai: '',
            status_aktif: '',
            masa_kerja_operator: '',
            masa_kerja_nilai: '',
            sortKey: 'dibuat_pada',
            sortOrder: 'desc',
            halaman: 1,
            per_halaman: 10,
        } as any,
    }),

    actions: {
        async fetchPegawai() {
            this.loading = true
            try {
                const query: any = {
                    halaman: this.filters.halaman,
                    per_halaman: this.filters.per_halaman,
                    sortKey: this.filters.sortKey,
                    sortOrder: this.filters.sortOrder,
                }
                if (this.filters.cari) query.cari = this.filters.cari
                if (this.filters.jenis_pegawai) query.jenis_pegawai = this.filters.jenis_pegawai
                if (this.filters.status_aktif !== '') query.status_aktif = this.filters.status_aktif
                if (this.filters.jabatan) {
                    query.jabatan = Array.isArray(this.filters.jabatan) 
                        ? this.filters.jabatan.join(',') 
                        : this.filters.jabatan
                }
                if (this.filters.masa_kerja_operator && this.filters.masa_kerja_nilai !== '') {
                    query.masa_kerja_operator = this.filters.masa_kerja_operator
                    query.masa_kerja_nilai = this.filters.masa_kerja_nilai
                }

                const response = await $fetch<ApiResponsePagination<Pegawai>>('/api/pegawai', { query })
                if (response.sukses) {
                    this.items = response.data
                    this.meta = response.meta
                }
            } catch (error) {
                console.error('Gagal mengambil data pegawai', error)
            } finally {
                this.loading = false
            }
        },

        setPage(page: number) {
            this.filters.halaman = page
            this.fetchPegawai()
        },

        setFilters(filters: any) {
            this.filters = { ...this.filters, ...filters, halaman: 1 }
            this.fetchPegawai()
        },

        async deletePegawai(id: number) {
            try {
                const response = await $fetch<ApiResponse<any>>(`/api/pegawai/${id}`, { method: 'DELETE' })
                if (response.sukses) {
                    await this.fetchPegawai()
                    return true
                }
            } catch (error) {
                throw error
            }
            return false
        }
    }
})
