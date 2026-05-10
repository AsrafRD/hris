# Sistem Pengelolaan Data Pegawai (SDM Digital)

Aplikasi Fullstack untuk pengelolaan data pegawai, manajemen hak akses (RBAC), dan perhitungan tunjangan transport. Dibangun dengan Nuxt 3, PostgreSQL, dan Prisma ORM.

## 🚀 Fitur Utama
- **Dashboard Modern**: Statistik kepegawaian dengan Chart.js.
- **Manajemen Pegawai**: CRUD lengkap dengan riwayat pendidikan dan biodata detail.
- **RBAC (Role Based Access Control)**: Kelola peran dan hak akses secara dinamis.
- **Tunjangan Transport**: Perhitungan otomatis berdasarkan jarak (KM) dan kehadiran.
- **Log Aktivitas**: Audit trail seluruh tindakan pengguna di sistem.
- **Ekspor Data**: Download data pegawai ke format Excel dan PDF.
- **Security**: JWT HttpOnly Cookies, Bcrypt hashing, Input Validation (Zod), XSS protection.

## 🛠️ Tech Stack
- **Frontend**: Nuxt 3, Vue 3 (Composition API), Pinia, Bootstrap 5.
- **Backend**: Nitro (Nuxt API Routes), Prisma ORM.
- **Database**: PostgreSQL.
- **Lainnya**: Chart.js, jsPDF, XLSX, Zod, Dayjs.

## 📦 Persiapan & Instalasi

### Prasyarat
- Node.js v18 atau v20+
- Docker & Docker Compose

### Langkah Instalasi
1. **Clone repositori dan masuk ke direktori proyek.**
2. **Salin file environment:**
   ```bash
   cp .env.example .env
   ```
3. **Jalankan aplikasi dengan Docker:**
   ```bash
   docker compose up --build
   ```
   *Perintah ini akan menjalankan container aplikasi (port 3000) dan database (port 5432).*

4. **Migrasi Database & Seeding (PENTING):**
   Di terminal baru, jalankan:
   ```bash
   npx prisma migrate dev --name inisialisasi
   npm run prisma:seed
   ```

## 🔑 Akun Login Default
| Peran | Username | Kata Sandi |
|-------|----------|------------|
| Superadmin | superadmin | Admin@123 |
| Manager HRD | (Dibuat via Superadmin) | - |
| Admin HRD | (Dibuat via Superadmin) | - |

*Gunakan captcha "1234" untuk login.*

## 📂 Struktur Folder
- `app/`: Source code frontend (pages, layouts, components, stores, composables).
- `server/`: Source code backend API, middleware, services, dan repositories.
- `prisma/`: Schema database dan file seeding.
- `types/`: Definisi tipe data TypeScript global.
- `public/`: File statis dan aset upload.

## 🧪 Dokumentasi Testing
Lihat file [DOKUMENTASI_TESTING.md](./DOKUMENTASI_TESTING.md) untuk panduan pengujian fitur.

---
Dikembangkan oleh Antigravity (Advanced Agentic Coding Team) - 2026.
