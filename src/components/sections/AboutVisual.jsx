import { Reveal } from '../common/Reveal'
import { ABOUT } from '../../data/site'

/* Kanvas Figma: 572 × 535 px. Semua nilai dikonversi ke persen
   agar ikut berskala saat wadahnya mengecil. */
const PILLS = [
  { left: '0%',    top: '57.52%', width: '26.96%' },
  { left: '0%',    top: '70.86%', width: '34.37%' },
  { left: '8.85%', top: '78.09%', width: '23.84%' },
  { left: '9.41%', top: '91.03%', width: '33.70%' },
]

export function AboutVisual() {
  return (
    <Reveal
      delay={80}
      className="relative mx-auto aspect-[572/535] w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[470px] xl:max-w-[572px]"
    >
      {/* ---------- Lapisan 1: pill diagonal (paling belakang) ---------- */}
      {PILLS.map((pill, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            left: pill.left,
            top: pill.top,
            width: pill.width,
            height: '10.6%',
          }}
          className="pointer-events-none absolute z-0 origin-top-left -rotate-[33deg] rounded-full bg-primary"
        />
      ))}

      {/* ---------- Lapisan 2: blob besar berisi foto utama ---------- */}
      <div className="absolute left-[17.31%] top-[13.64%] z-10 aspect-square w-[73.95%] overflow-hidden rounded-full bg-surface-strong">
        <img
          src={ABOUT.mainImage}
          alt="Owner Kiyutz"
          width="850"
          height="850"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* ---------- Lapisan 3: lingkaran kecil + celah putih ---------- */}
      <div className="absolute left-[59.08%] top-0 z-20 aspect-square w-[40.94%] rounded-full bg-canvas p-[1.8%]">
        <div className="h-full w-full overflow-hidden rounded-full bg-surface-strong">
          <img
            src={ABOUT.subImage}
            alt="Cookies Kiyutz"
            width="470"
            height="470"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Reveal>
  )
}