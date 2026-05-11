<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
      <div>
        <h4 class="fw-bold text-dark mb-1">Daftar Pegawai</h4>
        <p class="text-muted mb-0">Kelola informasi data seluruh pegawai perusahaan</p>
      </div>
      <div class="d-flex gap-2">
        <div class="dropdown">
          <button class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2"
            data-bs-toggle="dropdown">
            <i class="bi bi-download"></i> Ekspor
          </button>
          <ul class="dropdown-menu shadow-sm border-0">
            <li><a class="dropdown-item py-2" href="#" @click.prevent="exportExcel"><i
                  class="bi bi-file-earmark-excel text-success me-2"></i> Excel (.xlsx)</a></li>
            <li><a class="dropdown-item py-2" href="#" @click.prevent="exportPDF"><i
                  class="bi bi-file-earmark-pdf text-danger me-2"></i> PDF (.pdf)</a></li>
          </ul>
        </div>
        <NuxtLink v-if="hasPermission('tambah_pegawai')" to="/pegawai/tambah"
          class="btn btn-primary d-flex align-items-center gap-2 px-4 shadow-sm">
          <i class="bi bi-plus-lg"></i> Tambah Pegawai
        </NuxtLink>
      </div>
    </div>

    <!-- Filters Card -->
    <div class="card border-0 shadow-sm rounded-4 mb-4">
      <div class="card-body p-4">
        <div class="row g-3 align-items-end">
          <!-- Search -->
          <div class="col-12 col-md-3">
            <label class="form-label small fw-bold text-muted">Pencarian</label>
            <div class="input-group shadow-sm border rounded-3 overflow-hidden">
              <span class="input-group-text bg-white border-0"><i class="bi bi-search text-muted"></i></span>
              <input v-model="filters.cari" type="text" class="form-control border-0 bg-white"
                placeholder="Nama, NIP, Jabatan..." @input="debouncedSearch">
            </div>
          </div>

          <!-- Jabatan Dropdown -->
          <div class="col-12 col-md-2">
            <label class="form-label small fw-bold text-muted">Jabatan</label>
            <select v-model="filters.jabatan" class="form-select bg-light border-0 shadow-sm"
              placeholder="Pilih Jabatan" @change="pegawaiStore.fetchPegawai()">
              <option value="">Semua Jabatan</option>
              <option value="Manager">Manager</option>
              <option value="Staf">Staf</option>
              <option value="Magang">Magang</option>
            </select>
          </div>

          <!-- Masa Kerja Filter -->
          <div class="col-12 col-md-4">
            <label class="form-label small fw-bold text-muted">Masa Kerja (Tahun)</label>
            <div class="input-group shadow-sm border rounded-3 overflow-hidden">
              <select v-model="filters.masa_kerja_operator" class="form-select border-0 bg-light"
                style="max-width: 80px" @change="pegawaiStore.fetchPegawai()">
                <option value="">Op</option>
                <option value=">">&gt;</option>
                <option value="=">=</option>
                <option value="<">&lt;</option>
              </select>
              <input v-model="filters.masa_kerja_nilai" type="number" class="form-control border-0 bg-white"
                placeholder="Nilai..." @input="debouncedSearch">
            </div>
          </div>

          <!-- Reset Button aligned -->
          <div class="col-12 col-md-3">
            <div class="d-flex gap-2">
              <button class="btn btn-light border flex-grow-1" @click="resetFilters">
                <i class="bi bi-arrow-counterclockwise me-1"></i> Reset
              </button>
            </div>
          </div>
        </div>

        <!-- Bulk Actions -->
        <div v-if="selectedIds.length > 0"
          class="mt-4 p-3 bg-primary-subtle rounded-3 d-flex align-items-center justify-content-between">
          <span class="fw-bold text-primary">{{ selectedIds.length }} data terpilih</span>
          <div class="d-flex gap-2">
            <select class="form-select form-select-sm" style="width: 150px" @change="handleBulkStatus($event)">
              <option value="">Ubah Status...</option>
              <option value="true">Aktifkan</option>
              <option value="false">Nonaktifkan</option>
            </select>
            <button class="btn btn-danger btn-sm px-3" @click="handleBulkDelete">Hapus Terpilih</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table Card -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <DataTable :columns="columns" :data="pegawaiStore.items" :loading="pegawaiStore.loading" :meta="pegawaiStore.meta"
        selectable item-key="id_pegawai" :selected-items="selectedIds" :sort-key="filters.sortKey"
        :sort-order="filters.sortOrder" @page-change="pegawaiStore.setPage" @sort="handleSort"
        @toggle-select="toggleSelect" @toggle-select-all="toggleSelectAll">
        <!-- No. Urut -->
        <template #col-no_urut="{ index }">
          {{ ((pegawaiStore.meta?.halaman - 1) * pegawaiStore.meta?.perHalaman) + index + 1 }}
        </template>

        <!-- Column Custom Slots -->
        <template #col-nip="{ item }">
          <span class="fw-bold text-primary">{{ item.nip }}</span>
        </template>

        <template #col-nama_pegawai="{ item }">
          <div class="d-flex align-items-center gap-3">
            <div
              class="avatar bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center"
              style="width: 38px; height: 38px">
              <img v-if="item.foto" :src="item.foto" class="rounded-circle w-100 h-100 object-fit-cover">
              <span v-else>{{ item.nama_pegawai.charAt(0) }}</span>
            </div>
            <div>
              <div class="fw-bold text-dark">{{ item.nama_pegawai }}</div>
              <div class="text-muted small">{{ item.departemen }}</div>
            </div>
          </div>
        </template>

        <template #col-tanggal_masuk="{ item }">
          {{ formatDate(item.tanggal_masuk) }}
        </template>

        <template #col-masa_kerja="{ item }">
          {{ calculateTenure(item.tanggal_masuk) }} Thn
        </template>

        <template #actions="{ item }">
          <div class="d-flex gap-1 justify-content-end">
            <NuxtLink :to="`/pegawai/${item.id_pegawai}`" class="btn btn-light btn-sm rounded-circle shadow-sm"
              title="Detail">
              <i class="bi bi-eye text-primary"></i>
            </NuxtLink>
            <NuxtLink v-if="hasPermission('ubah_pegawai')" :to="`/pegawai/edit/${item.id_pegawai}`"
              class="btn btn-light btn-sm rounded-circle shadow-sm" title="Ubah">
              <i class="bi bi-pencil text-warning"></i>
            </NuxtLink>
            <button class="btn btn-light btn-sm rounded-circle shadow-sm" title="Download"
              @click="downloadSinglePDF(item)">
              <i class="bi bi-download text-success"></i>
            </button>
            <button 
              v-if="hasPermission('hapus_pegawai') && (item.pengguna?.peran?.nama_peran !== 'Superadmin' || hasPermission('superadmin'))" 
              @click="confirmDelete(item)" 
              class="btn btn-light btn-sm rounded-circle shadow-sm" 
              title="Hapus"
            >
              <i class="bi bi-trash text-danger"></i>
            </button>
          </div>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { usePegawaiStore } from '~/stores/pegawai'
import * as XLSX from 'xlsx'
import { jsPDF } from 'jspdf'
import 'jspdf-autotable'
import Swal from 'sweetalert2'
import dayjs from 'dayjs'

definePageMeta({
  middleware: ['auth']
})

const { hasPermission } = useAuth()
const pegawaiStore = usePegawaiStore()
const filters = pegawaiStore.filters

const selectedIds = ref([])

const columns = [
  { key: 'no_urut', label: 'No.' },
  { key: 'nip', label: 'NIP', style: 'width: 140px' },
  { key: 'nama_pegawai', label: 'Nama' },
  { key: 'jabatan', label: 'Jabatan' },
  { key: 'tanggal_masuk', label: 'Tgl Masuk' },
  { key: 'masa_kerja', label: 'Masa Kerja' },
]

onMounted(() => {
  pegawaiStore.fetchPegawai()
})

let searchTimeout = null
const debouncedSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    pegawaiStore.setFilters({
      cari: filters.cari,
      masa_kerja_nilai: filters.masa_kerja_nilai
    })
  }, 500)
}

const handleSort = ({ key, order }) => {
  pegawaiStore.setFilters({ sortKey: key, sortOrder: order })
}

const toggleSelect = (id) => {
  const index = selectedIds.value.indexOf(id)
  if (index > -1) selectedIds.value.splice(index, 1)
  else selectedIds.value.push(id)
}

const toggleSelectAll = () => {
  if (selectedIds.value.length === pegawaiStore.items.length) {
    selectedIds.value = []
  } else {
    selectedIds.value = pegawaiStore.items.map(i => i.id_pegawai)
  }
}

const resetFilters = () => {
  pegawaiStore.setFilters({
    cari: '',
    jabatan: '',
    masa_kerja_operator: '',
    masa_kerja_nilai: '',
    sortKey: 'dibuat_pada',
    sortOrder: 'desc'
  })
}

// Helpers
const formatDate = (date) => {
  if (!date) return '-'
  return dayjs(date).format('DD/MM/YYYY')
}

const calculateTenure = (startDate) => {
  if (!startDate) return 0
  return dayjs().diff(dayjs(startDate), 'year')
}

const handleBulkStatus = async (event) => {
  const status = event.target.value
  if (!status) return

  const result = await Swal.fire({
    title: 'Ubah Status',
    text: `Ubah status ${selectedIds.value.length} pegawai terpilih?`,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Ya, Ubah',
  })

  if (result.isConfirmed) {
    try {
      await $fetch('/api/pegawai/bulk-status', {
        method: 'PATCH',
        body: { ids: selectedIds.value, status: status === 'true' }
      })
      Swal.fire('Berhasil!', 'Status berhasil diperbarui', 'success')
      selectedIds.value = []
      pegawaiStore.fetchPegawai()
    } catch (err) {
      Swal.fire('Gagal!', err.data?.pesan || 'Terjadi kesalahan sistem atau akses ditolak', 'error')
    }
  }
  event.target.value = ''
}

const handleBulkDelete = async () => {
  const result = await Swal.fire({
    title: 'Konfirmasi Hapus',
    text: `Hapus ${selectedIds.value.length} data pegawai terpilih?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, Hapus',
    confirmButtonColor: '#dc3545'
  })

  if (result.isConfirmed) {
    try {
      await $fetch('/api/pegawai/bulk-delete', {
        method: 'DELETE',
        body: { ids: selectedIds.value }
      })
      Swal.fire('Berhasil!', 'Data berhasil dihapus', 'success')
      selectedIds.value = []
      pegawaiStore.fetchPegawai()
    } catch (err) {
      Swal.fire('Gagal!', err.data?.pesan || 'Terjadi kesalahan sistem atau akses ditolak', 'error')
    }
  }
}

const confirmDelete = async (pegawai) => {
  const result = await Swal.fire({
    title: 'Konfirmasi Hapus',
    text: `Hapus data pegawai: ${pegawai.nama_pegawai}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, Hapus',
    confirmButtonColor: '#dc3545'
  })

  if (result.isConfirmed) {
    const success = await pegawaiStore.deletePegawai(pegawai.id_pegawai)
    if (success) Swal.fire('Berhasil!', 'Data pegawai dihapus', 'success')
  }
}

const downloadSinglePDF = (pegawai) => {
  const doc = new jsPDF()
  doc.setFontSize(18)
  doc.text('Biodata Pegawai', 14, 20)
  doc.setFontSize(12)
  doc.text(`NIP: ${pegawai.nip}`, 14, 35)
  doc.text(`Nama: ${pegawai.nama_pegawai}`, 14, 45)
  doc.text(`Jabatan: ${pegawai.jabatan}`, 14, 55)
  doc.text(`Departemen: ${pegawai.departemen}`, 14, 65)
  doc.save(`Pegawai_${pegawai.nip}.pdf`)
}

const exportExcel = () => {
  const data = pegawaiStore.items.map(p => ({
    NIP: p.nip,
    Nama: p.nama_pegawai,
    Jabatan: p.jabatan,
    'Tgl Masuk': formatDate(p.tanggal_masuk),
    'Masa Kerja': calculateTenure(p.tanggal_masuk) + ' Tahun'
  }))
  const ws = XLSX.utils.json_to_sheet(data)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, "Pegawai")
  XLSX.writeFile(wb, "Daftar_Pegawai.xlsx")
}

const exportPDF = () => {
  const doc = new jsPDF()
  doc.text("Daftar Pegawai", 14, 15)
  const body = pegawaiStore.items.map((p, i) => [
    i + 1, p.nip, p.nama_pegawai, p.jabatan, formatDate(p.tanggal_masuk), calculateTenure(p.tanggal_masuk) + ' Thn'
  ])
  doc.autoTable({
    head: [['No', 'NIP', 'Nama', 'Jabatan', 'Tgl Masuk', 'Masa Kerja']],
    body: body,
    startY: 20
  })
  doc.save("Daftar_Pegawai.pdf")
}
</script>
