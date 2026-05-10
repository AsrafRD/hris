<template>
  <div>
    <!-- Page Header -->
    <div class="mb-4">
      <h4 class="fw-bold text-dark mb-1">Role & Hak Akses</h4>
      <p class="text-muted mb-0">Kelola peran pengguna dan pembatasan fitur sistem (RBAC)</p>
    </div>

    <div class="row g-4">
      <!-- List of Roles -->
      <div class="col-12 col-lg-4">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
            <h6 class="fw-bold mb-0">Daftar Peran</h6>
            <button class="btn btn-primary btn-sm rounded-circle" title="Tambah Peran Baru"><i class="bi bi-plus"></i></button>
          </div>
          <div class="list-group list-group-flush">
            <button 
              v-for="r in roles" 
              :key="r.id_peran" 
              class="list-group-item list-group-item-action p-4 border-bottom-0"
              :class="{ 'active bg-primary-subtle text-primary border-start border-4 border-primary': selectedRole?.id_peran === r.id_peran }"
              @click="selectRole(r)"
            >
              <div class="d-flex justify-content-between align-items-start mb-1">
                <span class="fw-bold">{{ r.nama_peran }}</span>
                <span class="badge rounded-pill bg-light text-muted border small">{{ r._count.pengguna }} User</span>
              </div>
              <p class="small text-muted mb-0">{{ r.deskripsi || 'Tidak ada deskripsi' }}</p>
            </button>
          </div>
        </div>
      </div>

      <!-- Permission Matrix -->
      <div class="col-12 col-lg-8">
        <div v-if="!selectedRole" class="card border-0 shadow-sm rounded-4 h-100 d-flex align-items-center justify-content-center p-5 text-center text-muted">
          <div>
            <i class="bi bi-shield-lock display-1 opacity-25"></i>
            <p class="mt-3">Pilih peran di samping untuk mengelola hak akses</p>
          </div>
        </div>

        <div v-else class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
            <div>
              <h6 class="fw-bold mb-1">Permission Matrix: {{ selectedRole.nama_peran }}</h6>
              <p class="text-muted small mb-0">Tandai modul yang dapat diakses oleh peran ini</p>
            </div>
            <button class="btn btn-success rounded-pill px-4 fw-bold shadow-sm" :disabled="submitting" @click="savePermissions">
              <span v-if="submitting" class="spinner-border spinner-border-sm me-2"></span>
              Simpan Perubahan
            </button>
          </div>
          <div class="card-body p-0 overflow-auto" style="max-height: 600px">
            <div v-for="(hakList, modul) in allPermissions" :key="modul" class="p-4 border-bottom">
              <h6 class="text-primary fw-bold text-uppercase small mb-3">{{ modul }}</h6>
              <div class="row g-3">
                <div v-for="hak in hakList" :key="hak.id_hak_akses" class="col-md-6 col-xl-4">
                  <div class="form-check p-3 rounded-3 bg-light border transition-all hover-border-primary">
                    <input 
                      class="form-check-input ms-0 me-2" 
                      type="checkbox" 
                      :id="`hak-${hak.id_hak_akses}`"
                      :checked="currentPermissions.includes(hak.id_hak_akses)"
                      @change="togglePermission(hak.id_hak_akses)"
                    >
                    <label class="form-check-label small fw-semibold cursor-pointer" :for="`hak-${hak.id_hak_akses}`">
                      {{ hak.deskripsi }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'

definePageMeta({
  middleware: ['auth', 'rbac'],
  permission: 'kelola_peran'
})

const roles = ref([])
const allPermissions = ref({})
const selectedRole = ref(null)
const currentPermissions = ref([])
const submitting = ref(false)

const fetchData = async () => {
  try {
    const rolesRes = await $fetch('/api/peran')
    if (rolesRes.sukses) roles.value = rolesRes.data
    
    const hakRes = await $fetch('/api/peran/hak-akses')
    if (hakRes.sukses) allPermissions.value = hakRes.data
  } catch (err) {}
}

const selectRole = (role) => {
  selectedRole.value = role
  currentPermissions.value = role.peran_hak_akses.map(pha => pha.id_hak_akses)
}

const togglePermission = (id) => {
  if (currentPermissions.value.includes(id)) {
    currentPermissions.value = currentPermissions.value.filter(i => i !== id)
  } else {
    currentPermissions.value.push(id)
  }
}

const savePermissions = async () => {
  submitting.value = true
  try {
    const response = await $fetch(`/api/peran/${selectedRole.value.id_peran}`, {
      method: 'PUT',
      body: {
        nama_peran: selectedRole.value.nama_peran,
        deskripsi: selectedRole.value.deskripsi,
        hak_akses_ids: currentPermissions.value
      }
    })
    
    if (response.sukses) {
      Swal.fire('Berhasil!', 'Hak akses berhasil diperbarui', 'success')
      await fetchData()
      // Refresh current selection
      const updated = roles.value.find(r => r.id_peran === selectedRole.value.id_peran)
      if (updated) selectRole(updated)
    }
  } catch (err) {
    Swal.fire('Gagal!', 'Gagal memperbarui hak akses', 'error')
  } finally {
    submitting.value = false
  }
}

onMounted(fetchData)
</script>

<style scoped>
.hover-border-primary:hover {
  border-color: #0d6efd !important;
}
.cursor-pointer {
  cursor: pointer;
}
.list-group-item.active {
  z-index: 2;
}
</style>
