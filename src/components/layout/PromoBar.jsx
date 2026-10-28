import { TruckIcon } from '../icons'

export function PromoBar() {
  return (
    <div className="flex items-center justify-center gap-2.5 bg-primary-soft px-4 py-2.5 text-center text-[13px] font-semibold text-primary-active">
      <TruckIcon className="h-[17px] w-[17px] flex-none" />
      <span><b>Gratis ongkir</b> min. pembelian Rp50.000 — khusus area kota</span>
    </div>
  )
}