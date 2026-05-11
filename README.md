# Sistem HRD - Manajemen Pegawai & Tunjangan Transport

Sistem ini adalah aplikasi pengelolaan data pegawai, pengaturan tunjangan transport, dan log aktivitas yang dibangun menggunakan **Nuxt 4**, **Prisma ORM**, dan **PostgreSQL**.

## Fitur Utama
1. **Manajemen Pegawai**: CRUD data pegawai dengan validasi ketat, filter masa kerja, dan bulk action.
2. **Dashboard**: Statistik visual (Doughnut Chart) dan tabel 5 kontrak terbaru.
3. **RBAC (Role Based Access Control)**: Pengaturan hak akses untuk Superadmin, Manager HRD, dan Admin HRD.
4. **Tunjangan Transport**: Perhitungan otomatis berdasarkan jarak (km) dan kehadiran (minimal 19 hari).
5. **Log Aktivitas**: Pencatatan setiap aksi CRUD dan login/logout.

## Setup & Instalasi

### Prasyarat
- Node.js v18+
- PostgreSQL
- NPM / PNPM

### Langkah Instalasi (Docker)
1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd TEST_JMC
   ```

2. **Konfigurasi Environment**
   Buat file `.env` di root directory. Sesuaikan `DATABASE_URL` agar mengarah ke service `db` di Docker:
   ```env
   DATABASE_URL="postgresql://hr_user:hr_password@db:5432/hr_db?schema=public"
   JWT_SECRET="rahasia_super_kuat_123"
   ...
   ```

3. **Jalankan dengan Docker Compose**
   ```bash
   docker compose up --build -d
   ```

4. **Inisialisasi Database (Pertama Kali)**
   ```bash
   docker exec -it hr_app npx prisma migrate dev --name init
   docker exec -it hr_app npx prisma db seed
   ```
   Aplikasi akan berjalan di `http://localhost:3000`.

## Dokumentasi API
Dokumentasi API tersedia dalam format OpenAPI 3.0 di file `openapi.json`. Anda dapat mengimpornya ke Postman atau membukanya via Swagger Editor.

## Pengujian Performa (k6)
Gunakan k6 untuk menguji performa API:
```bash
k6 run tests/load_test.js
```
