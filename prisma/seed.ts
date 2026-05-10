import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import pg from 'pg'
import bcrypt from 'bcrypt'

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('Sedang memproses seeding database...')

  // 1. Buat Hak Akses (Permissions)
  const daftarHakAkses = [
    { nama_akses: 'lihat_dashboard', modul: 'dashboard', deskripsi: 'Melihat dashboard statistik' },
    { nama_akses: 'kelola_peran', modul: 'peran', deskripsi: 'CRUD peran dan hak akses' },
    { nama_akses: 'lihat_pengguna', modul: 'pengguna', deskripsi: 'Melihat daftar pengguna' },
    { nama_akses: 'tambah_pengguna', modul: 'pengguna', deskripsi: 'Menambah pengguna baru' },
    { nama_akses: 'ubah_pengguna', modul: 'pengguna', deskripsi: 'Mengubah data pengguna' },
    { nama_akses: 'hapus_pengguna', modul: 'pengguna', deskripsi: 'Menghapus pengguna' },
    { nama_akses: 'lihat_pegawai', modul: 'pegawai', deskripsi: 'Melihat daftar pegawai' },
    { nama_akses: 'tambah_pegawai', modul: 'pegawai', deskripsi: 'Menambah pegawai baru' },
    { nama_akses: 'ubah_pegawai', modul: 'pegawai', deskripsi: 'Mengubah data pegawai' },
    { nama_akses: 'hapus_pegawai', modul: 'pegawai', deskripsi: 'Menghapus pegawai' },
    { nama_akses: 'ekspor_pegawai', modul: 'pegawai', deskripsi: 'Ekspor data pegawai ke Excel/PDF' },
    { nama_akses: 'lihat_tunjangan', modul: 'tunjangan', deskripsi: 'Melihat data tunjangan transport' },
    { nama_akses: 'kelola_pengaturan_tunjangan', modul: 'tunjangan', deskripsi: 'Mengelola base fare transport' },
    { nama_akses: 'lihat_log', modul: 'log', deskripsi: 'Melihat log aktivitas sistem' },
  ]

  for (const item of daftarHakAkses) {
    await prisma.hak_akses.upsert({
      where: { nama_akses: item.nama_akses },
      update: {},
      create: item,
    })
  }

  // 2. Buat Peran (Roles)
  const peranSuperadmin = await prisma.peran.upsert({
    where: { nama_peran: 'Superadmin' },
    update: {},
    create: { nama_peran: 'Superadmin', deskripsi: 'Administrator dengan akses penuh' },
  })

  const peranManagerHRD = await prisma.peran.upsert({
    where: { nama_peran: 'Manager HRD' },
    update: {},
    create: { nama_peran: 'Manager HRD', deskripsi: 'Manager HRD dengan akses monitoring' },
  })

  const peranAdminHRD = await prisma.peran.upsert({
    where: { nama_peran: 'Admin HRD' },
    update: {},
    create: { nama_peran: 'Admin HRD', deskripsi: 'Admin HRD pelaksana operasional' },
  })

  // 3. Assign Hak Akses
  const semuaAkses = await prisma.hak_akses.findMany()
  for (const akses of semuaAkses) {
    await prisma.peran_hak_akses.upsert({
      where: { id_peran_id_hak_akses: { id_peran: peranSuperadmin.id_peran, id_hak_akses: akses.id_hak_akses } },
      update: {},
      create: { id_peran: peranSuperadmin.id_peran, id_hak_akses: akses.id_hak_akses },
    })
  }

  // 4. Buat Data Pegawai Dummy (Realistic)
  const departments = ['IT', 'HR', 'Finance', 'Marketing', 'Operations']
  const positions = ['Staff', 'Senior Staff', 'Supervisor', 'Assistant Manager', 'Manager']
  const genders: ('PRIA' | 'WANITA')[] = ['PRIA', 'WANITA']
  const statusKawin: ('BELUM_KAWIN' | 'KAWIN' | 'CERAI_HIDUP' | 'CERAI_MATI')[] = ['BELUM_KAWIN', 'KAWIN']

  console.log('Menghasilkan data pegawai dummy...')
  const dummyEmployees = [
    { nip: '00000000', nama: 'Super Administrator', email: 'admin@perusahaan.com', dept: 'IT', job: 'IT Administrator' },
    { nip: '11111111', nama: 'Budi Manager', email: 'manager@perusahaan.com', dept: 'HR', job: 'Manager HR' },
    { nip: '22222222', nama: 'Siti Admin', email: 'adminhrd@perusahaan.com', dept: 'HR', job: 'Staff HRD' },
    { nip: '10000001', nama: 'Andi Pratama', email: 'andi@perusahaan.com', dept: 'IT', job: 'Software Engineer' },
    { nip: '10000002', nama: 'Rina Wijaya', email: 'rina@perusahaan.com', dept: 'Finance', job: 'Accountant' },
    { nip: '10000003', nama: 'Eko Santoso', email: 'eko@perusahaan.com', dept: 'Marketing', job: 'Digital Marketer' },
    { nip: '10000004', nama: 'Maya Sari', email: 'maya@perusahaan.com', dept: 'Operations', job: 'Ops Lead' },
    { nip: '10000005', nama: 'Dedi Kurniawan', email: 'dedi@perusahaan.com', dept: 'IT', job: 'System Admin' },
    { nip: '10000006', nama: 'Lani Putri', email: 'lani@perusahaan.com', dept: 'HR', job: 'Recruiter' },
    { nip: '10000007', nama: 'Fajar Ramadhan', email: 'fajar@perusahaan.com', dept: 'Marketing', job: 'Content Creator' },
    { nip: '10000008', nama: 'Gita Amalia', email: 'gita@perusahaan.com', dept: 'Finance', job: 'Tax Specialist' },
    { nip: '10000009', nama: 'Hendra Setiawan', email: 'hendra@perusahaan.com', dept: 'Operations', job: 'Logistics' },
    { nip: '10000010', nama: 'Indah Permata', email: 'indah@perusahaan.com', dept: 'IT', job: 'UI/UX Designer' },
  ]

  for (const emp of dummyEmployees) {
    const createdEmp = await prisma.pegawai.upsert({
      where: { nip: emp.nip },
      update: {},
      create: {
        nip: emp.nip,
        nama_pegawai: emp.nama,
        email: emp.email,
        nomor_hp: `0812${Math.floor(10000000 + Math.random() * 90000000)}`,
        tempat_lahir: 'Jakarta',
        tanggal_lahir: new Date('1990-01-01'),
        alamat: 'Jl. Contoh No. 123',
        gender: genders[Math.floor(Math.random() * genders.length)],
        status_kawin: statusKawin[Math.floor(Math.random() * statusKawin.length)],
        tanggal_masuk: new Date('2020-01-01'),
        jabatan: emp.job,
        departemen: emp.dept,
        jenis_pegawai: 'TETAP',
        jarak_km: Math.floor(Math.random() * 30) + 5,
        status_aktif: true,
      },
    })

    // Buat data tunjangan dummy untuk 3 bulan terakhir
    const months = [3, 4, 5] // Maret, April, Mei
    for (const m of months) {
      await prisma.tunjangan_transport.upsert({
        where: { id_pegawai_bulan_tahun: { id_pegawai: createdEmp.id_pegawai, bulan: m, tahun: 2026 } },
        update: {},
        create: {
          id_pegawai: createdEmp.id_pegawai,
          bulan: m,
          tahun: 2026,
          jarak_km: createdEmp.jarak_km || 10,
          hari_masuk: Math.floor(Math.random() * 5) + 18, // 18-22 hari
          tarif_per_km: 2000,
          total_tunjangan: (createdEmp.jarak_km || 10) * (Math.floor(Math.random() * 5) + 18) * 2000,
        }
      })
    }
  }

  // 5. Buat Pengguna
  const passwordAdmin = await bcrypt.hash('Admin@123', 10)
  const passwordManager = await bcrypt.hash('Manager@123', 10)
  const passwordStaff = await bcrypt.hash('Staff@123', 10)

  const superEmp = await prisma.pegawai.findUnique({ where: { nip: '00000000' } })
  const managerEmp = await prisma.pegawai.findUnique({ where: { nip: '11111111' } })
  const staffEmp = await prisma.pegawai.findUnique({ where: { nip: '22222222' } })

  if (superEmp) {
    await prisma.pengguna.upsert({
      where: { username: 'superadmin' },
      update: { kata_sandi: passwordAdmin },
      create: {
        id_pegawai: superEmp.id_pegawai,
        nama_pengguna: superEmp.nama_pegawai,
        username: 'superadmin',
        email: superEmp.email,
        kata_sandi: passwordAdmin,
        id_peran: peranSuperadmin.id_peran,
      },
    })
  }

  if (managerEmp) {
    await prisma.pengguna.upsert({
      where: { username: 'managerhr' },
      update: { kata_sandi: passwordManager },
      create: {
        id_pegawai: managerEmp.id_pegawai,
        nama_pengguna: managerEmp.nama_pegawai,
        username: 'managerhr',
        email: managerEmp.email,
        kata_sandi: passwordManager,
        id_peran: peranManagerHRD.id_peran,
      },
    })
  }

  if (staffEmp) {
    await prisma.pengguna.upsert({
      where: { username: 'adminhrd' },
      update: { kata_sandi: passwordStaff },
      create: {
        id_pegawai: staffEmp.id_pegawai,
        nama_pengguna: staffEmp.nama_pegawai,
        username: 'adminhrd',
        email: staffEmp.email,
        kata_sandi: passwordStaff,
        id_peran: peranAdminHRD.id_peran,
      },
    })
  }

  // 6. Buat Log Aktivitas Dummy
  console.log('Menghasilkan log aktivitas dummy...')
  const actions: ('LOGIN' | 'TAMBAH' | 'UBAH' | 'HAPUS')[] = ['LOGIN', 'TAMBAH', 'UBAH', 'HAPUS']
  const modules = ['pengguna', 'pegawai', 'tunjangan', 'peran']
  
  const allUsers = await prisma.pengguna.findMany()
  for (let i = 0; i < 20; i++) {
    const user = allUsers[Math.floor(Math.random() * allUsers.length)]
    await prisma.log_aktivitas.create({
      data: {
        id_pengguna: user.id_pengguna,
        modul: modules[Math.floor(Math.random() * modules.length)],
        aksi: actions[Math.floor(Math.random() * actions.length)],
        keterangan: 'Melakukan aktivitas dummy di sistem',
        ip_address: '127.0.0.1',
        user_agent: 'Mozilla/5.0',
        dibuat_pada: new Date(Date.now() - Math.floor(Math.random() * 1000000000)),
      }
    })
  }

  // 7. Pengaturan Tunjangan
  await prisma.pengaturan_tunjangan.upsert({
    where: { id_pengaturan: 1 },
    update: {},
    create: { id_pengaturan: 1, tarif_per_km: 2000, keterangan: 'Tarif standar', status_aktif: true },
  })

  console.log('Seeding berhasil diselesaikan!')
}

main()
  .catch((e) => { console.error(e); process.exit(1) })
  .finally(async () => { await prisma.$disconnect() })
