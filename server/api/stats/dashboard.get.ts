export default defineEventHandler(async (event) => {
  try {
    // 1. Get stats for widgets
    const totalPegawai = await prisma.pegawai.count({ where: { dihapus_pada: null } })
    const pegawaiTetap = await prisma.pegawai.count({ where: { jenis_pegawai: 'TETAP', dihapus_pada: null } })
    const pegawaiKontrak = await prisma.pegawai.count({ where: { jenis_pegawai: 'KONTRAK', dihapus_pada: null } })
    const pegawaiMagang = await prisma.pegawai.count({ where: { jenis_pegawai: 'MAGANG', dihapus_pada: null } })

    // 2. Get gender distribution
    const countPria = await prisma.pegawai.count({ where: { gender: 'PRIA', dihapus_pada: null } })
    const countWanita = await prisma.pegawai.count({ where: { gender: 'WANITA', dihapus_pada: null } })

    // 3. Get latest contracts (must be KONTRAK type, limited to 5)
    const latestContracts = await prisma.pegawai.findMany({
      where: { 
        jenis_pegawai: 'KONTRAK',
        dihapus_pada: null 
      },
      orderBy: { tanggal_masuk: 'desc' },
      take: 5,
    })

    return suksesResponse({
      stats: [
        { label: 'Total Pegawai', value: totalPegawai.toString(), icon: 'bi bi-people', color: 'primary' },
        { label: 'Total Pegawai Kontrak', value: pegawaiKontrak.toString(), icon: 'bi bi-person-clock', color: 'warning' },
        { label: 'Total Pegawai Tetap', value: pegawaiTetap.toString(), icon: 'bi bi-person-check', color: 'success' },
        { label: 'Total Peserta Magang', value: pegawaiMagang.toString(), icon: 'bi bi-mortarboard', color: 'info' },
      ],
      charts: {
        status: [pegawaiTetap, pegawaiKontrak, pegawaiMagang],
        gender: [countPria, countWanita]
      },
      latestContracts: latestContracts.map(p => ({
        id: p.id_pegawai,
        nip: p.nip,
        nama: p.nama_pegawai,
        jabatan: p.jabatan,
        departemen: p.departemen,
        tanggal: new Date(p.tanggal_masuk).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
      }))
    }, 'Statistik berhasil diambil')
  } catch (error) {
    console.error('Dashboard Stats Error:', error)
    return gagalResponse('Gagal mengambil statistik dashboard', 500)
  }
})
