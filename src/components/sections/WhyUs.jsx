// 📁 src/components/sections/WhyUs.jsx

import { useState } from 'react'
import { Reveal } from '../common/Reveal'
import { SectionHead } from '../common/SectionHead'
import { ICONS } from '../icons'
import { WHY_CARDS } from '../../data/Site'

export function WhyUs() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="keunggulan" className="section bg-surface-soft">
      <div className="container-x">
        <SectionHead
          title={<>Kenapa Pilih <em className="not-italic text-primary">Kiyutz</em>?</>}
          description="Empat alasan kenapa pelanggan terus balik lagi. Klik salah satu kartu untuk menyorotnya."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {WHY_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon]
            const isActive = activeIndex === i

            return (
              <Reveal key={card.title} delay={i * 80}>
                <button
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  className={`group flex h-full w-full items-start gap-4 rounded-lg border p-5 text-left transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card md:p-6
                    ${isActive
                      ? 'border-primary bg-primary shadow-card'
                      : 'border-hairline bg-surface-card'}`}
                >
                  <span
                    className={`grid h-[52px] w-[52px] flex-none place-items-center rounded-full transition-all duration-300 ease-smooth group-hover:-rotate-6 group-hover:scale-110
                      ${isActive ? 'bg-white text-primary' : 'bg-primary-soft text-primary-active'}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>

                  <span className="min-w-0">
                    <h3 className={`mb-1.5 text-[17px] font-semibold transition-colors ${isActive ? 'text-white' : 'text-ink'}`}>
                      {card.title}
                    </h3>
                    <p className={`text-sm transition-colors ${isActive ? 'text-white/[.86]' : 'text-muted'}`}>
                      {card.text}
                    </p>
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}