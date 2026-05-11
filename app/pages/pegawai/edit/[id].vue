<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex align-items-center gap-3 mb-4">
      <NuxtLink :to="`/pegawai/${id}`" class="btn btn-light rounded-circle shadow-sm">
        <i class="bi bi-arrow-left"></i>
      </NuxtLink>
      <div>
        <h4 class="fw-bold text-dark mb-1">Ubah Data Pegawai</h4>
        <p class="text-muted mb-0">Perbarui informasi data pegawai: <strong>{{ form.nama_pegawai }}</strong></p>
      </div>
    </div>

    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
      <p class="mt-2 text-muted">Memuat data pegawai...</p>
    </div>

    <form v-else @submit.prevent="handleSubmit">
      <div class="row g-4">
        <!-- Section: Informasi Dasar -->
        <div class="col-12 col-lg-8">
          <div class="card border-0 shadow-sm rounded-4 mb-4">
            <div class="card-header bg-white p-4 border-bottom">
              <h6 class="fw-bold mb-0 text-primary">A. Informasi Pribadi</h6>
            </div>
            <div class="card-body p-4">
              <div class="row g-3">
                <!-- Foto Pegawai -->
                <div class="col-12 mb-3">
                  <label class="form-label fw-bold">Foto Pegawai</label>
                  <div class="d-flex align-items-center gap-4">
                    <div class="avatar-upload position-relative">
                      <div class="avatar-preview rounded-4 border d-flex align-items-center justify-content-center overflow-hidden bg-light" style="width: 120px; height: 120px">
                        <img v-if="photoPreview || form.foto" :src="photoPreview || form.foto" class="w-100 h-100 object-fit-cover">
                        <i v-else class="bi bi-person text-muted" style="font-size: 3rem"></i>
                      </div>
                      <input type="file" ref="fileInput" class="d-none" accept="image/png, image/jpeg" @change="handlePhotoUpload">
                      <button type="button" class="btn btn-primary btn-sm rounded-circle position-absolute bottom-0 end-0 m-1 shadow" @click="$refs.fileInput.click()">
                        <i class="bi bi-pencil"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-bold">NIP <span class="text-danger">*</span></label>
                  <input 
                    v-model="form.nip" 
                    type="text" 
                    class="form-control bg-light" 
                    pattern="\d{8,}"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Nama Lengkap <span class="text-danger">*</span></label>
                  <input 
                    v-model="form.nama_pegawai" 
                    type="text" 
                    class="form-control bg-light"
                    pattern="[a-zA-Z0-9' ]+"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Email</label>
                  <input v-model="form.email" type="email" class="form-control bg-light">
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Nomor HP <span class="text-danger">*</span></label>
                  <input 
                    v-model="form.nomor_hp" 
                    type="text" 
                    class="form-control bg-light" 
                    pattern="\+?[0-9]{10,15}"
                    required
                  >
                </div>

                <div class="col-md-4 position-relative">
                  <label class="form-label fw-bold">Tempat Lahir</label>
                  <input v-model="form.tempat_lahir" type="text" class="form-control bg-light" @input="searchBirthPlace">
                  <ul v-if="placeSuggestions.length" class="dropdown-menu show w-100 shadow-sm">
                    <li v-for="p in placeSuggestions" :key="p" class="dropdown-item cursor-pointer" @click="selectBirthPlace(p)">{{ p }}</li>
                  </ul>
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Tanggal Lahir</label>
                  <input v-model="form.tanggal_lahir" type="date" class="form-control bg-light" @change="calculateAge">
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-bold">Usia (Tahun)</label>
                  <input :value="usia" type="text" class="form-control bg-light" disabled>
                </div>

                <div class="col-md-6">
                  <label class="form-label fw-bold">Status Perkawinan</label>
                  <div class="d-flex gap-4 mt-2">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="form.status_kawin" value="KAWIN" id="kawin">
                      <label class="form-check-label" for="kawin">Kawin</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" v-model="form.status_kawin" value="BELUM_KAWIN" id="tidakKawin">
                      <label class="form-check-label" for="tidakKawin">Tidak Kawin</label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-bold">Jumlah Anak</label>
                  <input v-model.number="form.jumlah_anak" type="number" class="form-control bg-light" max="99">
                </div>

                <div class="col-12">
                  <label class="form-label fw-bold">Alamat Lengkap</label>
                  <div class="row g-2">
                    <div class="col-md-4 position-relative">
                      <input v-model="form.kecamatan" type="text" class="form-control bg-light" @input="searchDistrict">
                      <ul v-if="districtSuggestions.length" class="dropdown-menu show w-100 shadow-sm">
                        <li v-for="d in districtSuggestions" :key="d.name" class="dropdown-item cursor-pointer" @click="selectDistrict(d)">{{ d.name }}</li>
                      </ul>
                    </div>
                    <div class="col-md-4">
                      <input v-model="form.kabupaten" type="text" class="form-control bg-light" disabled>
                    </div>
                    <div class="col-md-4">
                      <input v-model="form.provinsi" type="text" class="form-control bg-light" disabled>
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <textarea v-model="form.alamat" class="form-control bg-light mt-2" rows="2"></textarea>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Riwayat Pendidikan -->
          <div class="card border-0 shadow-sm rounded-4 mb-4">
            <div class="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
              <h6 class="fw-bold mb-0 text-primary">B. Riwayat Pendidikan</h6>
              <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3" @click="addEducation">
                <i class="bi bi-plus-lg me-1"></i> Tambah Pendidikan
              </button>
            </div>
            <div class="card-body p-4">
              <div v-for="(edu, index) in form.pendidikan" :key="index" class="p-3 bg-light rounded-3 mb-3 border position-relative">
                <button type="button" class="btn-close position-absolute top-0 end-0 m-2" @click="removeEducation(index)"></button>
                <div class="row g-3">
                  <div class="col-md-4">
                    <label class="form-label small fw-bold">Jenjang</label>
                    <input v-model="edu.jenjang" type="text" class="form-control form-control-sm">
                  </div>
                  <div class="col-md-5">
                    <label class="form-label small fw-bold">Institusi</label>
                    <input v-model="edu.institusi" type="text" class="form-control form-control-sm">
                  </div>
                  <div class="col-md-3">
                    <label class="form-label small fw-bold">Thn Lulus</label>
                    <input v-model.number="edu.tahun_lulus" type="number" class="form-control form-control-sm">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Section: Right Column -->
        <div class="col-12 col-lg-4">
          <div class="card border-0 shadow-sm rounded-4 mb-4">
            <div class="card-header bg-white p-4 border-bottom">
              <h6 class="fw-bold mb-0 text-primary">C. Penempatan & Status</h6>
            </div>
            <div class="card-body p-4">
              <div class="mb-3">
                <label class="form-label fw-bold">Jabatan <span class="text-danger">*</span></label>
                <select v-model="form.jabatan" class="form-select bg-light" required>
                  <option value="Manager">Manager</option>
                  <option value="Staf">Staf</option>
                  <option value="Magang">Magang</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Departemen <span class="text-danger">*</span></label>
                <select v-model="form.departemen" class="form-select bg-light" required>
                  <option value="Marketing">Marketing</option>
                  <option value="HRD">HRD</option>
                  <option value="Production">Production</option>
                  <option value="Executive">Executive</option>
                  <option value="Commissioner">Commissioner</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Jenis Pegawai <span class="text-danger">*</span></label>
                <select v-model="form.jenis_pegawai" class="form-select bg-light" required>
                  <option value="KONTRAK">Kontrak</option>
                  <option value="TETAP">Tetap</option>
                  <option value="MAGANG">Magang</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Tanggal Masuk <span class="text-danger">*</span></label>
                <input v-model="form.tanggal_masuk" type="date" class="form-control bg-light" required>
              </div>
              <div class="form-check form-switch mt-4">
                <input v-model="form.status_aktif" class="form-check-input" type="checkbox" id="statusAktif">
                <label class="form-check-label fw-bold" for="statusAktif">Pegawai Aktif</label>
              </div>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-warning py-3 rounded-4 fw-bold shadow-sm" :disabled="submitting">
              <span v-if="submitting" class="spinner-border spinner-border-sm me-2"></span>
              PERBARUI DATA PEGAWAI
            </button>
            <NuxtLink :to="`/pegawai/${id}`" class="btn btn-light py-3 rounded-4 fw-semibold border">BATAL</NuxtLink>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import Swal from 'sweetalert2'

definePageMeta({
  middleware: ['auth', 'rbac'],
  permission: 'ubah_pegawai'
})

const route = useRoute()
const id = route.params.id
const loading = ref(true)
const submitting = ref(false)
const photoPreview = ref(null)
const usia = ref(0)

const form = reactive({
  nip: '',
  nama_pegawai: '',
  email: '',
  nomor_hp: '',
  gender: 'PRIA',
  status_kawin: 'BELUM_KAWIN',
  jumlah_anak: 0,
  tempat_lahir: '',
  tanggal_lahir: '',
  alamat: '',
  kecamatan: '',
  kabupaten: '',
  provinsi: '',
  jabatan: '',
  departemen: '',
  jenis_pegawai: '',
  tanggal_masuk: '',
  status_aktif: true,
  foto: '',
  pendidikan: []
})

const fetchDetail = async () => {
  loading.value = true
  try {
    const response = await $fetch(`/api/pegawai/${id}`)
    if (response.sukses) {
      const data = response.data
      Object.assign(form, {
        ...data,
        tanggal_lahir: data.tanggal_lahir ? dayjs(data.tanggal_lahir).format('YYYY-MM-DD') : '',
        tanggal_masuk: dayjs(data.tanggal_masuk).format('YYYY-MM-DD'),
      })
      calculateAge()
    }
  } catch (err) {
    Swal.fire('Gagal!', 'Gagal memuat data pegawai', 'error')
    navigateTo('/pegawai')
  } finally {
    loading.value = false
  }
}

onMounted(fetchDetail)

// Photo Logic
const handlePhotoUpload = (e) => {
  const file = e.target.files[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (event) => {
    photoPreview.value = event.target.result
    form.foto = event.target.result
  }
  reader.readAsDataURL(file)
}

// Age Logic
const calculateAge = () => {
  if (!form.tanggal_lahir) return
  usia.value = dayjs().diff(dayjs(form.tanggal_lahir), 'year')
}

// Autocomplete logic
const placeSuggestions = ref([])
const searchBirthPlace = () => {
  if (form.tempat_lahir.length < 3) return placeSuggestions.value = []
  const kabupatens = ['Jakarta Pusat', 'Jakarta Selatan', 'Bandung', 'Surabaya', 'Semarang']
  placeSuggestions.value = kabupatens.filter(k => k.toLowerCase().includes(form.tempat_lahir.toLowerCase()))
}
const selectBirthPlace = (p) => {
  form.tempat_lahir = p
  placeSuggestions.value = []
}

const districtSuggestions = ref([])
const searchDistrict = () => {
  if (form.kecamatan.length < 3) return districtSuggestions.value = []
  const districts = [{ name: 'Tebet', kab: 'Jakarta Selatan', prov: 'DKI Jakarta' }]
  districtSuggestions.value = districts.filter(d => d.name.toLowerCase().includes(form.kecamatan.toLowerCase()))
}
const selectDistrict = (d) => {
  form.kecamatan = d.name
  form.kabupaten = d.kab
  form.provinsi = d.prov
  districtSuggestions.value = []
}

const addEducation = () => {
  form.pendidikan.push({ jenjang: '', institusi: '', tahun_lulus: new Date().getFullYear() })
}

const removeEducation = (index) => {
  form.pendidikan.splice(index, 1)
}

const handleSubmit = async () => {
  submitting.value = true
  try {
    const response = await $fetch(`/api/pegawai/${id}`, {
      method: 'PUT',
      body: form
    })
    
    if (response.sukses) {
      await Swal.fire('Berhasil!', 'Data pegawai diperbarui', 'success')
      navigateTo(`/pegawai/${id}`)
    }
  } catch (err) {
    Swal.fire('Gagal!', err.data?.pesan || 'Terjadi kesalahan', 'error')
  } finally {
    submitting.value = false
  }
}
</script>
