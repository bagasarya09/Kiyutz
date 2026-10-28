import { ArrowUpIcon, WhatsAppIcon } from '../icons'
import { WHATSAPP_URL } from '../../data/site'

/** Tombol WhatsApp yang melebar saat di-hover (kanan bawah). */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      aria-label="Chat WhatsApp"
      className="group fixed bottom-6 right-6 z-[65] flex h-14 items-center rounded-full bg-whatsapp px-[19px] text-white shadow-wa-float transition-all duration-300 ease-smooth hover:-translate-y-1 hover:gap-2.5 hover:bg-whatsapp-active"
    >
      <WhatsAppIcon className="h-[25px] w-[25px]" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-[15px] font-semibold opacity-0 transition-all duration-300 ease-smooth group-hover:max-w-[150px] group-hover:opacity-100">
        Chat kami
      </span>
    </a>
  )
}

/** Tombol kembali ke atas (kiri bawah), muncul setelah scroll 600px. */
export function BackToTop({ show }) {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Kembali ke atas"
      className={`fixed bottom-6 left-6 z-[65] grid h-[46px] w-[46px] place-items-center rounded-full border border-hairline bg-surface-card text-muted shadow-card transition-all duration-300 ease-smooth hover:border-primary hover:text-primary
        ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'}`}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </button>
  )
}