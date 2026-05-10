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
          <button class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center gap-2" data-bs-toggle="dropdown">
            <i class="bi bi-download"></i> Ekspor
          </button>
          <ul class="dropdown-menu shadow-sm border-0">
            <li><a class="dropdown-item py-2" href="#" @click.prevent="exportExcel"><i class="bi bi-file-earmark-excel text-success me-2"></i> Excel (.xlsx)</a></li>
            <li><a class="dropdown-item py-2" href="#" @click.prevent="exportPDF"><i class="bi bi-file-earmark-pdf text-danger me-2"></i> PDF (.pdf)</a></li>
          </ul>
        </div>
        <NuxtLink v-if="hasPermission('tambah_pegawai')" to="/pegawai/tambah" class="btn btn-primary d-flex align-items-center gap-2 px-4 shadow-sm">
          <i class="bi bi-plus-lg"></i> Tambah Pegawai
        </NuxtLink>
      </div>
    </div>

    <!-- Filters Card -->
    <div class="card border-0 shadow-sm rounded-4 mb-4">
      <div class="card-body p-4">
        <div class="row g-3">
          <div class="col-12 col-md-4">
            <div class="input-group">
              <span class="input-group-text bg-light border-end-0"><i class="bi bi-search"></i></span>
              <input 
                v-model="filters.cari" 
                type="text" 
                class="form-control bg-light border-start-0" 
                placeholder="Cari Nama, NIP, atau Jabatan..."
                @input="debouncedSearch"
              >
            </div>
          </div>
          <div class="col-12 col-md-3">
            <select v-model="filters.jenis_pegawai" class="form-select bg-light" @change="pegawaiStore.fetchPegawai()">
              <option value="">Semua Jenis Pegawai</option>
              <option value="KONTRAK">Kontrak</option>
              <option value="TETAP">Tetap</option>
              <option value="MAGANG">Magang</option>
            </select>
          </div>
          <div class="col-12 col-md-3">
            <select v-model="filters.status_aktif" class="form-select bg-light" @change="pegawaiStore.fetchPegawai()">
              <option value="">Semua Status</option>
              <option value="true">Aktif</option>
              <option value="false">Nonaktif</option>
            </select>
          </div>
          <div class="col-12 col-md-2 d-grid">
            <button class="btn btn-light" @click="resetFilters">
              <i class="bi bi-arrow-counterclockwise me-1"></i> Reset
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Data Table Card -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <DataTable 
        :columns="columns" 
        :data="pegawaiStore.items" 
        :loading="pegawaiStore.loading" 
        :meta="pegawaiStore.meta"
        @page-change="pegawaiStore.setPage"
      >
        <!-- Column Custom Slots -->
        <template #col-nip="{ item }">
          <span class="fw-bold text-primary">{{ item.nip }}</span>
        </template>

        <template #col-nama_pegawai="{ item }">
          <div class="d-flex align-items-center gap-3">
            <div class="avatar bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 38px; height: 38px">
              <img v-if="item.foto" :src="item.foto" class="rounded-circle w-100 h-100 object-fit-cover">
              <span v-else>{{ item.nama_pegawai.charAt(0) }}</span>
            </div>
            <div>
              <div class="fw-bold text-dark">{{ item.nama_pegawai }}</div>
              <div class="text-muted small">{{ item.email || '-' }}</div>
            </div>
          </div>
        </template>

        <template #col-jenis_pegawai="{ item }">
          <span :class="getStatusClass(item.jenis_pegawai)" class="badge px-3 py-2 rounded-pill">
            {{ item.jenis_pegawai }}
          </span>
        </template>

        <template #col-status_aktif="{ item }">
          <div class="form-check form-switch">
            <input 
              class="form-check-input" 
              type="checkbox" 
              :checked="item.status_aktif" 
              @change="toggleStatus(item)"
              :disabled="!hasPermission('ubah_pegawai')"
            >
            <span class="small" :class="item.status_aktif ? 'text-success' : 'text-danger'">
              {{ item.status_aktif ? 'Aktif' : 'Nonaktif' }}
            </span>
          </div>
        </template>

        <template #actions="{ item }">
          <div class="d-flex gap-1 justify-content-end">
            <NuxtLink :to="`/pegawai/${item.id_pegawai}`" class="btn btn-light btn-sm rounded-circle shadow-sm" title="Detail">
              <i class="bi bi-eye text-primary"></i>
            </NuxtLink>
            <NuxtLink v-if="hasPermission('ubah_pegawai')" :to="`/pegawai/edit/${item.id_pegawai}`" class="btn btn-light btn-sm rounded-circle shadow-sm" title="Ubah">
              <i class="bi bi-pencil text-warning"></i>
            </NuxtLink>
            <button v-if="hasPermission('hapus_pegawai')" @click="confirmDelete(item)" class="btn btn-light btn-sm rounded-circle shadow-sm" title="Hapus">
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

definePageMeta({
  middleware: ['auth']
})

const { hasPermission } = useAuth()
const pegawaiStore = usePegawaiStore()
const filters = pegawaiStore.filters

const columns = [
  { key: 'nip', label: 'NIP', style: 'width: 150px' },
  { key: 'nama_pegawai', label: 'Nama Pegawai' },
  { key: 'jabatan', label: 'Jabatan' },
  { key: 'jenis_pegawai', label: 'Jenis', class: 'text-center' },
  { key: 'status_aktif', label: 'Status', class: 'text-center' },
]

onMounted(() => {
  pegawaiStore.fetchPegawai()
})

let searchTimeout = null
const debouncedSearch = () => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    pegawaiStore.setFilters({ cari: filters.cari })
  }, 500)
}

const resetFilters = () => {
  pegawaiStore.setFilters({
    cari: '',
    jenis_pegawai: '',
    status_aktif: '',
    jabatan: []
  })
}

const getStatusClass = (status) => {
  switch (status) {
    case 'TETAP': return 'bg-success-subtle text-success'
    case 'KONTRAK': return 'bg-warning-subtle text-warning'
    case 'MAGANG': return 'bg-info-subtle text-info'
    default: return 'bg-secondary-subtle text-secondary'
  }
}

const confirmDelete = async (pegawai) => {
  const result = await Swal.fire({
    title: 'Konfirmasi Hapus',
    text: `Apakah Anda yakin ingin menghapus data pegawai: ${pegawai.nama_pegawai}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, Hapus',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#dc3545'
  })
  
  if (result.isConfirmed) {
    try {
      const success = await pegawaiStore.deletePegawai(pegawai.id_pegawai)
      if (success) {
        Swal.fire('Berhasil!', 'Data pegawai berhasil dihapus', 'success')
      }
    } catch (err) {
      Swal.fire('Gagal!', 'Gagal menghapus data pegawai', 'error')
    }
  }
}

const toggleStatus = async (pegawai) => {
  // Implementation for bulk status update or single update
}

// Export Excel
const exportExcel = () => {
  const data = pegawaiStore.items.map(p => ({
    NIP: p.nip,
    Nama: p.nama_pegawai,
    Email: p.email,
    'No. HP': p.nomor_hp,
    Jabatan: p.jabatan,
    Departemen: p.departemen,
    Jenis: p.jenis_pegawai,
    Status: p.status_aktif ? 'Aktif' : 'Nonaktif'
  }))
  
  const ws = XLSX.utils.json_to_sheet(data)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, "Pegawai")
  XLSX.writeFile(wb, "Data_Pegawai.xlsx")
}

// Export PDF
const exportPDF = () => {
  const doc = new jsPDF()
  doc.text("Daftar Pegawai", 14, 15)
  
  const body = pegawaiStore.items.map(p => [
    p.nip, p.nama_pegawai, p.jabatan, p.departemen, p.jenis_pegawai, p.status_aktif ? 'Aktif' : 'Nonaktif'
  ])

  doc.autoTable({
    head: [['NIP', 'Nama', 'Jabatan', 'Dept', 'Jenis', 'Status']],
    body: body,
    startY: 20
  })
  
  doc.save("Data_Pegawai.pdf")
}
</script>
