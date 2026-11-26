// Indonesian version of the home-page content in ../data.ts. Keep the facts in sync with the English file.

import type { Fact, Milestone, ProjectCopy } from "../data";
import { profile } from "../profile";

export const factsId: Fact[] = [
  { label: "Peran", value: "Fullstack Developer" },
  { label: "Domisili", value: "Tangerang Selatan, Indonesia" },
  { label: "Status", value: "Terbuka untuk kerja (remote, hybrid, atau on-site)", highlight: true },
  { label: "Bahasa", value: "Indonesia, Inggris, Arab (dasar)" },
];

export const journeyId: Milestone[] = [
  {
    period: "Jan 2026 – Sekarang",
    title: "Junior Web Developer",
    place: "Notch Creative Digital Agency, Jakarta",
    summary:
      "Saya mengerjakan seluruh stack, baik untuk platform klien maupun tools internal Notch, sebagian besar dengan NestJS, Prisma, PostgreSQL, dan Next.js.",
    highlights: [
      {
        name: "Platform donasi UNICEF Indonesia",
        text: "Salah satu dari tiga engineer yang membangun ulang platform ini, yang live pada Oktober 2026. Saya memegang login dan hak akses untuk CMS admin dan portal donatur, menghubungkan donasi sekali dan donasi rutin lewat Midtrans, Xendit, dan DOKU, serta membangun portal donaturnya sendiri, mulai dari riwayat donasi sampai achievement dan leaderboard. Saya juga memindahkan data pengguna dan media dari sistem MySQL lama tanpa ada data yang hilang, dan membuat engine popup dan survei supaya tim konten bisa menjalankan kampanye tanpa menunggu rilis.",
      },
      {
        name: "ERP internal",
        text: "Membangun modul timesheet dengan pelacakan start, pause, dan resume secara live serta ekspor ke Excel, ditambah alur persetujuan lembur tiga tingkat dari karyawan ke kepala divisi lalu ke direktur.",
      },
    ],
  },
  {
    period: "Mei – Okt 2025",
    title: "Fullstack Web Development",
    place: "Purwadhika Digital Technology School",
    summary:
      "Bootcamp intensif tempat saya belajar dari dasar sampai bisa merilis aplikasi fullstack lengkap dengan pembayaran, autentikasi, dan database sungguhan. Saya lulus sebagai Best Student Batch 33.",
    links: [
      { label: "Penghargaan", href: profile.award },
      { label: "Sertifikat", href: profile.certificate },
    ],
  },
  {
    period: "2020 – 2024",
    title: "Sarjana Hukum Keluarga Islam",
    place: "STDI Imam Syafi'i Jember",
    summary: "Lulus dengan IPK 3,73 dari 4,00 sebelum pindah ke dunia software.",
  },
];

// Keyed by project name in ../data.ts.
export const projectCopyId: Record<string, ProjectCopy> = {
  "HNF Office": {
    tagline: "Kantor virtual untuk agen AI saya",
    summary:
      "Kantor isometrik di browser tempat agen-agen AI saya bekerja secara real time. Setiap agen adalah karakter yang berjalan ke mejanya, bereaksi terhadap kejadian nyata, dan membalas chat, sementara setiap aksi yang berisiko tetap menunggu persetujuan saya.",
  },
  Arunika: {
    tagline: "Asisten keuangan AI di Telegram",
    summary:
      "Bot Telegram yang saya pakai setiap hari untuk mencatat pengeluaran dan budget langsung ke Google Sheets. AI-nya hanya boleh membuat draf; setiap penulisan ditandatangani dan diperiksa ulang oleh worker terpisah sebelum menyentuh sheet.",
  },
  CoffeBar: {
    tagline: "Sistem manajemen coffee shop",
    summary:
      "POS yang menghitung biaya stok secara FIFO, jadi profit dihitung dari batch bahan yang benar-benar terpakai. Ada juga advisor Gemini yang memperkirakan kebutuhan restock untuk 30 hari ke depan.",
  },
  "Laundry Web App": {
    tagline: "Final project bootcamp",
    summary:
      "Pemesanan laundry dengan antar-jemput, pembayaran Midtrans, dan pelacakan pesanan. Saya merancang skema PostgreSQL dan REST API di baliknya.",
    linkLabels: { "Live site": "Lihat situs" },
  },
  Tickly: {
    tagline: "Platform tiket event, mini project bootcamp",
    summary:
      "Penjualan tiket event dengan peran organizer dan peserta yang terpisah, pembayaran, notifikasi email, dan dashboard penjualan untuk organizer.",
    linkLabels: { "App code": "Kode aplikasi", "API code": "Kode API" },
  },
};
