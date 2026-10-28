
import { Reveal } from '../common/Reveal'
import { ICONS } from '../icons'
import { useCountUp } from '../../hooks/useCountUp'
import { ABOUT } from '../../data/site'
import { AboutVisual } from './AboutVisual'
console.log('ABOUT:', ABOUT)

function StatCard({ stat, delay }) {
  const Icon = ICONS[stat.icon]
  const { ref, text } = useCountUp(stat.countTo)

  return (
    <Reveal delay={delay}>
      <div
        ref={ref}
        className="h-full rounded-md border border-hairline bg-surface-card px-3 py-5 text-center transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card"
      >
        <i className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-md bg-primary-soft text-primary-active">
          <Icon className="h-[21px] w-[21px]" />
        </i>

        <b className="mb-1 block text-sm font-bold tracking-[-.2px]">
          {stat.countTo ? `${text}${stat.suffix ?? ''} ` : ''}
          {stat.label}
        </b>

        <span className="block text-xs leading-tight text-muted">{stat.note}</span>
      </div>
    </Reveal>
  )
}

export function About() {
  return (
    <section id="tentang" className="section">
      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.08fr] lg:gap-14">

        {/* ---------- Kolom kiri: dua foto lingkaran ---------- */}
        <AboutVisual />


        {/* ---------- Kolom kanan: teks ---------- */}
        <div>
          <Reveal delay={60}>
            <h2 className="mb-4 text-[26px] font-bold md:text-[28px] lg:text-[32px]">
              Dibuat dengan <em className="not-italic text-primary">cinta</em>, dari dapur ke{' '}
              <em className="not-italic text-primary">tanganmu</em>
            </h2>
          </Reveal>

          {ABOUT.paragraphs.map((text, i) => (
            <Reveal key={i} delay={120 + i * 60}>
              <p className="mb-4 text-[15px] leading-relaxed text-muted">{text}</p>
            </Reveal>
          ))}

          {/* Tanda tangan pemilik */}
          <Reveal delay={230}>
            <div className="mb-8 border-l-2 border-primary-soft pl-4">
              <b className="block text-[15px] font-bold">{ABOUT.signature.name}</b>
              <span className="text-[13px] text-muted">{ABOUT.signature.role}</span>
            </div>
          </Reveal>

          {/* Grid 4 kartu statistik */}
          <div className="grid grid-cols-2 gap-2.5 md:gap-3.5 lg:grid-cols-4">
            {ABOUT.stats.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} delay={260 + i * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}