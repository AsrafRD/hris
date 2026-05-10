<template>
  <div class="admin-wrapper d-flex">
    <!-- Sidebar -->
    <aside 
      class="sidebar bg-white border-end shadow-sm"
      :class="{ 'collapsed': isSidebarCollapsed, 'show': isSidebarMobileOpen }"
    >
      <div class="sidebar-header p-4 border-bottom d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <i class="bi bi-people-fill text-primary fs-3"></i>
          <span class="fw-bold fs-5 brand-text">SDM Digital</span>
        </div>
        <button class="btn btn-sm btn-light d-md-none" @click="toggleSidebarMobile">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="sidebar-body p-3">
        <nav class="nav flex-column gap-1">
          <div v-for="(item, index) in menuItems" :key="index">
            <!-- Header Menu -->
            <div v-if="item.isHeader" class="nav-header text-uppercase small fw-bold text-muted px-3 mt-3 mb-1">
              {{ item.label }}
            </div>

            <!-- Single Menu -->
            <NuxtLink 
              v-else-if="!item.children"
              :to="item.to" 
              class="nav-link rounded-3 px-3 py-2 d-flex align-items-center gap-3 transition-all"
              :class="{ 'active': $route.path === item.to }"
              @click="closeSidebarMobile"
            >
              <i :class="item.icon" class="fs-5"></i>
              <span class="menu-label">{{ item.label }}</span>
            </NuxtLink>

            <!-- Menu with Children (Accordion) -->
            <div v-else class="nav-item">
              <a 
                class="nav-link rounded-3 px-3 py-2 d-flex align-items-center justify-content-between gap-3 transition-all cursor-pointer"
                :class="{ 'active': $route.path.startsWith(item.to) }"
                @click.prevent="toggleMenu(item.label)"
              >
                <div class="d-flex align-items-center gap-3">
                  <i :class="item.icon" class="fs-5"></i>
                  <span class="menu-label">{{ item.label }}</span>
                </div>
                <i :class="expandedMenus.includes(item.label) ? 'bi bi-chevron-down' : 'bi bi-chevron-right'" class="small opacity-50"></i>
              </a>
              <div class="nav-submenu ps-4 mt-1" :class="{ 'expanded': expandedMenus.includes(item.label) }">
                <NuxtLink 
                  v-for="child in item.children" 
                  :key="child.to" 
                  :to="child.to"
                  class="nav-link rounded-3 px-3 py-2 d-flex align-items-center gap-3 transition-all small"
                  :class="{ 'active': $route.path === child.to }"
                  @click="closeSidebarMobile"
                >
                  <i class="bi bi-circle small" style="font-size: 0.5rem"></i>
                  <span class="menu-label">{{ child.label }}</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="sidebar-footer p-3 border-top mt-auto">
        <div class="d-flex align-items-center gap-3 p-2 bg-light rounded-3">
          <div class="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px">
            {{ user?.nama_pengguna.charAt(0) }}
          </div>
          <div class="user-info overflow-hidden">
            <div class="fw-bold text-truncate small">{{ user?.nama_pengguna }}</div>
            <div class="text-muted text-truncate" style="font-size: 0.7rem">{{ user?.peran.nama_peran }}</div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content flex-grow-1 bg-light min-vh-100 d-flex flex-column" :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <!-- Mobile Overlay -->
      <div v-if="isSidebarMobileOpen" class="sidebar-overlay d-md-none" @click="toggleSidebarMobile"></div>
      
      <!-- Navbar -->
      <header class="navbar bg-white border-bottom sticky-top shadow-sm px-4">
        <div class="container-fluid p-0 d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center gap-3">
            <button class="btn btn-light d-none d-md-flex align-items-center justify-content-center" style="width: 40px; height: 40px" @click="toggleSidebar">
              <i class="bi bi-list fs-4"></i>
            </button>
            <button class="btn btn-light d-md-none align-items-center justify-content-center" style="width: 40px; height: 40px" @click="toggleSidebarMobile">
              <i class="bi bi-list fs-4"></i>
            </button>
            <nav aria-label="breadcrumb" class="d-none d-lg-block">
              <ol class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="/dashboard" class="text-decoration-none">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">{{ currentPageTitle }}</li>
              </ol>
            </nav>
          </div>

          <div class="d-flex align-items-center gap-3">
            <!-- Notifications -->
            <div class="dropdown">
              <button class="btn btn-light rounded-circle p-0 d-flex align-items-center justify-content-center position-relative" style="width: 40px; height: 40px" data-bs-toggle="dropdown">
                <i class="bi bi-bell fs-5"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="font-size: 0.6rem">
                  3
                </span>
              </button>
              <div class="dropdown-menu dropdown-menu-end shadow border-0 mt-2 p-0 overflow-hidden" style="width: 300px">
                <div class="p-3 bg-light border-bottom fw-bold">Notifikasi</div>
                <div class="p-0 max-vh-50 overflow-auto">
                  <a href="#" class="dropdown-item p-3 border-bottom d-flex gap-3">
                    <div class="bg-primary-subtle text-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style="width: 40px; height: 40px">
                      <i class="bi bi-person-plus"></i>
                    </div>
                    <div>
                      <div class="small fw-bold">Pegawai Baru Terdaftar</div>
                      <div class="text-muted small">Budi Santoso telah ditambahkan.</div>
                    </div>
                  </a>
                </div>
                <div class="p-2 text-center bg-light">
                  <a href="#" class="small text-decoration-none">Lihat Semua</a>
                </div>
              </div>
            </div>

            <!-- Profile Dropdown -->
            <div class="dropdown">
              <button class="btn btn-white d-flex align-items-center gap-2 p-1 pe-3 border rounded-pill shadow-sm" data-bs-toggle="dropdown">
                <div class="avatar bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 32px; height: 32px">
                   <i class="bi bi-person"></i>
                </div>
                <span class="d-none d-md-inline small fw-semibold">{{ user?.username }}</span>
                <i class="bi bi-chevron-down small opacity-50"></i>
              </button>
              <ul class="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                <li><a class="dropdown-item py-2 d-flex align-items-center gap-2" href="#"><i class="bi bi-person-gear"></i> Profil Saya</a></li>
                <li><a class="dropdown-item py-2 d-flex align-items-center gap-2" href="#"><i class="bi bi-shield-lock"></i> Keamanan</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><button class="dropdown-item py-2 d-flex align-items-center gap-2 text-danger" @click="handleLogout"><i class="bi bi-box-arrow-right"></i> Keluar</button></li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <section class="p-4 flex-grow-1">
        <div class="container-fluid p-0">
          <slot />
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer bg-white border-top p-4 text-center mt-auto">
        <span class="text-muted small">Copyright &copy; 2026 SDM Digital. All rights reserved.</span>
      </footer>
    </main>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'

const { user, logout, hasPermission } = useAuth()
const route = useRoute()

const isSidebarCollapsed = ref(false)
const isSidebarMobileOpen = ref(false)
const expandedMenus = ref([])

const menuItems = computed(() => {
  const items = [
    { label: 'Menu Utama', isHeader: true },
    { label: 'Dashboard', icon: 'bi bi-grid-fill', to: '/dashboard' },
  ]

  // Data Pegawai Group
  if (hasPermission('lihat_pegawai')) {
    items.push({ 
      label: 'Kepegawaian', icon: 'bi bi-people-fill', to: '/pegawai',
      children: [
        { label: 'Daftar Pegawai', to: '/pegawai' },
        { label: 'Tambah Pegawai', to: '/pegawai/tambah' }
      ] 
    })
  }

  // Tunjangan Group
  if (hasPermission('lihat_tunjangan')) {
    items.push({ 
      label: 'Tunjangan', icon: 'bi bi-wallet2', to: '/tunjangan',
      children: [
        { label: 'Tunjangan Transport', to: '/tunjangan' },
        { label: 'Pengaturan Fare', to: '/tunjangan/pengaturan' }
      ]
    })
  }

  // Management System Group
  items.push({ label: 'Sistem', isHeader: true })
  
  if (hasPermission('lihat_pengguna')) {
    items.push({ label: 'Pengguna', icon: 'bi bi-person-badge-fill', to: '/pengguna' })
  }
  
  if (hasPermission('kelola_peran')) {
    items.push({ label: 'Role & Peran', icon: 'bi bi-shield-lock-fill', to: '/peran' })
  }

  if (hasPermission('lihat_log')) {
    items.push({ label: 'Log Aktivitas', icon: 'bi bi-clock-history', to: '/log' })
  }

  return items
})

const currentPageTitle = computed(() => {
  const path = route.path
  if (path === '/dashboard') return 'Dashboard'
  if (path.startsWith('/pegawai')) return 'Manajemen Pegawai'
  if (path.startsWith('/tunjangan')) return 'Tunjangan Transport'
  if (path.startsWith('/pengguna')) return 'Manajemen Pengguna'
  if (path.startsWith('/peran')) return 'Manajemen Peran'
  if (path.startsWith('/log')) return 'Log Aktivitas'
  return 'Halaman'
})

const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  if (isSidebarCollapsed.value) {
    expandedMenus.value = []
  }
}

const toggleSidebarMobile = () => {
  isSidebarMobileOpen.value = !isSidebarMobileOpen.value
}

const closeSidebarMobile = () => {
  isSidebarMobileOpen.value = false
}

const toggleMenu = (label) => {
  if (isSidebarCollapsed.value) return
  const index = expandedMenus.value.indexOf(label)
  if (index > -1) {
    expandedMenus.value.splice(index, 1)
  } else {
    expandedMenus.value.push(label)
  }
}

const handleLogout = async () => {
  const result = await Swal.fire({
    title: 'Konfirmasi Keluar',
    text: 'Apakah Anda yakin ingin keluar dari sistem?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Ya, Keluar',
    cancelButtonText: 'Batal',
    confirmButtonColor: '#dc3545'
  })
  
  if (result.isConfirmed) {
    await logout()
  }
}

onMounted(() => {
  // Auto-expand menu based on current route
  menuItems.value.forEach(item => {
    if (item.children && route.path.startsWith(item.to)) {
      if (!expandedMenus.value.includes(item.label)) {
        expandedMenus.value.push(item.label)
      }
    }
  })
})
</script>

<style scoped>
.admin-wrapper {
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
}

.sidebar {
  width: 280px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  z-index: 1040;
  display: flex;
  flex-direction: column;
}

.sidebar.collapsed {
  width: 80px;
}

.sidebar.collapsed .brand-text,
.sidebar.collapsed .menu-label,
.sidebar.collapsed .nav-header,
.sidebar.collapsed .user-info,
.sidebar.collapsed .bi-chevron-right,
.sidebar.collapsed .bi-chevron-down {
  display: none !important;
}

.sidebar.collapsed .nav-link {
  justify-content: center;
  padding: 0.8rem !important;
}

.nav-link {
  color: #6c757d;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
}

.nav-link:hover {
  background-color: #f8f9fa;
  color: #0d6efd;
}

.nav-link.active {
  background-color: #0d6efd !important;
  color: #fff !important;
  box-shadow: 0 4px 12px rgba(13, 110, 253, 0.2);
}

.nav-link i {
  width: 24px;
}

.main-content {
  margin-left: 280px;
  transition: all 0.3s ease;
  overflow-x: clip;
}

.main-content.sidebar-collapsed {
  margin-left: 80px;
}

.avatar {
  flex-shrink: 0;
  font-weight: bold;
}

.nav-submenu {
  transition: all 0.3s ease;
  overflow: hidden;
  display: none;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-submenu.expanded {
  display: flex;
}

.sidebar.collapsed .nav-item {
  position: relative;
}

.sidebar.collapsed .nav-submenu {
  display: none !important;
  position: absolute;
  left: 100%;
  top: 0;
  width: 220px;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  border: 1px solid #e9ecef;
  padding: 8px;
  z-index: 1050;
  margin-top: 0 !important;
}

.sidebar.collapsed .nav-item:hover .nav-submenu {
  display: flex !important;
}

.sidebar.collapsed .nav-submenu .menu-label {
  display: inline !important;
}

.transition-all {
  transition: all 0.2s ease;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  z-index: 1030;
}

@media (max-width: 991.98px) {
  .sidebar {
    position: fixed;
    left: -280px;
    height: 100vh;
  }
  .sidebar.show {
    left: 0;
  }
  .main-content {
    margin-left: 0 !important;
    width: 100%;
  }
}
</style>
