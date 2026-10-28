import { useState } from 'react'
import { Reveal } from '../common/Reveal'
import { HeartIcon } from '../icons'
import { formatRupiah } from '../../data/Products'
import { WHATSAPP_URL } from '../../data/Site'

export function ProductCard({ product, delay = 0 }) {
  const [liked, setLiked] = useState(false)
  const { name, weight, price, oldPrice, image, badge } = product

  return (
    <Reveal delay={delay}>
      <article className="group rounded-lg border border-hairline bg-surface-card p-3 transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:shadow-card">
        <div className="relative aspect-square overflow-hidden rounded-md">
          <img src={image} alt={name} loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105" />

          {badge && (
            <span className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[11px] font-bold text-white shadow-card
              ${badge.tone === 'best' ? 'bg-warning' : 'bg-primary'}`}>
              {badge.label}
            </span>
          )}

          <button onClick={() => setLiked((v) => !v)} aria-pressed={liked} aria-label={`Simpan ${name}`}
            className="absolute right-2.5 top-2.5 grid h-[34px] w-[34px] place-items-center rounded-full bg-surface-card text-primary shadow-card transition-transform hover:scale-110">
            <HeartIcon className="h-[17px] w-[17px]" filled={liked} />
          </button>
        </div>

        <div className="px-1.5 pb-1.5 pt-3.5">
          <h3 className="mb-1.5 text-base font-semibold">{name}</h3>
          <div className="mb-3.5 text-sm text-muted">{weight}</div>
          <div className="flex items-center justify-between gap-2">
            <div className="text-xl font-bold leading-tight text-price">
              {formatRupiah(price)}
              {oldPrice && (
                <small className="block text-[13px] font-normal text-muted-soft line-through">
                  {formatRupiah(oldPrice)}
                </small>
              )}
            </div>
            <a href={WHATSAPP_URL} className="btn btn-primary btn-sm">Pesan</a>
          </div>
        </div>
      </article>
    </Reveal>
  )
}