import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Reveal } from '../common/Reveal'
import { ArrowRightIcon } from '../icons'
import { ProductCard } from './ProductCard'
import { CATEGORIES, PRODUCTS } from '../../data/Products'

const GAP = 20 

export function Products({ searchTerm = '' }) {
  const [category, setCategory] = useState('all')
  const trackRef = useRef(null)

  // Menandai apakah slider sudah mentok di ujung kiri / kanan
  const [edge, setEdge] = useState({ start: true, end: false })

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    return PRODUCTS.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (term === '' || p.name.toLowerCase().includes(term)),
    )
  }, [category, searchTerm])

  const updateEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft >= max - 4 })
  }, [])

  // Pantau posisi scroll & perubahan ukuran layar
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    updateEdges()
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)

    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [updateEdges])

  // Kembalikan ke awal setiap kali filter atau pencarian berubah
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    el.scrollTo({ left: 0, behavior: 'auto' })
    requestAnimationFrame(updateEdges)
  }, [category, searchTerm, updateEdges])

  /** @param {1 | -1} dir 1 = kanan, -1 = kiri */
  const slide = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('[data-card]')
    const step = card ? card.offsetWidth + GAP : el.clientWidth * 0.8
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="produk" className="section overflow-hidden">
      <div className="container-x">

        {/* ---------- Baris judul + tombol panah ---------- */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[520px]">
            <Reveal delay={60}>
              <h2 className="mb-2 text-[26px] font-bold md:text-[32px]">
                Camilan <em className="not-italic text-primary">favorit</em> pelanggan
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[15px] text-muted">
                {/* Kalimat menyesuaikan bentuk layout */}
                <span className="sm:hidden">Pilih camilan favoritmu di bawah ini.</span>
                <span className="hidden sm:inline">Geser ke samping untuk melihat semua pilihan.</span>
              </p>
            </Reveal>
          </div>

          {/* Tombol panah hanya relevan saat mode slider */}
          <Reveal delay={160} className="hidden gap-2.5 sm:flex">
            <button
              type="button"
              onClick={() => slide(-1)}
              disabled={edge.start}
              aria-label="Produk sebelumnya"
              className="icon-btn disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowRightIcon className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              onClick={() => slide(1)}
              disabled={edge.end}
              aria-label="Produk berikutnya"
              className="icon-btn disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </Reveal>
        </div>

        {/* ---------- Chip kategori ---------- */}
        <Reveal delay={200} className="no-scrollbar -mx-6 mb-6 flex gap-2.5 overflow-x-auto px-6 pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              aria-pressed={category === cat.id}
              className={`flex-none rounded-full border px-[18px] py-2 text-sm font-semibold transition-all duration-300 ease-smooth
                ${category === cat.id
                  ? 'border-primary bg-primary text-white shadow-chip'
                  : 'border-hairline bg-surface-card text-body hover:border-primary hover:text-primary'}`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        {/* ---------- Track: grid di mobile, slider mulai sm ---------- */}
        {filtered.length > 0 ? (
          <div className="relative">
            <ul
              ref={trackRef}
              className="slim-scrollbar grid grid-cols-1 gap-5 sm:-mx-6 sm:flex sm:snap-x sm:snap-mandatory sm:scroll-smooth sm:overflow-x-auto sm:px-6 sm:pb-3"
            >
              {filtered.map((product, i) => (
                <li
                  key={product.id}
                  data-card
                  className="w-full sm:w-[calc(50%-0.625rem)] sm:flex-none sm:snap-start lg:w-[calc(33.333%-0.834rem)] xl:w-[calc(25%-0.9375rem)]"
                >
                  <Reveal delay={Math.min(i, 4) * 70} className="h-full">
                    <ProductCard product={product} />
                  </Reveal>
                </li>
              ))}
            </ul>

            {/* Gradasi tepi hanya untuk mode slider */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-gradient-to-l from-canvas to-transparent transition-opacity duration-300 sm:block ${
                edge.end ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </div>
        ) : (
          <p className="rounded-lg border border-dashed border-hairline-strong py-14 text-center text-muted">
            Camilan tidak ditemukan. Coba kata kunci atau kategori lain.
          </p>
        )}
      </div>
    </section>
  )
}