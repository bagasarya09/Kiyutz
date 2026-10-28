export const CATEGORIES = [
  { id: 'all', label: 'Semua' },
  { id: 'Favorit-Lebaran', label: 'Favorit-Lebaran' },
  { id: 'Cemilan-Sehari-hari', label: 'Cemilan Sehari-hari' },
  { id: 'Rasa-Manis', label: 'Rasa Manis' },
  { id: 'Rasa-Gurih', label: 'Rasa Gurih' },
]

export const PRODUCTS = [
  { id: 1, name: 'Nastar', category: 'Favorit-Lebaran', weight: '200 gram',
    price: 18000, image: '/images/Visual-Full-Nastar.png', },
  { id: 2, name: 'Kastangel', category: 'Favorit-Lebaran', weight: '12 pcs',
    price: 25000, oldPrice: 31000, image: '/images/Visual-Full-Kastengel.png', badge: { label: 'Promo -20%', tone: 'promo' } },
  { id: 3, name: 'Sagu Keju', category: 'Favorit-Lebaran', weight: '200 gram',
    price: 32000, image: '/images/Visual-Full-SaguKeju.png' },
  { id: 4, name: 'Kue Kacang', category: 'Favorit-Lebaran', weight: '150 gram',
    price: 16000, image: '/images/Visual-Full-KueKacang.png' },
  { id: 5, name: 'Gabus Keju', category: 'Cemilan-Sehari-hari', weight: '15 pcs',
    price: 28000, image: '/images/Visual-Full-GabusKeju.png' },
  { id: 6, name: 'Biji Ketapang', category: 'Cemilan-Sehari-hari', weight: '180 gram',
    price: 35000, image: '/images/Visual-Full-BijiKetapang.png', badge: { label: 'Favorit', tone: 'best' } },
  { id: 7, name: 'Kripik Bawang', category: 'Cemilan-Sehari-hari', weight: '150 gram',
    price: 17000, image: '/images/Visual-Full-Kripik.png' },
  { id: 8, name: 'Kue Coklat', category: 'Rasa-Manis', weight: '150 gram',
    price: 17000, image: '/images/permen.jpg' },
]

export const formatRupiah = (v) => `Rp${v.toLocaleString('id-ID')}`