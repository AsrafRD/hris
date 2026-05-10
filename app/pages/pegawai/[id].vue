<template>
  <div v-if="loading" class="text-center py-5">
    <div class="spinner-border text-primary" role="status"></div>
    <p class="mt-2 text-muted">Memuat data...</p>
  </div>
  
  <div v-else-if="!pegawai" class="text-center py-5">
    <i class="bi bi-person-x display-1 text-muted"></i>
    <h4 class="mt-3">Pegawai tidak ditemukan</h4>
    <NuxtLink to="/pegawai" class="btn btn-primary mt-3">Kembali ke Daftar</NuxtLink>
  </div>

  <div v-else>
    <!-- Header -->
    <div class="d-flex align-items-center justify-content-between mb-4">
      <div class="d-flex align-items-center gap-3">
        <NuxtLink to="/pegawai" class="btn btn-light rounded-circle shadow-sm">
          <i class="bi bi-arrow-left"></i>
        </NuxtLink>
        <div>
          <h4 class="fw-bold text-dark mb-1">Detail Pegawai</h4>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item"><NuxtLink to="/pegawai" class="text-decoration-none">Pegawai</NuxtLink></li>
              <li class="breadcrumb-item active">{{ pegawai.nama_pegawai }}</li>
            </ol>
          </nav>
        </div>
      </div>
      <div class="d-flex gap-2">
        <button class="btn btn-outline-danger d-flex align-items-center gap-2" @click="downloadPDF">
          <i class="bi bi-file-pdf"></i> Download PDF
        </button>
        <NuxtLink v-if="hasPermission('ubah_pegawai')" :to="`/pegawai/edit/${pegawai.id_pegawai}`" class="btn btn-warning d-flex align-items-center gap-2">
          <i class="bi bi-pencil-square"></i> Edit Data
        </NuxtLink>
      </div>
    </div>

    <div class="row g-4">
      <!-- Left Column: Photo & Main Info -->
      <div class="col-12 col-lg-4">
        <div class="card border-0 shadow-sm rounded-4 text-center p-4">
          <div class="position-relative d-inline-block mx-auto mb-4">
            <div class="avatar bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center border border-4 border-white shadow" style="width: 150px; height: 150px; font-size: 4rem">
              <img v-if="pegawai.foto" :src="pegawai.foto" class="rounded-circle w-100 h-100 object-fit-cover">
              <span v-else>{{ pegawai.nama_pegawai.charAt(0) }}</span>
            </div>
            <span :class="pegawai.status_aktif ? 'bg-success' : 'bg-danger'" class="position-absolute bottom-0 end-0 border border-3 border-white rounded-circle p-2" style="width: 25px; height: 25px"></span>
          </div>
          
          <h4 class="fw-bold mb-1">{{ pegawai.nama_pegawai }}</h4>
          <p class="text-primary fw-semibold mb-3">{{ pegawai.jabatan }} - {{ pegawai.departemen }}</p>
          
          <div class="d-flex justify-content-center gap-2 mb-4">
            <span :class="getStatusClass(pegawai.jenis_pegawai)" class="badge rounded-pill px-3 py-2">{{ pegawai.jenis_pegawai }}</span>
            <span class="badge bg-light text-dark border rounded-pill px-3 py-2">{{ calculateAge(pegawai.tanggal_lahir) }} Tahun</span>
          </div>

          <div class="border-top pt-4 text-start">
            <div class="d-flex align-items-center gap-3 mb-3">
              <i class="bi bi-credit-card-2-front fs-5 text-muted"></i>
              <div>
                <div class="text-muted small">Nomor Induk Pegawai (NIP)</div>
                <div class="fw-bold">{{ pegawai.nip }}</div>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3 mb-3">
              <i class="bi bi-envelope fs-5 text-muted"></i>
              <div>
                <div class="text-muted small">Alamat Email</div>
                <div class="fw-bold">{{ pegawai.email || '-' }}</div>
              </div>
            </div>
            <div class="d-flex align-items-center gap-3">
              <i class="bi bi-telephone fs-5 text-muted"></i>
              <div>
                <div class="text-muted small">Nomor Telepon</div>
                <div class="fw-bold">{{ pegawai.nomor_hp || '-' }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="card border-0 shadow-sm rounded-4 mt-4 p-4">
          <h6 class="fw-bold mb-3">Akun Sistem</h6>
          <div v-if="pegawai.pengguna" class="bg-light rounded-3 p-3">
            <div class="d-flex align-items-center justify-content-between mb-2">
              <span class="text-muted small">Username:</span>
              <span class="fw-bold">{{ pegawai.pengguna.username }}</span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <span class="text-muted small">Status Akun:</span>
              <span :class="pegawai.pengguna.status_aktif ? 'text-success' : 'text-danger'" class="fw-bold">
                {{ pegawai.pengguna.status_aktif ? 'Aktif' : 'Nonaktif' }}
              </span>
            </div>
          </div>
          <div v-else class="text-center py-2">
            <p class="text-muted small mb-2">Belum memiliki akun sistem</p>
            <button class="btn btn-outline-primary btn-sm rounded-pill w-100">Buat Akun</button>
          </div>
        </div>
      </div>

      <!-- Right Column: Tabs & Detailed Info -->
      <div class="col-12 col-lg-8">
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div class="card-header bg-white p-0 border-bottom">
            <ul class="nav nav-pills p-2 gap-2">
              <li class="nav-item">
                <button class="nav-link" :class="{ active: activeTab === 'biodata' }" @click="activeTab = 'biodata'">Biodata</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" :class="{ active: activeTab === 'pendidikan' }" @click="activeTab = 'pendidikan'">Pendidikan</button>
              </li>
              <li class="nav-item">
                <button class="nav-link" :class="{ active: activeTab === 'pekerjaan' }" @click="activeTab = 'pekerjaan'">Pekerjaan</button>
              </li>
            </ul>
          </div>
          
          <div class="card-body p-4">
            <!-- Biodata Tab -->
            <div v-if="activeTab === 'biodata'">
              <div class="row g-4">
                <div class="col-md-6">
                  <label class="text-muted small text-uppercase fw-bold">Tempat, Tanggal Lahir</label>
                  <p class="mb-0">{{ pegawai.tempat_lahir || '-' }}, {{ formatDate(pegawai.tanggal_lahir) }}</p>
                </div>
                <div class="col-md-6">
                  <label class="text-muted small text-uppercase fw-bold">Jenis Kelamin</label>
                  <p class="mb-0">{{ pegawai.gender === 'PRIA' ? 'Laki-laki' : 'Perempuan' }}</p>
                </div>
                <div class="col-md-6">
                  <label class="text-muted small text-uppercase fw-bold">Status Perkawinan</label>
                  <p class="mb-0">{{ formatStatusKawin(pegawai.status_kawin) }}</p>
                </div>
                <div class="col-md-6">
                  <label class="text-muted small text-uppercase fw-bold">Jumlah Anak</label>
                  <p class="mb-0">{{ pegawai.jumlah_anak }} Anak</p>
                </div>
                <div class="col-12">
                  <label class="text-muted small text-uppercase fw-bold">Alamat Lengkap</label>
                  <p class="mb-0">{{ pegawai.alamat || '-' }}</p>
                  <p class="mb-0 text-muted small">Kec. {{ pegawai.kecamatan || '-' }}, Kab. {{ pegawai.kabupaten || '-' }}, Prov. {{ pegawai.provinsi || '-' }}</p>
                </div>
              </div>
            </div>

            <!-- Pendidikan Tab -->
            <div v-if="activeTab === 'pendidikan'">
              <div v-if="pegawai.pendidikan && pegawai.pendidikan.length > 0" class="timeline-container">
                <div v-for="(edu, idx) in pegawai.pendidikan" :key="idx" class="d-flex gap-3 mb-4">
                  <div class="timeline-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; flex-shrink: 0">
                    <i class="bi bi-mortarboard"></i>
                  </div>
                  <div class="timeline-content border-start ps-3 pb-3">
                    <h6 class="fw-bold mb-1">{{ edu.jenjang }} - {{ edu.institusi }}</h6>
                    <div class="text-primary small fw-semibold">{{ edu.jurusan || 'Semua Jurusan' }}</div>
                    <div class="text-muted small">Lulus Tahun: {{ edu.tahun_lulus }}</div>
                  </div>
                </div>
              </div>
              <div v-else class="text-center py-4">
                <p class="text-muted">Data pendidikan tidak tersedia</p>
              </div>
            </div>

            <!-- Pekerjaan Tab -->
            <div v-if="activeTab === 'pekerjaan'">
              <div class="row g-4">
                <div class="col-md-6">
                  <label class="text-muted small text-uppercase fw-bold">Tanggal Masuk</label>
                  <p class="mb-0">{{ formatDate(pegawai.tanggal_masuk) }}</p>
                </div>
                <div class="col-md-6">
                  <label class="text-muted small text-uppercase fw-bold">Masa Kerja</label>
                  <p class="mb-0">{{ calculateTenure(pegawai.tanggal_masuk) }}</p>
                </div>
                <div class="col-md-6">
                  <label class="text-muted small text-uppercase fw-bold">Jarak Rumah ke Kantor</label>
                  <p class="mb-0">{{ pegawai.jarak_km || 0 }} KM</p>
                </div>
                <div class="col-md-6">
                  <label class="text-muted small text-uppercase fw-bold">Kelayakan Tunjangan Transport</label>
                  <p class="mb-0">
                    <span v-if="pegawai.jarak_km > 5 && pegawai.jarak_km <= 25 && pegawai.jenis_pegawai === 'TETAP'" class="text-success fw-bold">
                      <i class="bi bi-check-circle-fill me-1"></i> Layak
                    </span>
                    <span v-else class="text-danger fw-bold">
                      <i class="bi bi-x-circle-fill me-1"></i> Tidak Layak
                    </span>
                  </p>
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
import dayjs from 'dayjs'
import { jsPDF } from 'jspdf'

definePageMeta({
  middleware: ['auth']
})

const { hasPermission } = useAuth()
const route = useRoute()
const id = route.params.id

const pegawai = ref(null)
const loading = ref(true)
const activeTab = ref('biodata')

const fetchDetail = async () => {
  loading.value = true
  try {
    const response = await $fetch(`/api/pegawai/${id}`)
    if (response.sukses) {
      pegawai.value = response.data
    }
  } catch (err) {
    console.error('Gagal memuat detail pegawai', err)
  } finally {
    loading.value = false
  }
}

onMounted(fetchDetail)

const formatDate = (date) => date ? dayjs(date).format('DD MMMM YYYY') : '-'
const getStatusClass = (status) => {
  switch (status) {
    case 'TETAP': return 'bg-success'
    case 'KONTRAK': return 'bg-warning text-dark'
    case 'MAGANG': return 'bg-info text-dark'
    default: return 'bg-secondary'
  }
}

const formatStatusKawin = (status) => {
  const map = {
    'BELUM_KAWIN': 'Belum Kawin',
    'KAWIN': 'Kawin',
    'CERAI_HIDUP': 'Cerai Hidup',
    'CERAI_MATI': 'Cerai Mati'
  }
  return map[status] || status
}

const calculateAge = (date) => {
  if (!date) return '-'
  return dayjs().diff(dayjs(date), 'year')
}

const calculateTenure = (date) => {
  if (!date) return '-'
  const diff = dayjs().diff(dayjs(date), 'year', true)
  const years = Math.floor(diff)
  const months = Math.floor((diff - years) * 12)
  return `${years} Tahun, ${months} Bulan`
}

const downloadPDF = () => {
  const doc = new jsPDF()
  const p = pegawai.value
  
  doc.setFontSize(20)
  doc.text("Detail Pegawai", 14, 20)
  
  doc.setFontSize(12)
  doc.setFont(undefined, 'bold')
  doc.text("Informasi Dasar", 14, 35)
  doc.setFont(undefined, 'normal')
  
  const info = [
    ["NIP", p.nip],
    ["Nama Lengkap", p.nama_pegawai],
    ["Jabatan", p.jabatan],
    ["Departemen", p.departemen],
    ["Jenis Pegawai", p.jenis_pegawai],
    ["Tempat, Tgl Lahir", `${p.tempat_lahir}, ${formatDate(p.tanggal_lahir)}`],
    ["Gender", p.gender === 'PRIA' ? 'Laki-laki' : 'Perempuan'],
    ["Alamat", p.alamat],
    ["No. HP", p.nomor_hp],
    ["Email", p.email]
  ]

  let y = 45
  info.forEach(row => {
    doc.text(row[0] + ":", 14, y)
    doc.text(row[1] || '-', 60, y)
    y += 10
  })

  doc.save(`Detail_Pegawai_${p.nip}.pdf`)
}
</script>

<style scoped>
.nav-pills .nav-link {
  color: #6c757d;
  font-weight: 500;
  border-radius: 8px;
}
.nav-pills .nav-link.active {
  background-color: #0d6efd;
  color: #fff;
}
.timeline-content {
  border-color: #dee2e6 !important;
}
.avatar img {
  border: 4px solid #fff;
}
</style>
