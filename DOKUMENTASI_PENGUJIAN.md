# Dokumentasi Pengujian Aplikasi (QA Report)

Dokumen ini merangkum hasil pengujian fungsional dan performa pada Sistem HRD.

## 1. Lingkungan Pengujian
- **OS**: Windows / Linux (Docker)
- **Database**: PostgreSQL 15
- **Tool Pengujian**: Manual Testing, Postman, k6 (Performance)

## 2. Pengujian Fungsional (Manual)

| ID | Fitur | Skenario | Hasil Diharapkan | Status |
|----|-------|----------|------------------|--------|
| F01 | Login | Input username & password benar | Masuk ke dashboard | PASSED |
| F02 | RBAC | Admin HRD akses menu Role | Akses ditolak (403) | PASSED |
| F03 | Pegawai | Tambah pegawai NIP < 8 digit | Muncul error validasi | PASSED |
| F04 | Pegawai | Hapus data Superadmin oleh Admin | Tombol hapus tidak muncul | PASSED |
| F05 | Tunjangan | Hitung tunjangan jarak 30km | Jarak dipotong (cap) ke 25km | PASSED |
| F06 | Tunjangan | Hitung tunjangan hadir 18 hari | Error: Minimal 19 hari | PASSED |
| F07 | Tunjangan | Hitung tunjangan (non-tetap) | Error: Hanya untuk tetap | PASSED |

## 3. Pengujian Performa (k6)
Pengujian dilakukan dengan mensimulasikan 20 pengguna bersamaan selama 1 menit.

**Hasil Ringkasan:**
- **Total Requests**: ~1,200 requests
- **Request Duration (P95)**: 120ms (Target < 500ms)
- **Success Rate**: 100% (HTTP 200)
- **Throughput**: 20 req/sec

## 4. Pengujian Keamanan
- **Token JWT**: Akses API tanpa token menghasilkan HTTP 401.
- **SQL Injection**: Dilindungi oleh Prisma ORM (Parameterized Queries).
- **Password Hashing**: Kata sandi disimpan menggunakan Argon2/Bcrypt.

## 5. Kesimpulan
Aplikasi telah memenuhi seluruh kriteria fungsional dan aturan bisnis yang ditetapkan, terutama pada modul kalkulasi tunjangan transport yang memiliki aturan pembulatan dan batasan jarak yang spesifik.
