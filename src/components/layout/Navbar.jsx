import { useState } from 'react'
import { Brand } from '../common/Brand'
import { MobileSheet } from './MobileSheet'
import { ChatIcon, MenuIcon, WhatsAppIcon } from '../icons'
import { NAV_LINKS, WHATSAPP_URL } from '../../data/site'

export function Navbar({ scrolled, activeId }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={`sticky top-0 z-[60] bg-canvas/[.82] backdrop-blur-[14px] border-b transition-all
        ${scrolled ? 'border-hairline shadow-nav' : 'border-transparent'}`}>
        <div className="container-x flex h-[72px] items-center justify-between gap-5">
          <Brand href="#beranda" />

          <nav className="hidden gap-[26px] text-[15px] font-semibold md:flex">
            {NAV_LINKS.map((l) => {
              const active = activeId === l.href.slice(1)
              return (
                <a key={l.href} href={l.href}
                  className={`group relative py-1.5 transition-colors ${active ? 'text-primary' : 'text-muted hover:text-ink'}`}>
                  {l.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 rounded bg-primary transition-all duration-300 ease-smooth
                    ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href={WHATSAPP_URL} className="btn btn-wa btn-sm">
              <WhatsAppIcon /> Pesan
            </a>
            <button onClick={() => setOpen(true)} aria-label="Buka menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-surface-card md:hidden">
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileSheet open={open} onClose={() => setOpen(false)} />
    </>
  )
}