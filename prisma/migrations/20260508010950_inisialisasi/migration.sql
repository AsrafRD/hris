-- CreateEnum
CREATE TYPE "JenisPegawai" AS ENUM ('KONTRAK', 'TETAP', 'MAGANG');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('PRIA', 'WANITA');

-- CreateEnum
CREATE TYPE "StatusKawin" AS ENUM ('BELUM_KAWIN', 'KAWIN', 'CERAI_HIDUP', 'CERAI_MATI');

-- CreateEnum
CREATE TYPE "AksiLog" AS ENUM ('LOGIN', 'LOGOUT', 'TAMBAH', 'UBAH', 'HAPUS', 'LIHAT', 'EKSPOR');

-- CreateTable
CREATE TABLE "peran" (
    "id_peran" SERIAL NOT NULL,
    "nama_peran" VARCHAR(50) NOT NULL,
    "deskripsi" VARCHAR(255),
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "peran_pkey" PRIMARY KEY ("id_peran")
);

-- CreateTable
CREATE TABLE "hak_akses" (
    "id_hak_akses" SERIAL NOT NULL,
    "nama_akses" VARCHAR(100) NOT NULL,
    "modul" VARCHAR(50) NOT NULL,
    "deskripsi" VARCHAR(255),
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "hak_akses_pkey" PRIMARY KEY ("id_hak_akses")
);

-- CreateTable
CREATE TABLE "peran_hak_akses" (
    "id_peran" INTEGER NOT NULL,
    "id_hak_akses" INTEGER NOT NULL,

    CONSTRAINT "peran_hak_akses_pkey" PRIMARY KEY ("id_peran","id_hak_akses")
);

-- CreateTable
CREATE TABLE "pengguna" (
    "id_pengguna" SERIAL NOT NULL,
    "id_pegawai" INTEGER,
    "nama_pengguna" VARCHAR(100) NOT NULL,
    "username" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100),
    "nomor_hp" VARCHAR(20),
    "kata_sandi" VARCHAR(255) NOT NULL,
    "id_peran" INTEGER NOT NULL,
    "status_aktif" BOOLEAN NOT NULL DEFAULT true,
    "foto" VARCHAR(500),
    "terakhir_login" TIMESTAMP(3),
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMP(3) NOT NULL,
    "dihapus_pada" TIMESTAMP(3),

    CONSTRAINT "pengguna_pkey" PRIMARY KEY ("id_pengguna")
);

-- CreateTable
CREATE TABLE "pegawai" (
    "id_pegawai" SERIAL NOT NULL,
    "nip" VARCHAR(20) NOT NULL,
    "nama_pegawai" VARCHAR(100) NOT NULL,
    "email" VARCHAR(100),
    "nomor_hp" VARCHAR(20),
    "tempat_lahir" VARCHAR(100),
    "tanggal_lahir" DATE,
    "alamat" TEXT,
    "kecamatan" VARCHAR(100),
    "kabupaten" VARCHAR(100),
    "provinsi" VARCHAR(100),
    "gender" "Gender" NOT NULL,
    "status_kawin" "StatusKawin" NOT NULL DEFAULT 'BELUM_KAWIN',
    "jumlah_anak" INTEGER NOT NULL DEFAULT 0,
    "tanggal_masuk" DATE NOT NULL,
    "jabatan" VARCHAR(100) NOT NULL,
    "departemen" VARCHAR(100) NOT NULL,
    "jenis_pegawai" "JenisPegawai" NOT NULL,
    "foto" VARCHAR(500),
    "jarak_km" DOUBLE PRECISION DEFAULT 0,
    "status_aktif" BOOLEAN NOT NULL DEFAULT true,
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMP(3) NOT NULL,
    "dihapus_pada" TIMESTAMP(3),

    CONSTRAINT "pegawai_pkey" PRIMARY KEY ("id_pegawai")
);

-- CreateTable
CREATE TABLE "pendidikan_pegawai" (
    "id_pendidikan" SERIAL NOT NULL,
    "id_pegawai" INTEGER NOT NULL,
    "jenjang" VARCHAR(20) NOT NULL,
    "institusi" VARCHAR(200) NOT NULL,
    "jurusan" VARCHAR(100),
    "tahun_lulus" INTEGER,
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pendidikan_pegawai_pkey" PRIMARY KEY ("id_pendidikan")
);

-- CreateTable
CREATE TABLE "pengaturan_tunjangan" (
    "id_pengaturan" SERIAL NOT NULL,
    "tarif_per_km" DOUBLE PRECISION NOT NULL,
    "keterangan" VARCHAR(255),
    "status_aktif" BOOLEAN NOT NULL DEFAULT true,
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pengaturan_tunjangan_pkey" PRIMARY KEY ("id_pengaturan")
);

-- CreateTable
CREATE TABLE "tunjangan_transport" (
    "id_tunjangan" SERIAL NOT NULL,
    "id_pegawai" INTEGER NOT NULL,
    "bulan" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,
    "jarak_km" DOUBLE PRECISION NOT NULL,
    "hari_masuk" INTEGER NOT NULL,
    "tarif_per_km" DOUBLE PRECISION NOT NULL,
    "total_tunjangan" DOUBLE PRECISION NOT NULL,
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "diperbarui_pada" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tunjangan_transport_pkey" PRIMARY KEY ("id_tunjangan")
);

-- CreateTable
CREATE TABLE "log_aktivitas" (
    "id_log" SERIAL NOT NULL,
    "id_pengguna" INTEGER,
    "modul" VARCHAR(50) NOT NULL,
    "aksi" "AksiLog" NOT NULL,
    "keterangan" TEXT,
    "ip_address" VARCHAR(45),
    "user_agent" TEXT,
    "dibuat_pada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "log_aktivitas_pkey" PRIMARY KEY ("id_log")
);

-- CreateIndex
CREATE UNIQUE INDEX "peran_nama_peran_key" ON "peran"("nama_peran");

-- CreateIndex
CREATE INDEX "peran_nama_peran_idx" ON "peran"("nama_peran");

-- CreateIndex
CREATE UNIQUE INDEX "hak_akses_nama_akses_key" ON "hak_akses"("nama_akses");

-- CreateIndex
CREATE INDEX "hak_akses_modul_idx" ON "hak_akses"("modul");

-- CreateIndex
CREATE INDEX "hak_akses_nama_akses_idx" ON "hak_akses"("nama_akses");

-- CreateIndex
CREATE UNIQUE INDEX "pengguna_id_pegawai_key" ON "pengguna"("id_pegawai");

-- CreateIndex
CREATE UNIQUE INDEX "pengguna_username_key" ON "pengguna"("username");

-- CreateIndex
CREATE UNIQUE INDEX "pengguna_email_key" ON "pengguna"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pengguna_nomor_hp_key" ON "pengguna"("nomor_hp");

-- CreateIndex
CREATE INDEX "pengguna_username_idx" ON "pengguna"("username");

-- CreateIndex
CREATE INDEX "pengguna_email_idx" ON "pengguna"("email");

-- CreateIndex
CREATE INDEX "pengguna_nomor_hp_idx" ON "pengguna"("nomor_hp");

-- CreateIndex
CREATE INDEX "pengguna_id_peran_idx" ON "pengguna"("id_peran");

-- CreateIndex
CREATE INDEX "pengguna_status_aktif_idx" ON "pengguna"("status_aktif");

-- CreateIndex
CREATE UNIQUE INDEX "pegawai_nip_key" ON "pegawai"("nip");

-- CreateIndex
CREATE UNIQUE INDEX "pegawai_email_key" ON "pegawai"("email");

-- CreateIndex
CREATE INDEX "pegawai_nip_idx" ON "pegawai"("nip");

-- CreateIndex
CREATE INDEX "pegawai_nama_pegawai_idx" ON "pegawai"("nama_pegawai");

-- CreateIndex
CREATE INDEX "pegawai_jabatan_idx" ON "pegawai"("jabatan");

-- CreateIndex
CREATE INDEX "pegawai_departemen_idx" ON "pegawai"("departemen");

-- CreateIndex
CREATE INDEX "pegawai_jenis_pegawai_idx" ON "pegawai"("jenis_pegawai");

-- CreateIndex
CREATE INDEX "pegawai_status_aktif_idx" ON "pegawai"("status_aktif");

-- CreateIndex
CREATE INDEX "pegawai_tanggal_masuk_idx" ON "pegawai"("tanggal_masuk");

-- CreateIndex
CREATE INDEX "pendidikan_pegawai_id_pegawai_idx" ON "pendidikan_pegawai"("id_pegawai");

-- CreateIndex
CREATE INDEX "tunjangan_transport_bulan_tahun_idx" ON "tunjangan_transport"("bulan", "tahun");

-- CreateIndex
CREATE INDEX "tunjangan_transport_id_pegawai_idx" ON "tunjangan_transport"("id_pegawai");

-- CreateIndex
CREATE UNIQUE INDEX "tunjangan_transport_id_pegawai_bulan_tahun_key" ON "tunjangan_transport"("id_pegawai", "bulan", "tahun");

-- CreateIndex
CREATE INDEX "log_aktivitas_id_pengguna_idx" ON "log_aktivitas"("id_pengguna");

-- CreateIndex
CREATE INDEX "log_aktivitas_modul_idx" ON "log_aktivitas"("modul");

-- CreateIndex
CREATE INDEX "log_aktivitas_aksi_idx" ON "log_aktivitas"("aksi");

-- CreateIndex
CREATE INDEX "log_aktivitas_dibuat_pada_idx" ON "log_aktivitas"("dibuat_pada");

-- AddForeignKey
ALTER TABLE "peran_hak_akses" ADD CONSTRAINT "peran_hak_akses_id_peran_fkey" FOREIGN KEY ("id_peran") REFERENCES "peran"("id_peran") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "peran_hak_akses" ADD CONSTRAINT "peran_hak_akses_id_hak_akses_fkey" FOREIGN KEY ("id_hak_akses") REFERENCES "hak_akses"("id_hak_akses") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pengguna" ADD CONSTRAINT "pengguna_id_peran_fkey" FOREIGN KEY ("id_peran") REFERENCES "peran"("id_peran") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pengguna" ADD CONSTRAINT "pengguna_id_pegawai_fkey" FOREIGN KEY ("id_pegawai") REFERENCES "pegawai"("id_pegawai") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pendidikan_pegawai" ADD CONSTRAINT "pendidikan_pegawai_id_pegawai_fkey" FOREIGN KEY ("id_pegawai") REFERENCES "pegawai"("id_pegawai") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tunjangan_transport" ADD CONSTRAINT "tunjangan_transport_id_pegawai_fkey" FOREIGN KEY ("id_pegawai") REFERENCES "pegawai"("id_pegawai") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_aktivitas" ADD CONSTRAINT "log_aktivitas_id_pengguna_fkey" FOREIGN KEY ("id_pengguna") REFERENCES "pengguna"("id_pengguna") ON DELETE SET NULL ON UPDATE CASCADE;
