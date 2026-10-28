import { Reveal } from '../common/Reveal'
import { CartIcon } from '../icons'
import { WHATSAPP_URL } from '../../data/Site'

export function HeroCard() {
  return (
    <Reveal delay={360}
      className="order-3 w-full lg:absolute lg:bottom-[-100px] lg:left-0 lg:z-[5] lg:w-[398px]">
      <article className="flex items-center gap-3.5 rounded-lg border border-hairline bg-surface-card p-3.5 shadow-card transition-transform duration-300 ease-smooth hover:-translate-y-1">
        <div className="h-20 w-[92px] flex-none overflow-hidden rounded-md bg-primary-tint">
          <img src="/images/hero-snacks.png" alt="Keripik Singkong Balado" className="w-20 h-20 object-cover" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="mb-1.5 text-[13px] font-bold uppercase tracking-[.5px]">Biji Ketapang</h3>
          <span className="mb-2 inline-block rounded-full bg-primary-soft px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.5px] text-primary-active">Terlaris</span>
          <div>
            <span className="text-[11px] text-muted">Camilan Rumahan</span>
          </div>
        </div>
        <div className="flex flex-none flex-col items-end gap-3">
          <div className="text-lg font-bold text-price">Rp18.000</div>
          <a href={WHATSAPP_URL} aria-label="Pesan Keripik Singkong"
            className="grid h-10 w-10 place-items-center rounded-full bg-primary text-white transition hover:scale-110 hover:bg-primary-active">
            <CartIcon className="h-[19px] w-[19px]" />
          </a>
        </div>
      </article>
    </Reveal>
  )
}