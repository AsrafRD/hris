// ============================================
// API Response Types
// ============================================

export interface ApiResponse<T = any> {
  sukses: boolean
  pesan: string
  data: T
}

export interface ApiResponsePagination<T = any> {
  sukses: boolean
  pesan: string
  data: T[]
  meta: PaginationMeta
}

export interface PaginationMeta {
  halaman: number
  perHalaman: number
  totalData: number
  totalHalaman: number
}

// ============================================
// Auth Types
// ============================================

export interface LoginPayload {
  identitas: string
  kata_sandi: string
  captcha: string
  ingat_saya: boolean
}

export interface AuthUser {
  id_pengguna: number
  nama_pengguna: string
  username: string
  email: string | null
  nomor_hp: string | null
  foto: string | null
  peran: {
    id_peran: number
    nama_peran: string
  }
  hak_akses: string[]
}

export interface TokenPayload {
  id_pengguna: number
  username: string
  id_peran: number
  nama_peran: string
}

// ============================================
// Peran (Role) Types
// ============================================

export interface Peran {
  id_peran: number
  nama_peran: string
  deskripsi: string | null
  dibuat_pada: string
  diperbarui_pada: string
  peran_hak_akses?: PeranHakAkses[]
  _count?: { pengguna: number }
}

export interface HakAkses {
  id_hak_akses: number
  nama_akses: string
  modul: string
  deskripsi: string | null
  dibuat_pada: string
}

export interface PeranHakAkses {
  id_peran: number
  id_hak_akses: number
  hak_akses?: HakAkses
}

export interface PeranFormPayload {
  nama_peran: string
  deskripsi?: string
  hak_akses_ids: number[]
}

// ============================================
// Pengguna (User) Types
// ============================================

export interface Pengguna {
  id_pengguna: number
  id_pegawai: number | null
  nama_pengguna: string
  username: string
  email: string | null
  nomor_hp: string | null
  id_peran: number
  status_aktif: boolean
  foto: string | null
  terakhir_login: string | null
  dibuat_pada: string
  diperbarui_pada: string
  dihapus_pada: string | null
  peran?: Peran
  pegawai?: Pegawai
}

export interface PenggunaFormPayload {
  id_pegawai?: number | null
  nama_pengguna: string
  username: string
  email?: string | null
  nomor_hp?: string | null
  kata_sandi?: string
  id_peran: number
  status_aktif: boolean
}

// ============================================
// Pegawai (Employee) Types
// ============================================

export interface Pegawai {
  id_pegawai: number
  nip: string
  nama_pegawai: string
  email: string | null
  nomor_hp: string | null
  tempat_lahir: string | null
  tanggal_lahir: string | null
  alamat: string | null
  kecamatan: string | null
  kabupaten: string | null
  provinsi: string | null
  gender: 'PRIA' | 'WANITA'
  status_kawin: 'BELUM_KAWIN' | 'KAWIN' | 'CERAI_HIDUP' | 'CERAI_MATI'
  jumlah_anak: number
  tanggal_masuk: string
  jabatan: string
  departemen: string
  jenis_pegawai: 'KONTRAK' | 'TETAP' | 'MAGANG'
  foto: string | null
  jarak_km: number | null
  status_aktif: boolean
  dibuat_pada: string
  diperbarui_pada: string
  dihapus_pada: string | null
  pendidikan?: PendidikanPegawai[]
}

export interface PegawaiFormPayload {
  nip: string
  nama_pegawai: string
  email?: string | null
  nomor_hp?: string | null
  tempat_lahir?: string | null
  tanggal_lahir?: string | null
  alamat?: string | null
  kecamatan?: string | null
  kabupaten?: string | null
  provinsi?: string | null
  gender: 'PRIA' | 'WANITA'
  status_kawin?: 'BELUM_KAWIN' | 'KAWIN' | 'CERAI_HIDUP' | 'CERAI_MATI'
  jumlah_anak?: number
  tanggal_masuk: string
  jabatan: string
  departemen: string
  jenis_pegawai: 'KONTRAK' | 'TETAP' | 'MAGANG'
  jarak_km?: number
  status_aktif?: boolean
  pendidikan?: PendidikanPegawaiPayload[]
}

export interface PendidikanPegawai {
  id_pendidikan: number
  id_pegawai: number
  jenjang: string
  institusi: string
  jurusan: string | null
  tahun_lulus: number | null
  dibuat_pada: string
  diperbarui_pada: string
}

export interface PendidikanPegawaiPayload {
  id_pendidikan?: number
  jenjang: string
  institusi: string
  jurusan?: string | null
  tahun_lulus?: number | null
}

// ============================================
// Tunjangan Transport Types
// ============================================

export interface PengaturanTunjangan {
  id_pengaturan: number
  tarif_per_km: number
  keterangan: string | null
  status_aktif: boolean
  dibuat_pada: string
  diperbarui_pada: string
}

export interface PengaturanTunjanganPayload {
  tarif_per_km: number
  keterangan?: string | null
  status_aktif?: boolean
}

export interface TunjanganTransport {
  id_tunjangan: number
  id_pegawai: number
  bulan: number
  tahun: number
  jarak_km: number
  hari_masuk: number
  tarif_per_km: number
  total_tunjangan: number
  dibuat_pada: string
  diperbarui_pada: string
  pegawai?: Pegawai
}

export interface TunjanganHitungPayload {
  id_pegawai: number
  bulan: number
  tahun: number
  hari_masuk: number
}

// ============================================
// Log Aktivitas Types
// ============================================

export interface LogAktivitas {
  id_log: number
  id_pengguna: number | null
  modul: string
  aksi: 'LOGIN' | 'LOGOUT' | 'TAMBAH' | 'UBAH' | 'HAPUS' | 'LIHAT' | 'EKSPOR'
  keterangan: string | null
  ip_address: string | null
  user_agent: string | null
  dibuat_pada: string
  pengguna?: {
    nama_pengguna: string
    username: string
  }
}

// ============================================
// Dashboard Types
// ============================================

export interface DashboardStats {
  totalPegawai: number
  pegawaiKontrak: number
  pegawaiTetap: number
  pesertaMagang: number
  pegawaiBaru: Pegawai[]
}

export interface ChartData {
  labels: string[]
  datasets: {
    label?: string
    data: number[]
    backgroundColor: string[]
    borderColor?: string[]
    borderWidth?: number
  }[]
}

// ============================================
// Filter & Query Types
// ============================================

export interface PegawaiFilter {
  cari?: string
  jabatan?: string[]
  masa_kerja_operator?: string
  masa_kerja_nilai?: number
  halaman?: number
  per_halaman?: number
  urutan?: string
  arah?: 'asc' | 'desc'
}

export interface LogFilter {
  cari?: string
  aksi?: string
  id_pengguna?: number
  tanggal_mulai?: string
  tanggal_akhir?: string
  halaman?: number
  per_halaman?: number
}

// ============================================
// Wilayah (Region) Types
// ============================================

export interface Kecamatan {
  id: string
  nama: string
  kabupaten: string
  provinsi: string
}

// ============================================
// Sidebar Menu Type
// ============================================

export interface MenuItem {
  label: string
  icon: string
  to?: string
  hakAkses?: string
  children?: MenuItem[]
}
