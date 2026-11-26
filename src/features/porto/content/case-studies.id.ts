import type { CaseStudy } from "../case-studies";

// Indonesian version of the case studies. Same order, slugs, logos and links as the English file.
export const caseStudiesId: CaseStudy[] = [
  {
    slug: "hnf-office",
    name: "HNF Office",
    tagline: "Kantor virtual untuk agen AI saya",
    logo: { src: "/projects/hnf-office-mark.svg", bg: "#EAF4F2" },
    intro:
      "Kantor isometrik di browser tempat agen AI pribadi saya bekerja. Setiap pesan, transaksi, dan laporan yang mereka tangani muncul sebagai karakter yang bergerak di dalam kantor, dan di halaman yang sama saya bisa ngobrol dengan mereka sekaligus menyetujui apa yang ingin mereka lakukan.",
    facts: [
      { label: "Periode", value: "November 2026" },
      { label: "Peran", value: "Solo, dari desain sampai deploy" },
      { label: "Agen", value: "Arunika (keuangan), Swastamita (HR)" },
    ],
    problem: [
      "Setelah Arunika saya pakai setiap hari, saya ingin menambah agen lain, masing-masing dengan tugasnya sendiri. Masalahnya ada di visibilitas: agen yang bekerja lewat Telegram itu seperti kotak hitam. Saya bisa melihat balasannya, tapi tidak tahu apa yang sedang ia baca, apa yang ia tunggu, atau apa yang ia kerjakan di belakang layar.",
      "Saya juga tidak mau setiap agen baru datang dengan bot, dashboard, dan alur approval-nya sendiri-sendiri. Jadi repo Arunika saya ubah menjadi platform: satu kantor tempat semua agen muncul, satu tempat untuk berbicara dengan mereka, dan satu jalur approval yang wajib dilewati setiap agen.",
    ],
    flow: {
      title: "Dari kejadian nyata menjadi karakter di layar",
      steps: [
        "Agen melakukan sesuatu yang nyata: menerima pesan, membaca data laporan, menawarkan tombol approval, atau mencatat transaksi.",
        "Kejadian itu ditambahkan sebagai event, ditandai dengan id agennya, ke event log milik platform.",
        "Server kantor terus membaca log tersebut dan mengalirkan event baru ke browser lewat Server-Sent Events.",
        "Sebuah \"sutradara\" di frontend mengubah setiap event menjadi gerakan: agen berjalan ke shared memory untuk membaca data, ke printer untuk laporan PDF, ke lemari arsip saat transaksi dicatat, dan ke ruangan saya untuk menyerahkan laporan.",
        "Tombol approval muncul di panel chat. Saat ditekan, sebuah request masuk ke inbox agen tersebut, lalu agen memeriksanya persis seperti tombol yang ditekan di Telegram sebelum ada data yang ditulis.",
      ],
    },
    features: [
      { name: "Kantor isometrik yang hidup", text: "Digambar manual di canvas: meja kerja, ruang bos, pantry, ruang game, ruang meeting, dan musholla, dengan karakter yang mencari rute terpendek di sepanjang lorong." },
      { name: "Hari kerja yang terasa nyata", text: "Jam kerja, waktu istirahat, dan jadwal salat diatur dari server, jadi agen meninggalkan mejanya saat makan siang dan berjalan bersama ke musholla ketika waktu salat tiba." },
      { name: "Chat dengan setiap agen", text: "Satu channel untuk tiap agen, ditambah channel \"semua agen\". Pesan di sana yang tidak menyebut nama dianggap pengumuman, dan semua agen akan menjawabnya." },
      { name: "Agen HR dengan approval", text: "Swastamita hanya ada di kantor dan mengurus jam kerja serta peraturan kantor. Ia hanya bisa mengusulkan perubahan; perubahan baru berlaku setelah saya menekan approve, dan setiap versinya tetap disimpan." },
      { name: "Mode pengunjung", text: "Tampilan read-only untuk tamu: kantor yang sedang berjalan, profil agen, dan jadwal kantor, tanpa chat, nominal, atau apa pun yang bersifat pribadi." },
      { name: "Menambah agen cukup lewat config", text: "Agen baru cukup satu entri di agents.json berisi nama, peran, tempat duduk, dan warnanya. Karakter, kursi, dan channel chat-nya muncul dengan sendirinya." },
    ],
    hardParts: [
      {
        name: "Kantor ini tidak boleh jadi pintu belakang",
        text: "Halaman web yang bisa menyetujui penulisan data keuangan adalah celah serangan baru. Karena itu server kantor tidak punya wewenang sendiri: ia hanya menaruh file request ke inbox agen dengan atomic write, lalu agen menjalankan pengecekan approval bertanda tangan Ed25519 yang sama dengan yang dipakai untuk Telegram. Server hanya listen di localhost dan dibuka lewat tunnel yang terautentikasi.",
      },
      {
        name: "Update real-time tanpa database dan tanpa Node di server",
        text: "Server-nya murni pakai standard library Python. Ia membaca event log para agen dan mengalirkannya dengan chunked Server-Sent Events, sehingga proxy seperti Vite dan Cloudflare langsung meneruskan setiap event tanpa menahannya di buffer. Frontend-nya berupa build Vite statis, jadi VPS tidak perlu Node.js.",
      },
      {
        name: "Memperlihatkan kantor tanpa memperlihatkan data saya",
        text: "Akses pengunjung ditentukan di server berdasarkan host name, bukan oleh frontend. Host pengunjung hanya bisa memuat halaman dan dua endpoint publik; semua POST serta endpoint chat, history, dan stream ditolak, jadi isi chat, nominal, dan usulan HR tidak pernah keluar dari server.",
      },
      {
        name: "Membuat karakter bergerak seperti manusia",
        text: "Event nyata datang di waktu yang acak, sering kali saat karakter sedang berjalan. Sutradara mengantrekan animasi per karakter dan menghitung ulang rute dari posisi saat ini alih-alih teleport, dengan langkah santai, sehingga kantor tetap tenang meskipun beberapa event datang bersamaan.",
      },
    ],
    outcome: [
      "Sekarang saya bisa melihat apa yang sedang dikerjakan agen-agen saya dalam sekali lihat, berbicara dengan mereka dari browser, dan menyetujui pekerjaan mereka di tempat yang sama, dengan pengecekan keamanan yang sama seperti di Telegram.",
      "Agen kedua, Swastamita, ditambahkan cukup dengan satu entri config dan logikanya sendiri, tanpa menyentuh frontend kantor. Itulah alasan saya membangun platform, bukan sekadar bot baru.",
    ],
    lessons: [
      "Antarmuka baru sebaiknya memakai ulang jalur keamanan yang sudah ada, bukan diberi jalan pintas untuk melewatinya.",
      "Aturan privasi tempatnya di server. Menyembunyikan sesuatu di frontend bukan berarti benar-benar menyembunyikannya.",
      "Karena platformnya dibangun lebih dulu, menambah agen kedua jadi ringan.",
    ],
    links: [],
  },
  {
    slug: "arunika",
    name: "Arunika",
    tagline: "Asisten keuangan AI di Telegram",
    logo: { src: "/projects/arunika-mark.svg", bg: "#14213D" },
    intro:
      "Bot Telegram yang mencatat pengeluaran dan budget saya ke Google Sheets hanya dari pesan chat santai. AI-nya boleh menyusun draft, tapi tidak pernah boleh menulis: tidak ada yang masuk ke sheet sampai saya menekan tombol dan sebuah worker terpisah memeriksa ulang approval tersebut.",
    facts: [
      { label: "Periode", value: "Oktober sampai November 2026" },
      { label: "Peran", value: "Solo, dari desain sampai operasional" },
      { label: "Status", value: "Dipakai setiap hari sejak 31 Oktober 2026" },
      { label: "Berjalan di", value: "VPS Ubuntu, service systemd" },
    ],
    problem: [
      "Saya mengelola keuangan pribadi di Google Sheet. Cara ini jalan, tapi membuka spreadsheet setiap kali beli kopi adalah tipe pekerjaan kecil yang gampang ditunda, dan catatan keuangan yang bolong-bolong tidak banyak gunanya.",
      "Mengetik \"tadi beli kopi 15rb\" di chat jauh lebih mudah. Masalahnya, membiarkan model AI menulis langsung ke catatan uang saya yang asli itu berisiko: ia bisa salah membaca nominal, memilih tanggal yang keliru, atau mencatat hal yang sama dua kali. Jadi targetnya adalah kepraktisan chat dengan keamanan seperti ada orang yang memeriksa setiap entri.",
    ],
    flow: {
      title: "Dari pesan chat menjadi baris di sheet",
      steps: [
        "Saya mengirim pesan biasa, entah satu pembelian atau beberapa sekaligus.",
        "Agen AI mengubahnya menjadi draft. Ia tidak punya izin menulis apa pun, hanya menyiapkan.",
        "Bot membalas dengan tombol untuk setiap entri: simpan, edit, atau batal. Kalau beberapa entri datang bersamaan, cukup satu tombol \"simpan semua\".",
        "Menekan simpan akan membuat approval yang diperiksa (pemilik benar, chat benar, belum kedaluwarsa) lalu ditandatangani dengan key Ed25519.",
        "Worker terpisah memverifikasi tanda tangan, hash dari penulisan yang direncanakan, dan workbook tujuan, lalu menulis ke Google Sheets, membaca ulang barisnya, dan mencatatnya di ledger.",
        "Pesan berisi tombol tadi otomatis berubah menjadi keterangan bahwa entri sudah tersimpan. Dari tombol ditekan sampai baris muncul butuh sekitar lima detik, sebagian besar untuk API Google.",
      ],
    },
    hardParts: [
      {
        name: "Relay yang diam-diam timeout",
        text: "Agen dan konektor Telegram berkomunikasi lewat relay WebSocket, dan awalnya setiap koneksi timeout setelah 30 detik tanpa error apa pun. Ternyata penyebabnya sepele: pesan dikirim sebagai JSON tanpa newline di akhir, padahal sisi seberangnya hanya memproses baris yang lengkap. Saya membuktikannya dengan test lokal di transport yang asli (versi lama gagal 4 dari 4, versi yang sudah di-patch lolos 4 dari 4) sebelum memindahkan production.",
      },
      {
        name: "Kena rate limit Google",
        text: "Mencatat 17 transaksi sekaligus membuat saya menabrak quota Google Sheets (HTTP 429). Sekarang proses baca di-retry dengan jeda yang makin panjang, proses tulis tidak pernah di-retry secara membabi buta, dan baris yang sudah ditulis tapi belum bisa dikonfirmasi ditandai tidak pasti lalu dicek dengan membaca sel tersebut di putaran berikutnya. Saya juga memangkas jumlah API call per transaksi dari sekitar 14 menjadi sekitar 5.",
      },
      {
        name: "Tidak boleh ada yang tercatat dua kali",
        text: "Tombol yang tertekan dua kali, service yang restart, dan AI yang mengulang draft lama semuanya benar-benar terjadi. Ledger menolak apa pun yang sudah pernah dicatat, perubahan budget hanya diterapkan kalau nilai lamanya masih sama dengan yang terakhir dilihat worker, dan entri yang mirip dengan entri terbaru ditandai sebelum saya menyetujuinya. Saya sengaja menguji double tap dan restart di tengah alur.",
      },
      {
        name: "Aman untuk dipindah, aman untuk dibatalkan",
        text: "Setiap bagian berjalan sebagai user-nya sendiri dengan service yang di-sandbox. Workbook test dan production dikunci berdasarkan hash, jadi approval yang dibuat untuk salah satunya akan ditolak oleh yang lain. Rollback cukup satu perintah, dan server hanya menerima SSH key.",
      },
    ],
    outcome: [
      "Arunika sudah menulis ke workbook keuangan saya yang asli sejak 31 Oktober 2026 dan mencatat 18 transaksi di hari penuh pertamanya. Belum ada satu pun yang tercatat dua kali, termasuk saat dua insiden yang sempat terjadi.",
      "Salah satu insiden itu jadi pelajaran favorit saya: sesi chat yang berlangsung melewati tengah malam terus memakai tanggal hari sebelumnya. Solusinya bukan instruksi yang lebih ketat untuk AI, melainkan memberinya tanggal yang sebenarnya dan aktivitas 36 jam terakhir di setiap pesan.",
    ],
    lessons: [
      "Aturan yang ditulis untuk AI bukan jaminan. Apa pun yang penting harus ditegakkan lewat kode.",
      "Uji patch lewat service yang asli, bukan secara manual, karena sandbox tempatnya berjalan punya perilaku yang berbeda.",
      "Jadikan jalur aman sebagai default: kalau ada yang tidak jelas, sistem berhenti dan bertanya, bukan langsung menulis.",
    ],
    links: [],
  },
  {
    slug: "coffebar",
    name: "CoffeBar",
    tagline: "Sistem manajemen coffee shop",
    logo: { src: "/projects/coffebar-mark.svg", bg: "#F3E9DC" },
    intro:
      "Aplikasi manajemen untuk usaha sampingan kopi kecil-kecilan saya. Aplikasi ini menjalankan kasir, melacak setiap batch bahan secara FIFO, dan menutup buku sesuai siklus gajian saya, jadi setiap bulan saya tahu apakah usaha ini benar-benar untung.",
    facts: [
      { label: "Periode", value: "Juli sampai Agustus 2026" },
      { label: "Peran", value: "Solo, dibuat untuk usaha sampingan saya sendiri" },
      { label: "Status", value: "Dipakai pribadi, bukan komersial" },
      { label: "Pengguna", value: "Saya sendiri, untuk teman dan rekan kerja di kantor" },
    ],
    problem: [
      "CoffeBar berawal dari kerja sampingan: saya mulai jualan kopi, kebanyakan untuk diri sendiri dan teman-teman di kantor. Skalanya kecil, tapi ada uang sungguhan yang keluar masuk.",
      "Semuanya tercampur di Google Sheet yang sama dengan pengelolaan keuangan pribadi saya. Penjualan, pembelian bahan, dan pengeluaran pribadi bercampur jadi satu, sehingga saya tidak bisa tahu apakah jualan kopi ini untung, dan saya terus belanja stok hanya berdasarkan perkiraan. Ada bulan-bulan yang berakhir dengan sisa stok terlalu banyak dari bulan sebelumnya.",
    ],
    flow: {
      title: "Perjalanan satu pesanan",
      steps: [
        "Pesanan dibuat di kasir dengan status pending.",
        "Bahan-bahan di resepnya langsung di-reserve, jadi stok yang terlihat tersedia adalah stok fisik dikurangi yang sudah dibutuhkan pesanan lain.",
        "Saat pesanan selesai, satu database transaction melepas reservasi dan mengambil bahan dari batch paling lama terlebih dahulu.",
        "Biaya riil dari batch-batch tersebut disimpan bersama penjualannya, jadi profit dihitung dari harga bahan yang sebenarnya, bukan rata-rata.",
      ],
    },
    features: [
      { name: "Pembukuan sesuai siklus gajian", text: "Satu bulan dihitung dari tanggal 28 sampai 27, mengikuti payday saya sebagai pemilik, sehingga bulan usaha sejalan dengan cara saya merencanakan keuangan pribadi." },
      { name: "Cek kas harian", text: "Di akhir shift, uang di laci kasir dicocokkan dengan penjualan yang tercatat, dan selisihnya dibukukan sebagai penyesuaian alih-alih hilang begitu saja." },
      { name: "Bahan terbuang dihitung rugi", text: "Bahan yang basi atau tumpah dicatat sesuai biaya FIFO-nya dan dikurangkan dari profit bulan itu." },
      { name: "Sisa porsi", text: "Untuk setiap menu, aplikasi menghitung berapa cup lagi yang masih bisa dibuat berdasarkan bahan yang paling cepat habis, lalu menampilkannya di kasir." },
      { name: "Estimasi pesanan besar", text: "Sebelum menerima pesanan dalam jumlah besar, saya bisa mengecek apakah stoknya cukup dan berapa biaya untuk membuatnya." },
      { name: "Penasihat AI", text: "Gemini membaca data penjualan dan stok yang sebenarnya untuk menjelaskan profit bulan ini dan memprediksi apa yang perlu dibeli untuk 30 hari ke depan. Prompt dipindai dari upaya injection, dibatasi hanya untuk topik coffee shop, dan jawabannya disanitasi. Fitur ini hanya berjalan saat diminta dan di-cache selama satu jam untuk menghemat quota." },
    ],
    hardParts: [
      {
        name: "Angka yang harus presisi",
        text: "Perhitungan biaya FIFO dan reservasi stok menjadi dasar semua laporan di aplikasi, jadi kesalahan kecil akan menjalar ke mana-mana. Setiap pesanan yang selesai diproses dalam satu Prisma transaction: stok, biaya, dan penjualan tersimpan semuanya, atau tidak sama sekali.",
      },
      {
        name: "Pemakaian nyata tidak pernah persis sesuai resep",
        text: "Pemakaian sebenarnya kadang sedikit lebih sedikit dari resep, kadang lebih banyak. Penyesuaian stok saya pisahkan menjadi koreksi dan bahan yang benar-benar terbuang, sehingga catatan tetap mengikuti kenyataan tanpa menyembunyikan kerugian di balik koreksi.",
      },
      {
        name: "Tumbuh bersama usahanya",
        text: "Tidak pernah ada kegagalan besar, kebanyakan berupa celah: momen ketika saya butuh sesuatu yang belum bisa dilakukan aplikasinya. Saya menambah fitur saat kebutuhan nyata muncul, dan dari situlah fitur estimasi dan pelacak konsumsi staf lahir. Sambil jalan, saya memindahkan frontend ke TanStack Query dan Formik dengan struktur folder berbasis fitur supaya tetap mudah dikelola.",
      },
    ],
    outcome: [
      "Sekarang setiap bulan saya tahu apakah usaha kopi ini untung atau rugi, terpisah dari keuangan pribadi saya.",
      "Stok dibeli berdasarkan pemakaian sebenarnya, bukan tebakan, jadi sisa dari bulan sebelumnya tetap sedikit dan tidak menumpuk.",
    ],
    lessons: [
      "Bangun untuk kebutuhan yang ada sekarang, dan biarkan produknya tumbuh saat kebutuhan baru muncul.",
      "Kalau menyangkut uang, database transaction itu sendiri adalah fiturnya: semua atau tidak sama sekali.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/hanfauzi/coffe-bar" }],
  },
];
