# Dokumentasi Testing - Sistem Pengelolaan Data Pegawai

Dokumen ini berisi panduan checklist untuk menguji fungsionalitas utama aplikasi.

## 1. Autentikasi & Keamanan
- [ ] **Login Valid**: Masuk menggunakan username/email/no hp yang benar + password + captcha "1234".
- [ ] **Login Invalid**: Masuk dengan password salah (harus muncul alert).
- [ ] **Captcha**: Masuk dengan kode captcha salah (harus ditolak).
- [ ] **Rate Limit**: Coba login salah 5x berturut-turut (harus muncul pesan limit).
- [ ] **Session Persistence**: Refresh halaman setelah login (harus tetap masuk).
- [ ] **Protected Route**: Coba akses `/dashboard` tanpa login (harus redirect ke `/login`).
- [ ] **Secure Logout**: Klik keluar dan coba akses kembali dashboard (harus ditolak).

## 2. Manajemen Pegawai
- [ ] **Listing**: Menampilkan data dengan pagination.
- [ ] **Searching**: Cari berdasarkan nama atau NIP.
- [ ] **Filtering**: Filter berdasarkan jenis pegawai (Tetap/Kontrak/Magang).
- [ ] **Tambah Data**: Isi form lengkap termasuk riwayat pendidikan (cek validasi required).
- [ ] **Detail Pegawai**: Lihat profil lengkap dan hitung masa kerja/usia otomatis.
- [ ] **Export Excel**: Klik tombol ekspor Excel dan cek file yang terdownload.
- [ ] **Export PDF**: Klik tombol ekspor PDF dan cek format laporannya.
- [ ] **Soft Delete**: Hapus pegawai dan pastikan tidak muncul di list (tapi tetap ada di DB dengan flag `dihapus_pada`).

## 3. Tunjangan Transport
- [ ] **Pengaturan Fare**: Ubah tarif per KM (cek apakah perhitungan baru mengikuti tarif ini).
- [ ] **Kriteria Kelayakan**:
    - Pegawai Kontrak/Magang (Harus ditolak/tidak layak).
    - Jarak < 5KM atau > 25KM (Harus ditolak).
    - Kehadiran < 19 hari (Harus ditolak).
- [ ] **Perhitungan**: 
    - Rumus: `Tarif x Jarak x Hari`.
    - Pembulatan: Contoh `2000 * 10 * 20.4 = 408000`.
- [ ] **Filter Periode**: Ubah bulan/tahun dan pastikan list terupdate.

## 4. RBAC (Role Based Access Control)
- [ ] **Admin HRD**: Pastikan tidak bisa menghapus data Superadmin.
- [ ] **Manager HRD**: Pastikan hanya bisa membaca data (Read-only) dan tidak muncul tombol Tambah/Edit.
- [ ] **Permission Matrix**: Ubah hak akses di menu Peran dan cek perubahannya di sidebar & akses menu secara real-time.

## 5. Log Aktivitas
- [ ] **Recording**: Lakukan aksi CRUD dan cek apakah muncul di tabel Log.
- [ ] **Detail Log**: Cek informasi IP Address dan User Agent yang terekam.

---
*Catatan: Pastikan database sudah di-seed sebelum melakukan pengujian.*
