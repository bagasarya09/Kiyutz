import { useEffect, useState } from 'react'

import { PromoBar }       from './components/layout/PromoBar'
import { Navbar }         from './components/layout/Navbar'
import { ScrollProgress } from './components/layout/ScrollProgress'
import { Footer }         from './components/layout/Footer'
import { WhatsAppFloat, BackToTop } from './components/layout/Floats'

import { Hero }        from './components/sections/Hero'
import { Products }    from './components/sections/Products'
import { About }       from './components/sections/About'
import { WhyUs }       from './components/sections/WhyUs'
import { HowToOrder }  from './components/sections/HowToOrder'
import { CtaBand }     from './components/sections/CtaBand'

const SECTION_IDS = ['beranda', 'produk', 'tentang', 'keunggulan', 'cara']

export default function App() {
  // Kata kunci diketik di Hero, tapi dipakai untuk menyaring grid di Products.
  // Karena keduanya bersaudara, state-nya harus "diangkat" ke sini.
  const [searchTerm, setSearchTerm] = useState('')

  const [scroll, setScroll] = useState({
    scrolled: false,
    progress: 0,
    showTop: false,
    activeId: 'beranda',
  })

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const max = document.body.scrollHeight - window.innerHeight

      let activeId = SECTION_IDS[0]
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop - 140) activeId = id
      })

      setScroll({
        scrolled: y > 8,
        progress: max > 0 ? (y / max) * 100 : 0,
        showTop: y > 600,
        activeId,
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <ScrollProgress progress={scroll.progress} />
      <PromoBar />
      <Navbar scrolled={scroll.scrolled} activeId={scroll.activeId} />

      <main>
        <Hero searchTerm={searchTerm} onSearch={setSearchTerm} />
        <Products searchTerm={searchTerm} />
        <About />
        <WhyUs />
        <HowToOrder />
        <CtaBand />
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop show={scroll.showTop} />
    </>
  )
}