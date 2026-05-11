<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
      <div>
        <h4 class="fw-bold text-dark mb-1">Manajemen Pengguna</h4>
        <p class="text-muted mb-0">Kelola hak akses dan akun sistem pegawai</p>
      </div>
      <button v-if="hasPermission('tambah_pengguna')" class="btn btn-primary d-flex align-items-center gap-2 px-4 shadow-sm" @click="openAddModal">
        <i class="bi bi-person-plus-fill"></i> Tambah Pengguna
      </button>
    </div>

    <!-- User Table Card -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <DataTable 
        :columns="columns" 
        :data="items" 
        :loading="loading" 
        :meta="meta"
        @page-change="handlePageChange"
      >
        <template #col-nama_pengguna="{ item }">
          <div class="d-flex align-items-center gap-3">
            <div class="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 35px; height: 35px">
              {{ item.nama_pengguna.charAt(0) }}
            </div>
            <div>
              <div class="fw-bold text-dark">{{ item.nama_pengguna }}</div>
              <div class="text-muted small">@{{ item.username }}</div>
            </div>
          </div>
        </template>

        <template #col-peran="{ item }">
          <span class="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill">
            {{ item.peran.nama_peran }}
          </span>
        </template>

        <template #col-status_aktif="{ item }">
          <span :class="item.status_aktif ? 'text-success' : 'text-danger'" class="fw-bold small">
            <i :class="item.status_aktif ? 'bi bi-check-circle-fill' : 'bi bi-x-circle-fill'"></i>
            {{ item.status_aktif ? 'Aktif' : 'Nonaktif' }}
          </span>
        </template>

        <template #actions="{ item }">
          <div class="d-flex gap-1 justify-content-end">
            <button v-if="hasPermission('ubah_pengguna')" class="btn btn-light btn-sm rounded-circle" @click="openEditModal(item)">
              <i class="bi bi-pencil text-warning"></i>
            </button>
            <button v-if="hasPermission('hapus_pengguna') && item.id_pengguna !== user.id_pengguna" class="btn btn-light btn-sm rounded-circle" @click="confirmDelete(item)">
              <i class="bi bi-trash text-danger"></i>
            </button>
          </div>
        </template>
      </DataTable>
    </div>

    <!-- User Modal -->
    <div v-if="showModal" class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow-lg rounded-4">
          <div class="modal-header border-0 p-4 pb-0">
            <h5 class="modal-title fw-bold">{{ isEdit ? 'Ubah Pengguna' : 'Tambah Pengguna Baru' }}</h5>
            <button type="button" class="btn-close" @click="showModal = false"></button>
          </div>
          <form @submit.prevent="handleSubmit">
            <div class="modal-body p-4">
              <!-- Nama Pengguna with Autocomplete -->
              <div class="mb-3 position-relative">
                <label class="form-label fw-bold small">Nama Pengguna (Data Pegawai)</label>
                <div class="input-group">
                  <span class="input-group-text bg-light border-end-0"><i class="bi bi-person-badge"></i></span>
                  <input 
                    v-model="employeeSearch" 
                    type="text" 
                    class="form-control bg-light border-start-0" 
                    placeholder="Ketik nama pegawai (min. 2 huruf)..." 
                    @input="handleEmployeeSearch"
                    :readonly="isEdit"
                    required
                  >
                </div>
                <!-- Autocomplete Dropdown -->
                <div v-if="showEmployeeDropdown" class="list-group position-absolute w-100 shadow-sm z-3 mt-1 overflow-auto" style="max-height: 200px;">
                  <button 
                    v-for="emp in employeeResults" 
                    :key="emp.id_pegawai"
                    type="button"
                    class="list-group-item list-group-item-action border-0 py-2 px-3"
                    @click="selectEmployee(emp)"
                  >
                    <div class="fw-bold small">{{ emp.nama_pegawai }}</div>
                    <div class="text-muted extra-small">NIP: {{ emp.nip }} | {{ emp.jabatan }}</div>
                  </button>
                </div>
                <div v-if="searchingEmployee" class="position-absolute end-0 top-50 translate-middle-y me-3 mt-3 spinner-border spinner-border-sm text-primary"></div>
                <input v-model="form.id_pegawai" type="hidden" required>
                <div v-if="!form.id_pegawai && !isEdit" class="text-danger extra-small mt-1">Silakan pilih pegawai dari daftar autosuggest</div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold small">Username</label>
                <input 
                  v-model="form.username" 
                  type="text" 
                  class="form-control bg-light" 
                  :class="{'is-invalid': validationErrors.username}"
                  :readonly="isEdit" 
                  placeholder="min 6 karakter, lowercase, alphanumeric" 
                  @keyup="validateUsername"
                  required
                >
                <div class="invalid-feedback extra-small">{{ validationErrors.username }}</div>
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold small">Email</label>
                <input v-model="form.email" type="email" class="form-control bg-light" placeholder="email@perusahaan.com">
              </div>

              <div class="mb-3">
                <label class="form-label fw-bold small">Peran (Role)</label>
                <select v-model="form.id_peran" class="form-select bg-light" required>
                  <option value="">Pilih Peran</option>
                  <option v-for="r in roles" :key="r.id_peran" :value="r.id_peran">{{ r.nama_peran }}</option>
                </select>
              </div>

              <div class="row g-3">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label fw-bold small">{{ isEdit ? 'Ganti Kata Sandi' : 'Kata Sandi' }}</label>
                    <div class="input-group">
                      <input 
                        v-model="form.kata_sandi" 
                        :type="showPassword ? 'text' : 'password'" 
                        class="form-control bg-light border-end-0" 
                        :class="{'is-invalid': validationErrors.kata_sandi}"
                        :placeholder="isEdit ? '********' : 'Otomatis jika kosong'"
                        @keyup="validatePassword"
                      >
                      <button class="btn btn-light border border-start-0" type="button" @click="showPassword = !showPassword">
                        <i :class="showPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                      </button>
                    </div>
                    <div v-if="validationErrors.kata_sandi" class="text-danger extra-small mt-1">{{ validationErrors.kata_sandi }}</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label class="form-label fw-bold small">Ketik Ulang Password</label>
                    <div class="input-group">
                      <input 
                        v-model="form.konfirmasi_kata_sandi" 
                        :type="showConfirmPassword ? 'text' : 'password'" 
                        class="form-control bg-light border-end-0" 
                        :class="{'is-invalid': validationErrors.konfirmasi_kata_sandi}"
                        placeholder="Verifikasi password"
                        @keyup="validateConfirmPassword"
                        :required="!!form.kata_sandi"
                      >
                      <button class="btn btn-light border border-start-0" type="button" @click="showConfirmPassword = !showConfirmPassword">
                        <i :class="showConfirmPassword ? 'bi bi-eye-slash' : 'bi bi-eye'"></i>
                      </button>
                    </div>
                    <div v-if="validationErrors.konfirmasi_kata_sandi" class="text-danger extra-small mt-1">{{ validationErrors.konfirmasi_kata_sandi }}</div>
                  </div>
                </div>
              </div>

              <div class="form-check form-switch mt-3">
                <input v-model="form.status_aktif" class="form-check-input" type="checkbox" id="userActive">
                <label class="form-check-label fw-semibold" for="userActive">Status Akun Aktif</label>
              </div>
              
              <div v-if="!isEdit && !form.kata_sandi" class="alert alert-info mt-4 small border-0 py-2">
                <i class="bi bi-info-circle-fill me-2"></i>
                Kata sandi akan dibuat otomatis oleh sistem.
              </div>
            </div>
            <div class="modal-footer border-0 p-4 pt-0">
              <button type="button" class="btn btn-light rounded-pill px-4" @click="showModal = false">Batal</button>
              <button type="submit" class="btn btn-primary rounded-pill px-4 fw-bold" :disabled="submitting || Object.values(validationErrors).some(v => v !== '')">
                <span v-if="submitting" class="spinner-border spinner-border-sm me-2"></span>
                Simpan Pengguna
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'

definePageMeta({
  middleware: ['auth', 'rbac'],
  permission: 'lihat_pengguna'
})

const { user, hasPermission } = useAuth()
const items = ref([])
const meta = ref(null)
const roles = ref([])
const loading = ref(false)
const showModal = ref(false)
const isEdit = ref(false)
const submitting = ref(false)

const filters = reactive({
  cari: '',
  halaman: 1,
  per_halaman: 10
})

const form = reactive({
  id_pengguna: null,
  id_pegawai: null,
  nama_pengguna: '',
  username: '',
  email: '',
  id_peran: '',
  status_aktif: true,
  kata_sandi: '',
  konfirmasi_kata_sandi: ''
})

const employeeSearch = ref('')
const employeeResults = ref([])
const searchingEmployee = ref(false)
const showEmployeeDropdown = ref(false)

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const validationErrors = reactive({
  username: '',
  kata_sandi: '',
  konfirmasi_kata_sandi: ''
})

// Real-time Validations
const validateUsername = () => {
  const val = form.username
  if (!val) {
    validationErrors.username = 'Username wajib diisi'
  } else if (val.length < 6) {
    validationErrors.username = 'Minimal 6 karakter'
  } else if (!/^[a-z0-9]+$/.test(val)) {
    validationErrors.username = 'Hanya huruf kecil dan angka, tanpa spasi'
  } else {
    validationErrors.username = ''
  }
}

const validatePassword = () => {
  const val = form.kata_sandi
  if (!val) {
    validationErrors.kata_sandi = isEdit.value ? '' : 'Kata sandi wajib diisi jika tidak auto-generate'
    validateConfirmPassword()
    return
  }
  
  const errors = []
  if (val.length < 8) errors.push('Min 8 karakter')
  if (/\s/.test(val)) errors.push('No spasi')
  if (!/[A-Z]/.test(val)) errors.push('Min 1 huruf besar')
  if (!/[a-z]/.test(val)) errors.push('Min 1 huruf kecil')
  if (!/[^a-zA-Z0-9]/.test(val)) errors.push('Min 1 karakter khusus')
  
  validationErrors.kata_sandi = errors.join(', ')
  validateConfirmPassword()
}

const validateConfirmPassword = () => {
  if (form.kata_sandi && form.konfirmasi_kata_sandi !== form.kata_sandi) {
    validationErrors.konfirmasi_kata_sandi = 'Kata sandi tidak cocok'
  } else {
    validationErrors.konfirmasi_kata_sandi = ''
  }
}

// Autocomplete Logic
let searchTimeout = null
const handleEmployeeSearch = () => {
  clearTimeout(searchTimeout)
  form.id_pegawai = null // Reset id_pegawai if they start typing again
  
  if (employeeSearch.value.length < 2) {
    employeeResults.value = []
    showEmployeeDropdown.value = false
    return
  }

  searchTimeout = setTimeout(async () => {
    searchingEmployee.value = true
    try {
      const res = await $fetch('/api/pegawai', { query: { cari: employeeSearch.value, per_halaman: 5 } })
      if (res.sukses) {
        employeeResults.value = res.data
        showEmployeeDropdown.value = res.data.length > 0
      }
    } catch (err) {
    } finally {
      searchingEmployee.value = false
    }
  }, 300)
}

const selectEmployee = (emp) => {
  form.id_pegawai = emp.id_pegawai
  form.nama_pengguna = emp.nama_pegawai
  form.email = emp.email || form.email
  employeeSearch.value = emp.nama_pegawai
  showEmployeeDropdown.value = false
}

const columns = [
  { key: 'nama_pengguna', label: 'Pengguna' },
  { key: 'peran', label: 'Peran' },
  { key: 'terakhir_login', label: 'Login Terakhir' },
  { key: 'status_aktif', label: 'Status', class: 'text-center' },
]

const fetchData = async () => {
  loading.value = true
  try {
    const response = await $fetch('/api/pengguna', { query: filters })
    if (response.sukses) {
      items.value = response.data
      meta.value = response.meta
    }
    
    // Fetch roles for modal
    const rolesRes = await $fetch('/api/peran')
    if (rolesRes.sukses) roles.value = rolesRes.data
  } catch (err) {}
  finally { loading.value = false }
}

onMounted(fetchData)

const handlePageChange = (page) => {
  filters.halaman = page
  fetchData()
}

const openAddModal = () => {
  isEdit.value = false
  employeeSearch.value = ''
  employeeResults.value = []
  Object.assign(form, {
    id_pengguna: null,
    id_pegawai: null,
    nama_pengguna: '',
    username: '',
    email: '',
    id_peran: '',
    status_aktif: true,
    kata_sandi: '',
    konfirmasi_kata_sandi: ''
  })
  Object.keys(validationErrors).forEach(k => validationErrors[k] = '')
  showModal.value = true
}

const openEditModal = (user) => {
  isEdit.value = true
  employeeSearch.value = user.nama_pengguna
  employeeResults.value = []
  Object.assign(form, {
    id_pengguna: user.id_pengguna,
    id_pegawai: user.id_pegawai,
    nama_pengguna: user.nama_pengguna,
    username: user.username,
    email: user.email,
    id_peran: user.id_peran,
    status_aktif: user.status_aktif,
    kata_sandi: '',
    konfirmasi_kata_sandi: ''
  })
  Object.keys(validationErrors).forEach(k => validationErrors[k] = '')
  showModal.value = true
}

const handleSubmit = async () => {
  submitting.value = true
  try {
    const method = isEdit.value ? 'PUT' : 'POST'
    const url = isEdit.value ? `/api/pengguna/${form.id_pengguna}` : '/api/pengguna'
    
    const response = await $fetch(url, { method, body: form })
    if (response.sukses) {
      if (!isEdit.value) {
        Swal.fire('Berhasil!', `Pengguna berhasil dibuat!\nUsername: ${response.data.username}\nKata Sandi: ${response.data.kata_sandi_plain}\n\nSILAKAN CATAT KATA SANDI INI.`, 'success')
      } else {
        Swal.fire('Berhasil!', 'Pengguna berhasil diperbarui', 'success')
      }
      showModal.value = false
      fetchData()
    }
  } catch (err) {
    Swal.fire('Gagal!', err.data?.pesan || 'Terjadi kesalahan', 'error')
  } finally {
    submitting.value = false
  }
}

const confirmDelete = async (u) => {
  const result = await Swal.fire({
    title: 'Konfirmasi Hapus',
    text: `Hapus pengguna ${u.username}? Tindakan ini tidak dapat dibatalkan.`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Ya, Hapus',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#dc3545'
  })
  if (result.isConfirmed) {
    try {
      const res = await $fetch(`/api/pengguna/${u.id_pengguna}`, { method: 'DELETE' })
      if (res.sukses) {
        Swal.fire('Berhasil!', 'Pengguna berhasil dihapus', 'success')
        fetchData()
      }
    } catch (err) {
      Swal.fire('Gagal!', err.data?.pesan || 'Gagal menghapus pengguna', 'error')
    }
  }
}
</script>
