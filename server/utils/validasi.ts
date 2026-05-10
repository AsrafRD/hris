import { z } from 'zod'

export const loginSchema = z.object({
  identitas: z.string().min(1, 'Identitas login wajib diisi'),
  kata_sandi: z.string().min(1, 'Kata sandi wajib diisi'),
  captcha: z.string().min(1, 'Captcha wajib diisi'),
  ingat_saya: z.boolean().default(false),
})

export const penggunaSchema = z.object({
  id_pegawai: z.number().nullable().optional(),
  nama_pengguna: z.string().min(1, 'Nama pengguna wajib diisi').max(100),
  username: z
    .string()
    .min(6, 'Username minimal 6 karakter')
    .max(50)
    .regex(/^[a-z0-9]+$/, 'Username hanya boleh huruf kecil dan angka, tanpa spasi'),
  email: z.string().email('Format email tidak valid').nullable().optional(),
  nomor_hp: z.string().max(20).nullable().optional(),
  kata_sandi: z
    .string()
    .min(8, 'Kata sandi minimal 8 karakter')
    .regex(/[A-Z]/, 'Kata sandi harus memiliki minimal 1 huruf besar')
    .regex(/[a-z]/, 'Kata sandi harus memiliki minimal 1 huruf kecil')
    .regex(/[^a-zA-Z0-9]/, 'Kata sandi harus memiliki minimal 1 karakter spesial')
    .regex(/^\S+$/, 'Kata sandi tidak boleh mengandung spasi')
    .optional(),
  id_peran: z.number().min(1, 'Peran wajib dipilih'),
  status_aktif: z.boolean().default(true),
})

export const pegawaiSchema = z.object({
  nip: z
    .string()
    .min(8, 'NIP minimal 8 digit')
    .regex(/^\d+$/, 'NIP hanya boleh angka'),
  nama_pegawai: z.string().min(1, 'Nama pegawai wajib diisi').max(100),
  email: z.string().email('Format email tidak valid').nullable().optional(),
  nomor_hp: z.string().max(20).nullable().optional(),
  tempat_lahir: z.string().max(100).nullable().optional(),
  tanggal_lahir: z.string().nullable().optional(),
  alamat: z.string().nullable().optional(),
  kecamatan: z.string().max(100).nullable().optional(),
  kabupaten: z.string().max(100).nullable().optional(),
  provinsi: z.string().max(100).nullable().optional(),
  gender: z.enum(['PRIA', 'WANITA'], { message: 'Gender wajib dipilih' }),
  status_kawin: z.enum(['BELUM_KAWIN', 'KAWIN', 'CERAI_HIDUP', 'CERAI_MATI']).default('BELUM_KAWIN'),
  jumlah_anak: z.number().min(0).default(0),
  tanggal_masuk: z.string().min(1, 'Tanggal masuk wajib diisi'),
  jabatan: z.string().min(1, 'Jabatan wajib diisi').max(100),
  departemen: z.string().min(1, 'Departemen wajib diisi').max(100),
  jenis_pegawai: z.enum(['KONTRAK', 'TETAP', 'MAGANG'], { message: 'Jenis pegawai wajib dipilih' }),
  jarak_km: z.number().min(0).default(0).optional(),
  status_aktif: z.boolean().default(true),
  pendidikan: z
    .array(
      z.object({
        id_pendidikan: z.number().optional(),
        jenjang: z.string().min(1, 'Jenjang pendidikan wajib diisi'),
        institusi: z.string().min(1, 'Institusi wajib diisi'),
        jurusan: z.string().nullable().optional(),
        tahun_lulus: z.number().nullable().optional(),
      })
    )
    .optional(),
})

export const peranSchema = z.object({
  nama_peran: z.string().min(1, 'Nama peran wajib diisi').max(50),
  deskripsi: z.string().max(255).optional(),
  hak_akses_ids: z.array(z.number()).default([]),
})

export const pengaturanTunjanganSchema = z.object({
  tarif_per_km: z.number().min(0, 'Tarif per KM wajib diisi'),
  keterangan: z.string().max(255).nullable().optional(),
  status_aktif: z.boolean().default(true),
})

export const tunjanganHitungSchema = z.object({
  id_pegawai: z.number().min(1, 'Pegawai wajib dipilih'),
  bulan: z.number().min(1).max(12, 'Bulan tidak valid'),
  tahun: z.number().min(2000).max(2100, 'Tahun tidak valid'),
  hari_masuk: z.number().min(0).max(31, 'Hari masuk tidak valid'),
})

export function validasiInput<T>(schema: z.ZodSchema<T>, data: unknown): T {
  const result = schema.safeParse(data)
  if (!result.success) {
    const errors = result.error.issues.map((e: any) => e.message).join(', ')
    throw createError({
      statusCode: 422,
      statusMessage: errors,
      data: {
        sukses: false,
        pesan: errors,
        data: result.error.issues,
      },
    })
  }
  return result.data
}
