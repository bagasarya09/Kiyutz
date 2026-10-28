export const WHATSAPP_URL = 'https://wa.me/62895327977461'

export const NAV_LINKS = [
  { href: '#beranda', label: 'Beranda' },
  { href: '#produk', label: 'Produk' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#keunggulan', label: 'Keunggulan' },
  { href: '#cara', label: 'Cara Pesan' },
]

/* ---------- TAMBAHAN untuk Langkah 9 ---------- */

export const ABOUT = {
  paragraphs: [
    'Kiyutz adalah cemilan ringan UMKM yang berasal dari jakarta dan sudah bersertifikat halal, dengan satu misi sederhana: membuat camilan rumahan yang jujur, higienis, dan bikin nagih. Setiap produk kami buat dalam batch kecil agar kesegaran dan rasanya selalu terjaga.',
    'Kami percaya memesan camilan harusnya semudah mengobrol dengan teman. Itulah kenapa seluruh pesanan Kiyutz dilayani langsung lewat WhatsApp - personal, cepat, dan ramah.',
  ],
  signature: { name: 'Andriani', role: '— Owner & CEO Kiyutz' },
  mainImage: '/images/Visual-Full-Kripik.png',
  subImage: '/images/Owner-Kiyutz.png',
  stats: [
    { icon: 'truck', countTo: 7000, suffix: '+', label: 'Pesanan', note: 'Terkirim ke seluruh Indonesia' },
    { icon: 'medal', countTo: 50,    suffix: '+', label: 'Varian',  note: 'Camilan pilihan tiap bulan' },
    { icon: 'leaf',  label: '100% Fresh',    note: 'Tanpa pengawet berbahaya' },
    { icon: 'bolt',  label: 'Fast Response', note: 'Dibalas ramah via WhatsApp' },
  ],
}

/* ---------- TAMBAHAN untuk Langkah 10 ---------- */

export const WHY_CARDS = [
  { icon: 'medal', title: 'Rasa Autentik',     text: 'Diolah dari bahan pilihan dengan resep turun-temurun yang konsisten di setiap gigitan.' },
  { icon: 'box',   title: 'Kemasan Rapi',      text: 'Dikemas aman dan cantik, cocok untuk stok sendiri maupun hampers & hadiah.' },
  { icon: 'truck', title: 'Pengiriman Cepat',  text: 'Order sebelum jam 3 sore dikirim di hari yang sama untuk area kota.' },
  { icon: 'chat',  title: 'Pesan Praktis',     text: 'Tanpa aplikasi dan tanpa daftar akun — cukup satu chat WhatsApp, pesanan beres.' },
]

/* ---------- TAMBAHAN untuk Langkah 11 ---------- */

export const STEPS = [
  { num: 1, title: 'Pilih Camilan',              text: 'Telusuri katalog dan pilih camilan favoritmu beserta jumlahnya.' },
  { num: 2, title: 'Klik “Pesan via WhatsApp”',  text: 'Ringkasan pesananmu otomatis terisi di chat WhatsApp toko kami.' },
  { num: 3, title: 'Konfirmasi & Terima',        text: 'Atur alamat & pembayaran lewat chat, camilan siap meluncur ke rumahmu.' },
]

/* ---------- TAMBAHAN untuk Langkah 13 ---------- */

export const FOOTER_COLUMNS = [
  {
    title: 'Kategori',
    links: [
      { label: 'Keripik', href: '#produk' },
      { label: 'Cookies', href: '#produk' },
      { label: 'Kacang',  href: '#produk' },
      { label: 'Permen',  href: '#produk' },
    ],
  },
  {
    title: 'Bantuan',
    links: [
      { label: 'Cara Pesan',    href: '#cara' },
      { label: 'Pengiriman',    href: '#' },
      { label: 'FAQ',           href: '#' },
      { label: 'Hubungi Kami',  href: WHATSAPP_URL },
    ],
  },
  {
    title: 'Tentang',
    links: [
      { label: 'Cerita Kami',        href: '#tentang' },
      { label: 'Keunggulan',         href: '#keunggulan' },
      { label: 'Karier',             href: '#' },
      { label: 'Kebijakan Privasi',  href: '#' },
    ],
  },
]