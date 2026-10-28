import { Reveal } from '../common/Reveal'
import { ArrowRightIcon, SearchIcon, LeafIcon, MedalIcon, BoltIcon } from '../icons'

const CHIPS = [
  { Icon: LeafIcon,  title: '100% Fresh',    sub: 'Dibuat harian',  pos: 'top-[4%] left-0 lg:-left-[4%]',    d: 320 },
  { Icon: MedalIcon, title: 'Homemade',      sub: 'Batch kecil',    pos: 'top-[40%] right-0 lg:-right-[6%]', d: 400 },
  { Icon: BoltIcon,  title: 'Fast Response', sub: 'Dibalas cepat',  pos: 'bottom-[9%] left-0 lg:left-[1%]',  d: 480 },
]

export function Hero({ searchTerm, onSearch }) {
  return (
    <section id="beranda" className="relative pb-14 pt-8 lg:pb-[132px] lg:pt-11">
      <div className="container-x">
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">

          {/* Kolom kiri: teks */}
          <div className="relative z-[2] order-2 lg:order-1">
            <Reveal delay={80}>
              <h1 className="mb-[18px] max-w-[540px] text-[30px] font-extrabold leading-[1.1] tracking-[-1px] sm:text-[38px] lg:text-[52px] lg:tracking-[-1.6px]">
                Camilan Fresh Dibuat untuk <em className="not-italic text-primary">Menemani Harimu</em>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="max-w-[420px] text-base text-muted">
                Aneka keripik, cookies, kacang, dan permen buatan rumahan dipesan semudah mengirim satu chat WhatsApp.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="my-[26px] flex h-14 max-w-[410px] items-center gap-2.5 rounded-full border border-hairline bg-surface-card py-[7px] pl-5 pr-[7px] focus-within:border-primary focus-within:ring-4 focus-within:ring-primary-tint">
                <input
                  value={searchTerm}
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder="Cari camilan favoritmu…"
                  aria-label="Cari produk"
                  className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted-soft"
                />
                <span className="grid h-[42px] w-[42px] flex-none cursor-pointer place-items-center rounded-full bg-primary text-white transition hover:scale-105 hover:bg-primary-active">
                  <SearchIcon className="h-[19px] w-[19px]" />
                </span>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="flex flex-wrap gap-3">
                <a href="#produk" className="btn btn-primary">Lihat Produk <ArrowRightIcon className="h-[18px] w-[18px]" /></a>
                <a href="#cara" className="btn btn-ghost">Cara Pesan <ArrowRightIcon className="h-[18px] w-[18px]" /></a>
              </div>
            </Reveal>
          </div>

          {/* Kolom kanan: visual */}
          <div className="relative order-1 grid min-h-[360px] place-items-center lg:order-2 lg:min-h-[490px]">
            <div className="absolute aspect-square w-[min(486px,96%)] rounded-full bg-primary-tint
                            after:absolute after:inset-[26px] after:rounded-full after:border after:border-dashed after:border-primary-soft" />
            <Reveal
            delay={160}
            className="relative z-[1] mx-auto w-[210px] animate-float sm:w-[260px] lg:w-[320px] xl:w-[360px]"
            >
            <img
                src="/images/hero-snacks.png"
                alt="Aneka camilan Kiyutz"
                width="720"
                height="720"
                fetchPriority="high"
                className="h-auto w-full object-contain"
            />
            </Reveal>

            {CHIPS.map(({ Icon, title, sub, pos, d }) => (
              <Reveal key={title} delay={d}
                className={`absolute z-[3] flex items-center gap-2.5 rounded-full bg-surface-card py-[7px] pl-[7px] pr-4 shadow-card ${pos}`}>
                <i className="grid h-8 w-8 flex-none place-items-center rounded-full bg-primary-soft text-primary-active">
                  <Icon className="h-[17px] w-[17px]" />
                </i>
                <div>
                  <b className="block text-[13px] font-semibold leading-tight">{title}</b>
                  <span className="text-[11px] text-muted">{sub}</span>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}