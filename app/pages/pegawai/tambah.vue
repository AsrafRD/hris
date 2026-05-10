<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex align-items-center gap-3 mb-4">
      <NuxtLink to="/pegawai" class="btn btn-light rounded-circle shadow-sm">
        <i class="bi bi-arrow-left"></i>
      </NuxtLink>
      <div>
        <h4 class="fw-bold text-dark mb-1">Tambah Pegawai Baru</h4>
        <p class="text-muted mb-0">Lengkapi formulir di bawah untuk mendaftarkan pegawai baru</p>
      </div>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="row g-4">
        <!-- Section: Informasi Dasar -->
        <div class="col-12 col-lg-8">
          <div class="card border-0 shadow-sm rounded-4 mb-4">
            <div class="card-header bg-white p-4 border-bottom">
              <h6 class="fw-bold mb-0 text-primary">A. Informasi Dasar</h6>
            </div>
            <div class="card-body p-4">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label fw-semibold">NIP <span class="text-danger">*</span></label>
                  <input v-model="form.nip" type="text" class="form-control bg-light" placeholder="Contoh: 20240001"
                    required>
                  <div class="form-text small">Minimal 8 digit angka</div>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Nama Lengkap <span class="text-danger">*</span></label>
                  <input v-model="form.nama_pegawai" type="text" class="form-control bg-light"
                    placeholder="Nama sesuai KTP" required>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Email</label>
                  <input v-model="form.email" type="email" class="form-control bg-light"
                    placeholder="email@perusahaan.com">
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Nomor HP <span class="text-danger">*</span></label>
                  <input v-model="form.nomor_hp" type="text" class="form-control bg-light" placeholder="+62..."
                    required>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Jenis Kelamin <span class="text-danger">*</span></label>
                  <select v-model="form.gender" class="form-select bg-light" required>
                    <option value="PRIA">Pria</option>
                    <option value="WANITA">Wanita</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Status Perkawinan</label>
                  <select v-model="form.status_kawin" class="form-select bg-light">
                    <option value="BELUM_KAWIN">Belum Kawin</option>
                    <option value="KAWIN">Kawin</option>
                    <option value="CERAI_HIDUP">Cerai Hidup</option>
                    <option value="CERAI_MATI">Cerai Mati</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Tempat Lahir</label>
                  <input v-model="form.tempat_lahir" type="text" class="form-control bg-light" placeholder="Kota Lahir">
                </div>
                <div class="col-md-6">
                  <label class="form-label fw-semibold">Tanggal Lahir</label>
                  <input v-model="form.tanggal_lahir" type="date" class="form-control bg-light">
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Alamat & Domisili -->
          <div class="card border-0 shadow-sm rounded-4 mb-4">
            <div class="card-header bg-white p-4 border-bottom">
              <h6 class="fw-bold mb-0 text-primary">B. Alamat & Domisili</h6>
            </div>
            <div class="card-body p-4">
              <div class="row g-3">
                <div class="col-12">
                  <label class="form-label fw-semibold">Alamat Lengkap</label>
                  <textarea v-model="form.alamat" class="form-control bg-light" rows="2"
                    placeholder="Nama jalan, nomor rumah, RT/RW"></textarea>
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-semibold">Kecamatan</label>
                  <input v-model="form.kecamatan" type="text" class="form-control bg-light"
                    placeholder="Autocomplete..." @input="handleRegionLookup">
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-semibold">Kabupaten/Kota</label>
                  <input v-model="form.kabupaten" type="text" class="form-control bg-light" readonly>
                </div>
                <div class="col-md-4">
                  <label class="form-label fw-semibold">Provinsi</label>
                  <input v-model="form.provinsi" type="text" class="form-control bg-light" readonly>
                </div>
              </div>
            </div>
          </div>

          <!-- Section: Riwayat Pendidikan (Dynamic) -->
          <div class="card border-0 shadow-sm rounded-4 mb-4">
            <div class="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
              <h6 class="fw-bold mb-0 text-primary">C. Riwayat Pendidikan</h6>
              <button type="button" class="btn btn-outline-primary btn-sm" @click="addEducation">
                <i class="bi bi-plus"></i> Tambah
              </button>
            </div>
            <div class="card-body p-4">
              <div v-for="(edu, index) in form.pendidikan" :key="index"
                class="education-item bg-light rounded-3 p-3 mb-3 position-relative border">
                <button type="button" class="btn-close position-absolute top-0 end-0 m-2"
                  @click="removeEducation(index)"></button>
                <div class="row g-3">
                  <div class="col-md-3">
                    <label class="form-label small fw-bold">Jenjang</label>
                    <select v-model="edu.jenjang" class="form-select form-select-sm" required>
                      <option value="SMA/SMK">SMA/SMK</option>
                      <option value="D3">D3</option>
                      <option value="S1">S1</option>
                      <option value="S2">S2</option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label class="form-label small fw-bold">Institusi</label>
                    <input v-model="edu.institusi" type="text" class="form-control form-select-sm"
                      placeholder="Nama Sekolah/Univ" required>
                  </div>
                  <div class="col-md-3">
                    <label class="form-label small fw-bold">Jurusan</label>
                    <input v-model="edu.jurusan" type="text" class="form-control form-select-sm" placeholder="Jurusan">
                  </div>
                  <div class="col-md-2">
                    <label class="form-label small fw-bold">Thn Lulus</label>
                    <input v-model.number="edu.tahun_lulus" type="number" class="form-control form-select-sm"
                      placeholder="YYYY">
                  </div>
                </div>
              </div>
              <div v-if="form.pendidikan.length === 0" class="text-center py-3 text-muted">
                Belum ada data pendidikan ditambahkan.
              </div>
            </div>
          </div>
        </div>

        <!-- Section: Right Column (Status Pekerjaan) -->
        <div class="col-12 col-lg-4">
          <div class="card border-0 shadow-sm rounded-4 mb-4">
            <div class="card-header bg-white p-4 border-bottom">
              <h6 class="fw-bold mb-0 text-primary">D. Status Pekerjaan</h6>
            </div>
            <div class="card-body p-4">
              <div class="mb-3">
                <label class="form-label fw-semibold">Jabatan <span class="text-danger">*</span></label>
                <input v-model="form.jabatan" type="text" class="form-control bg-light" placeholder="Contoh: Manager IT"
                  required>
              </div>
              <div class="mb-3">
                <label class="form-label fw-semibold">Departemen <span class="text-danger">*</span></label>
                <input v-model="form.departemen" type="text" class="form-control bg-light"
                  placeholder="Contoh: Teknologi" required>
              </div>
              <div class="mb-3">
                <label class="form-label fw-semibold">Jenis Pegawai <span class="text-danger">*</span></label>
                <select v-model="form.jenis_pegawai" class="form-select bg-light" required>
                  <option value="KONTRAK">Kontrak</option>
                  <option value="TETAP">Tetap</option>
                  <option value="MAGANG">Magang</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label fw-semibold">Tanggal Masuk <span class="text-danger">*</span></label>
                <input v-model="form.tanggal_masuk" type="date" class="form-control bg-light" required>
              </div>
              <div class="mb-3">
                <label class="form-label fw-semibold">Jarak Rumah ke Kantor (KM)</label>
                <div class="input-group">
                  <input v-model.number="form.jarak_km" type="number" step="0.1" class="form-control bg-light">
                  <span class="input-group-text bg-light">KM</span>
                </div>
              </div>
              <div class="form-check form-switch mt-4">
                <input v-model="form.status_aktif" class="form-check-input" type="checkbox" id="statusAktif">
                <label class="form-check-label fw-bold" for="statusAktif">Status Pegawai Aktif</label>
              </div>
            </div>
          </div>

          <div class="card border-0 shadow-sm rounded-4 p-4 mb-4">
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary py-3 rounded-3 fw-bold" :disabled="submitting">
                <span v-if="submitting" class="spinner-border spinner-border-sm me-2"></span>
                SIMPAN DATA PEGAWAI
              </button>
              <NuxtLink to="/pegawai" class="btn btn-light py-3 rounded-3 fw-semibold">BATAL</NuxtLink>
            </div>
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
  permission: 'tambah_pegawai'
})

const submitting = ref(false)
const form = reactive({
  nip: '',
  nama_pegawai: '',
  email: '',
  nomor_hp: '',
  gender: 'PRIA',
  status_kawin: 'BELUM_KAWIN',
  tempat_lahir: '',
  tanggal_lahir: '',
  alamat: '',
  kecamatan: '',
  kabupaten: '',
  provinsi: '',
  jabatan: '',
  departemen: '',
  jenis_pegawai: 'KONTRAK',
  tanggal_masuk: dayjs().format('YYYY-MM-DD'),
  jarak_km: 0,
  status_aktif: true,
  pendidikan: []
})

const addEducation = () => {
  form.pendidikan.push({
    jenjang: 'S1',
    institusi: '',
    jurusan: '',
    tahun_lulus: new Date().getFullYear()
  })
}

const removeEducation = (index) => {
  form.pendidikan.splice(index, 1)
}

const handleRegionLookup = () => {
  // Mock autofill based on kecamatan name
  if (form.kecamatan.toLowerCase() === 'kebayoran baru') {
    form.kabupaten = 'Jakarta Selatan'
    form.provinsi = 'DKI Jakarta'
  } else if (form.kecamatan.toLowerCase() === 'tebet') {
    form.kabupaten = 'Jakarta Selatan'
    form.provinsi = 'DKI Jakarta'
  }
}

const handleSubmit = async () => {
  submitting.value = true
  try {
    const response = await $fetch('/api/pegawai', {
      method: 'POST',
      body: form
    })

    if (response.sukses) {
      await Swal.fire('Berhasil!', 'Data pegawai berhasil disimpan', 'success')
      navigateTo('/pegawai')
    }
  } catch (err) {
    Swal.fire('Gagal!', err.data?.pesan || 'Terjadi kesalahan saat menyimpan data', 'error')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
.education-item {
  transition: all 0.2s ease;
}

.education-item:hover {
  border-color: #0d6efd !important;
}
</style>
