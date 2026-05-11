<template>
  <div class="dashboard-page">
    <!-- Loading Overlay -->
    <div v-if="pending" class="d-flex justify-content-center align-items-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <div v-else-if="error" class="alert alert-danger">
      Gagal memuat data dashboard. Silakan coba lagi nanti.
    </div>

    <div v-else>
      <!-- Header -->
      <div class="d-flex align-items-center justify-content-between mb-4">
        <div>
          <h4 class="fw-bold text-dark mb-1">Dashboard</h4>
          <p class="text-muted mb-0">Selamat Datang, <strong>{{ user?.nama_pengguna }}</strong> - {{ user?.peran.nama_peran }}</p>
        </div>
        <div class="d-none d-md-block">
          <div class="bg-white p-2 rounded-3 shadow-sm border px-3 d-flex align-items-center gap-2">
            <i class="bi bi-calendar3 text-primary"></i>
            <span class="small fw-semibold">{{ today }}</span>
          </div>
        </div>
      </div>

      <!-- Dashboard Content for Manager HRD -->
      <div v-if="user?.peran.nama_peran === 'Manager HRD'">
        <!-- Stats Widgets -->
        <div class="row g-4 mb-4">
          <div v-for="(stat, index) in dashboardData?.data.stats" :key="index" class="col-12 col-sm-6 col-xl-3">
            <div class="card border-0 shadow-sm rounded-4 h-100 transition-all hover-up">
              <div class="card-body p-4 d-flex align-items-center gap-3">
                <div :class="`bg-${stat.color}-subtle text-${stat.color}`" class="rounded-circle d-flex align-items-center justify-content-center p-3" style="width: 60px; height: 60px">
                  <i :class="stat.icon" class="fs-2"></i>
                </div>
                <div>
                  <div class="text-muted small fw-semibold text-uppercase">{{ stat.label }}</div>
                  <h3 class="fw-bold mb-0">{{ stat.value }}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Charts Row -->
        <div class="row g-4 mb-4">
          <!-- Chart Status Pegawai -->
          <div class="col-12 col-lg-6">
            <div class="card border-0 shadow-sm rounded-4 h-100">
              <div class="card-header bg-transparent border-0 p-4 pb-0 d-flex justify-content-between align-items-center">
                <h5 class="fw-bold mb-0">Status Kepegawaian</h5>
              </div>
              <div class="card-body p-4 d-flex justify-content-center align-items-center" style="min-height: 300px">
                <div style="max-width: 300px; width: 100%">
                  <Doughnut :data="chartStatusData" :options="chartOptions" />
                </div>
              </div>
            </div>
          </div>

          <!-- Chart Gender -->
          <div class="col-12 col-lg-6">
            <div class="card border-0 shadow-sm rounded-4 h-100">
              <div class="card-header bg-transparent border-0 p-4 pb-0 d-flex justify-content-between align-items-center">
                <h5 class="fw-bold mb-0">Distribusi Gender</h5>
              </div>
              <div class="card-body p-4 d-flex justify-content-center align-items-center" style="min-height: 300px">
                <div style="max-width: 300px; width: 100%">
                  <Doughnut :data="chartGenderData" :options="chartOptions" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Latest Contracts Table -->
        <div class="card border-0 shadow-sm rounded-4 overflow-hidden">
          <div class="card-header bg-white p-4 border-0 d-flex justify-content-between align-items-center">
            <h5 class="fw-bold mb-0">5 Pegawai Kontrak Terbaru</h5>
            <NuxtLink to="/pegawai" class="btn btn-primary btn-sm rounded-pill px-3">Lihat Semua</NuxtLink>
          </div>
          <div class="table-responsive">
            <table class="table table-hover align-middle mb-0">
              <thead class="bg-light">
                <tr>
                  <th class="ps-4">NIP</th>
                  <th>Nama Pegawai</th>
                  <th>Jabatan</th>
                  <th>Departemen</th>
                  <th>Tgl Masuk</th>
                  <th class="text-end pe-4">Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="pegawai in dashboardData?.data.latestContracts" :key="pegawai.nip">
                  <td class="ps-4 fw-semibold">{{ pegawai.nip }}</td>
                  <td>
                    <div class="d-flex align-items-center gap-2">
                      <div class="avatar bg-primary-subtle text-primary rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px; font-size: 0.8rem">
                        {{ pegawai.nama.charAt(0) }}
                      </div>
                      <span>{{ pegawai.nama }}</span>
                    </div>
                  </td>
                  <td>{{ pegawai.jabatan }}</td>
                  <td><span class="badge bg-info-subtle text-info px-3">{{ pegawai.departemen }}</span></td>
                  <td>{{ pegawai.tanggal }}</td>
                  <td class="text-end pe-4">
                    <NuxtLink :to="`/pegawai/${pegawai.id}`" class="btn btn-light btn-sm rounded-circle">
                      <i class="bi bi-eye"></i>
                    </NuxtLink>
                  </td>
                </tr>
                <tr v-if="dashboardData?.data.latestContracts.length === 0">
                  <td colspan="6" class="text-center py-5 text-muted">Belum ada data pegawai kontrak.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Welcome Message for Superadmin and Admin HRD -->
      <div v-else class="card border-0 shadow-sm rounded-4 p-5 text-center mt-4">
        <div class="mb-4">
          <div class="bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center" style="width: 100px; height: 100px">
            <i class="bi bi-person-check-fill" style="font-size: 3rem"></i>
          </div>
        </div>
        <h2 class="fw-bold mb-3">Selamat Datang, {{ user?.nama_pengguna }}</h2>
        <p class="text-muted fs-5 mb-0">Anda login sebagai <span class="badge bg-primary px-3 py-2 rounded-pill">{{ user?.peran.nama_peran }}</span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

ChartJS.register(ArcElement, Tooltip, Legend)

definePageMeta({
  middleware: ['auth']
})

const { user } = useAuth()
const today = dayjs().locale('id').format('dddd, DD MMMM YYYY')

// Fetch real data with a cache-busting key to clear broken old payloads
const { data: dashboardData, pending, error } = await useFetch('/api/stats/dashboard', {
  key: 'dashboard-stats-v2'
})

// Chart configurations
const chartStatusData = computed(() => {
  if (!dashboardData.value) return { labels: [], datasets: [] }
  return {
    labels: ['Tetap', 'Kontrak', 'Magang'],
    datasets: [{
      data: dashboardData.value.data.charts.status,
      backgroundColor: ['#0d6efd', '#ffc107', '#0dcaf0'],
      borderWidth: 0
    }]
  }
})

const chartGenderData = computed(() => {
  if (!dashboardData.value) return { labels: [], datasets: [] }
  return {
    labels: ['Pria', 'Wanita'],
    datasets: [{
      data: dashboardData.value.data.charts.gender,
      backgroundColor: ['#0d6efd', '#f97316'],
      borderWidth: 0
    }]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' }
  },
  cutout: '70%'
}
</script>

<style scoped>
.hover-up {
  transition: transform 0.3s ease;
}
.hover-up:hover {
  transform: translateY(-5px);
}
.transition-all {
  transition: all 0.3s ease;
}
</style>
