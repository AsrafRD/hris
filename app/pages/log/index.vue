<template>
  <div>
    <!-- Page Header -->
    <div class="mb-4">
      <h4 class="fw-bold text-dark mb-1">Log Aktivitas</h4>
      <p class="text-muted mb-0">Audit trail seluruh tindakan pengguna di dalam sistem</p>
    </div>

    <!-- Filters -->
    <div class="card border-0 shadow-sm rounded-4 mb-4">
      <div class="card-body p-4">
        <div class="row g-3">
          <div class="col-md-3">
            <label class="form-label small fw-bold">Cari Modul/Ket</label>
            <input v-model="filters.cari" type="text" class="form-control bg-light" placeholder="Ketik pencarian..." @input="debouncedFetch">
          </div>
          <div class="col-md-2">
            <label class="form-label small fw-bold">Tipe Aksi</label>
            <select v-model="filters.aksi" class="form-select bg-light" @change="fetchData">
              <option value="">Semua Aksi</option>
              <option value="LOGIN">LOGIN</option>
              <option value="LOGOUT">LOGOUT</option>
              <option value="TAMBAH">TAMBAH</option>
              <option value="UBAH">UBAH</option>
              <option value="HAPUS">HAPUS</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label small fw-bold">Tanggal Mulai</label>
            <input v-model="filters.tgl_mulai" type="date" class="form-control bg-light" @change="fetchData">
          </div>
          <div class="col-md-3">
            <label class="form-label small fw-bold">Tanggal Akhir</label>
            <input v-model="filters.tgl_akhir" type="date" class="form-control bg-light" @change="fetchData">
          </div>
          <div class="col-md-1 d-flex align-items-end">
            <button class="btn btn-light w-100" @click="resetFilters" title="Reset">
              <i class="bi bi-arrow-counterclockwise"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Log Table -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <DataTable 
        :columns="columns" 
        :data="items" 
        :loading="loading" 
        :meta="meta"
        @page-change="handlePageChange"
      >
        <template #col-aksi="{ item }">
          <span :class="getAksiClass(item.aksi)" class="badge px-2 py-1 small">
            {{ item.aksi }}
          </span>
        </template>

        <template #col-pengguna="{ item }">
          <div v-if="item.pengguna">
            <div class="fw-bold small">{{ item.pengguna.nama_pengguna }}</div>
            <div class="text-muted" style="font-size: 0.7rem">@{{ item.pengguna.username }}</div>
          </div>
          <span v-else class="text-muted small">Sistem / Anonim</span>
        </template>

        <template #col-dibuat_pada="{ item }">
          <div class="small">{{ formatDate(item.dibuat_pada) }}</div>
          <div class="text-muted" style="font-size: 0.7rem">{{ formatTime(item.dibuat_pada) }}</div>
        </template>

        <template #col-keterangan="{ item }">
          <div class="text-wrap small" style="max-width: 300px">{{ item.keterangan }}</div>
        </template>

        <template #col-ip_address="{ item }">
          <code class="small text-secondary">{{ item.ip_address }}</code>
        </template>

        <template #actions="{ item }">
          <button class="btn btn-light btn-sm rounded-circle" @click="showDetail(item)" title="Detail Log">
            <i class="bi bi-info-circle text-info"></i>
          </button>
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import Swal from 'sweetalert2'

definePageMeta({
  middleware: ['auth', 'rbac'],
  permission: 'lihat_log'
})

const items = ref([])
const meta = ref(null)
const loading = ref(false)

const filters = reactive({
  cari: '',
  aksi: '',
  tgl_mulai: '',
  tgl_akhir: '',
  halaman: 1,
  per_halaman: 15
})

const columns = [
  { key: 'dibuat_pada', label: 'Waktu', style: 'width: 150px' },
  { key: 'pengguna', label: 'Pengguna', style: 'width: 180px' },
  { key: 'modul', label: 'Modul', style: 'width: 100px' },
  { key: 'aksi', label: 'Aksi', class: 'text-center', style: 'width: 100px' },
  { key: 'keterangan', label: 'Keterangan' },
  { key: 'ip_address', label: 'IP', style: 'width: 120px' },
]

const fetchData = async () => {
  loading.value = true
  try {
    const response = await $fetch('/api/log', { query: filters })
    if (response.sukses) {
      items.value = response.data
      meta.value = response.meta
    }
  } catch (err) {}
  finally { loading.value = false }
}

let timeout = null
const debouncedFetch = () => {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    filters.halaman = 1
    fetchData()
  }, 500)
}

const handlePageChange = (page) => {
  filters.halaman = page
  fetchData()
}

const resetFilters = () => {
  Object.assign(filters, {
    cari: '',
    aksi: '',
    tgl_mulai: '',
    tgl_akhir: '',
    halaman: 1
  })
  fetchData()
}

onMounted(fetchData)

const formatDate = (d) => dayjs(d).format('DD MMM YYYY')
const formatTime = (d) => dayjs(d).format('HH:mm:ss')

const getAksiClass = (aksi) => {
  switch (aksi) {
    case 'LOGIN': return 'bg-success-subtle text-success'
    case 'LOGOUT': return 'bg-warning-subtle text-warning'
    case 'TAMBAH': return 'bg-primary-subtle text-primary'
    case 'UBAH': return 'bg-info-subtle text-info'
    case 'HAPUS': return 'bg-danger-subtle text-danger'
    default: return 'bg-light text-dark'
  }
}

const showDetail = (item) => {
  const user = item.pengguna ? item.pengguna.nama_pengguna : 'Sistem / Anonim'
  Swal.fire({
    title: 'Detail Aktivitas',
    html: `
      <div class="text-start" style="font-size: 0.9rem">
        <div class="mb-2"><strong>Pengguna:</strong> ${user}</div>
        <div class="mb-2"><strong>Modul:</strong> ${item.modul}</div>
        <div class="mb-2"><strong>Aksi:</strong> <span class="badge bg-primary">${item.aksi}</span></div>
        <div class="mb-2"><strong>Waktu:</strong> ${formatDate(item.dibuat_pada)} ${formatTime(item.dibuat_pada)}</div>
        <div class="mb-2"><strong>IP Address:</strong> <code>${item.ip_address}</code></div>
        <div class="mb-2"><strong>Keterangan:</strong><br>${item.keterangan}</div>
        <div class="mb-0"><strong>User Agent:</strong><br><small class="text-muted">${item.user_agent}</small></div>
      </div>
    `,
    icon: 'info',
    confirmButtonText: 'Tutup'
  })
}
</script>
