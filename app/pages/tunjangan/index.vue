<template>
  <div>
    <!-- Page Header -->
    <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
      <div>
        <h4 class="fw-bold text-dark mb-1">Tunjangan Transport</h4>
        <p class="text-muted mb-0">Kelola perhitungan tunjangan transportasi pegawai tetap</p>
      </div>
      <div class="d-flex gap-2">
        <button v-if="hasPermission('kelola_pengaturan_tunjangan')" class="btn btn-primary d-flex align-items-center gap-2 px-4 shadow-sm" @click="showCalcModal = true">
          <i class="bi bi-calculator"></i> Hitung Tunjangan
        </button>
      </div>
    </div>

    <!-- Stats Row -->
    <div class="row g-4 mb-4">
      <div class="col-md-8">
        <div class="card border-0 shadow-sm rounded-4 h-100">
          <div class="card-body p-4">
            <div class="row align-items-center">
              <div class="col-md-7">
                <h5 class="fw-bold mb-3">Informasi Tarif Saat Ini</h5>
                <div class="d-flex align-items-center gap-4">
                  <div>
                    <div class="text-muted small fw-bold text-uppercase">Tarif per KM</div>
                    <h3 class="text-primary fw-bold mb-0">{{ formatCurrency(tarifAktif) }}</h3>
                  </div>
                  <div class="vr"></div>
                  <div>
                    <div class="text-muted small fw-bold text-uppercase">Status</div>
                    <span class="badge bg-success-subtle text-success rounded-pill px-3 py-2">AKTIF</span>
                  </div>
                </div>
              </div>
              <div class="col-md-5 text-md-end mt-3 mt-md-0">
                <NuxtLink v-if="hasPermission('kelola_pengaturan_tunjangan')" to="/tunjangan/pengaturan" class="btn btn-outline-primary btn-sm rounded-pill px-3">Ubah Pengaturan</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow-sm rounded-4 h-100 bg-primary text-white">
          <div class="card-body p-4">
            <div class="text-white-50 small fw-bold text-uppercase mb-1">Total Tunjangan Bulan Ini</div>
            <h2 class="fw-bold mb-0">{{ formatCurrency(totalTunjanganBulanIni) }}</h2>
            <div class="mt-3 small">
              <i class="bi bi-info-circle me-1"></i> Data untuk {{ currentMonthName }} {{ filters.tahun }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Filters & List -->
    <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div class="card-header bg-white p-4 border-bottom">
        <div class="row g-3">
          <div class="col-md-4">
            <div class="input-group">
              <span class="input-group-text bg-light border-end-0"><i class="bi bi-search"></i></span>
              <input v-model="filters.cari" type="text" class="form-control bg-light border-start-0" placeholder="Cari Pegawai..." @input="fetchData">
            </div>
          </div>
          <div class="col-md-3">
            <select v-model="filters.bulan" class="form-select bg-light" @change="fetchData">
              <option v-for="(name, idx) in months" :key="idx" :value="idx + 1">{{ name }}</option>
            </select>
          </div>
          <div class="col-md-3">
            <select v-model="filters.tahun" class="form-select bg-light" @change="fetchData">
              <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
            </select>
          </div>
          <div class="col-md-2 d-grid">
            <button class="btn btn-light" @click="fetchData">
              <i class="bi bi-arrow-clockwise me-1"></i> Refresh
            </button>
          </div>
        </div>
      </div>
      
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="bg-light">
            <tr>
              <th class="ps-4">Pegawai</th>
              <th class="text-center">Jarak</th>
              <th class="text-center">Hari Hadir</th>
              <th class="text-center">Tarif/KM</th>
              <th class="text-end">Total Tunjangan</th>
              <th class="text-center pe-4">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items" :key="item.id_tunjangan">
              <td class="ps-4">
                <div class="fw-bold">{{ item.pegawai.nama_pegawai }}</div>
                <div class="text-muted small">{{ item.pegawai.nip }}</div>
              </td>
              <td class="text-center">{{ item.jarak_km }} KM</td>
              <td class="text-center">{{ item.hari_masuk }} Hari</td>
              <td class="text-center">{{ formatCurrency(item.tarif_per_km) }}</td>
              <td class="text-end fw-bold text-primary">{{ formatCurrency(item.total_tunjangan) }}</td>
              <td class="text-center pe-4">
                <button class="btn btn-light btn-sm rounded-circle" title="Detail Perhitungan" @click="showDetail(item)">
                  <i class="bi bi-info-circle text-info"></i>
                </button>
              </td>
            </tr>
            <tr v-if="items.length === 0">
              <td colspan="6" class="text-center py-5 text-muted">
                <div class="py-4">
                  <i class="bi bi-wallet2 display-4 opacity-25"></i>
                  <p class="mt-3">Tidak ada data tunjangan untuk periode ini.</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal Hitung Tunjangan -->
    <div v-if="showCalcModal" class="modal fade show d-block" tabindex="-1" style="background: rgba(0,0,0,0.5)">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content border-0 shadow rounded-4">
          <div class="modal-header border-0 p-4 pb-0">
            <h5 class="modal-title fw-bold">Hitung Tunjangan Baru</h5>
            <button type="button" class="btn-close" @click="showCalcModal = false"></button>
          </div>
          <form @submit.prevent="handleCalculate">
            <div class="modal-body p-4">
              <div class="mb-3">
                <label class="form-label fw-semibold">Pilih Pegawai (Hanya Tetap)</label>
                <select v-model="calcForm.id_pegawai" class="form-select bg-light" required>
                  <option v-for="p in listPegawaiTetap" :key="p.id_pegawai" :value="p.id_pegawai">
                    {{ p.nama_pegawai }} ({{ p.jarak_km }} KM)
                  </option>
                </select>
              </div>
              <div class="row g-3">
                <div class="col-6">
                  <label class="form-label fw-semibold">Bulan</label>
                  <select v-model="calcForm.bulan" class="form-select bg-light">
                    <option v-for="(name, idx) in months" :key="idx" :value="idx + 1">{{ name }}</option>
                  </select>
                </div>
                <div class="col-6">
                  <label class="form-label fw-semibold">Tahun</label>
                  <select v-model="calcForm.tahun" class="form-select bg-light">
                    <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
                  </select>
                </div>
              </div>
              <div class="mt-3">
                <label class="form-label fw-semibold">Jumlah Hari Hadir</label>
                <input v-model.number="calcForm.hari_masuk" type="number" class="form-control bg-light" placeholder="Min 19 hari" required>
                <small class="text-muted">Rumus: {{ formatCurrency(tarifAktif) }} × KM × Hari Hadir</small>
              </div>
            </div>
            <div class="modal-footer border-0 p-4 pt-0">
              <button type="button" class="btn btn-light rounded-pill px-4" @click="showCalcModal = false">Batal</button>
              <button type="submit" class="btn btn-primary rounded-pill px-4 fw-bold" :disabled="submitting">
                <span v-if="submitting" class="spinner-border spinner-border-sm me-2"></span>
                Hitung & Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs'
import Swal from 'sweetalert2'

definePageMeta({
  middleware: ['auth']
})

const { hasPermission } = useAuth()
const items = ref([])
const tarifAktif = ref(0)
const listPegawaiTetap = ref([])
const loading = ref(false)
const submitting = ref(false)
const showCalcModal = ref(false)

const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const years = Array.from({ length: 5 }, (_, i) => dayjs().year() - i)

const filters = reactive({
  cari: '',
  bulan: dayjs().month() + 1,
  tahun: dayjs().year()
})

const calcForm = reactive({
  id_pegawai: '',
  bulan: dayjs().month() + 1,
  tahun: dayjs().year(),
  hari_masuk: 20
})

const fetchData = async () => {
  loading.value = true
  try {
    const response = await $fetch('/api/tunjangan', { query: filters })
    if (response.sukses) {
      items.value = response.data.tunjangan
      tarifAktif.value = response.data.pengaturan?.tarif_per_km || 0
    }
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

const fetchPegawaiTetap = async () => {
  try {
    const response = await $fetch('/api/pegawai', { 
      query: { jenis_pegawai: 'TETAP', status_aktif: 'true', per_halaman: 100 } 
    })
    if (response.sukses) {
      listPegawaiTetap.value = response.data.filter(p => p.jarak_km > 5 && p.jarak_km <= 25)
    }
  } catch (err) {}
}

const handleCalculate = async () => {
  submitting.value = true
  try {
    const response = await $fetch('/api/tunjangan/hitung', {
      method: 'POST',
      body: calcForm
    })
    if (response.sukses) {
      Swal.fire('Berhasil!', 'Tunjangan berhasil dihitung', 'success')
      showCalcModal.value = false
      fetchData()
    }
  } catch (err) {
    Swal.fire('Gagal!', err.data?.pesan || 'Gagal menghitung tunjangan', 'error')
  } finally {
    submitting.value = false
  }
}

onMounted(() => {
  fetchData()
  fetchPegawaiTetap()
})

const totalTunjanganBulanIni = computed(() => {
  return items.value.reduce((sum, item) => sum + item.total_tunjangan, 0)
})

const currentMonthName = computed(() => months[filters.bulan - 1])

const formatCurrency = (val) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(val)
}

const showDetail = (item) => {
  Swal.fire('Detail Perhitungan', `${formatCurrency(item.tarif_per_km)} × ${item.jarak_km} KM × ${item.hari_masuk} Hari = ${formatCurrency(item.total_tunjangan)}`, 'info')
}
</script>
