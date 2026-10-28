import { Brand } from '../common/Brand'
import { CloseIcon } from '../icons'
import { NAV_LINKS } from '../../data/Site'

export function MobileSheet({ open, onClose }) {
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className={`fixed inset-0 z-[70] bg-ink/50 transition-opacity duration-300
        ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div className={`absolute inset-y-0 right-0 flex w-[min(320px,86vw)] flex-col gap-1.5 bg-canvas p-6
        transition-transform duration-[400ms] ease-smooth ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="mb-3 flex items-center justify-between">
          <Brand as="span" size="sm" />
          <button onClick={onClose} aria-label="Tutup menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-muted">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={onClose}
            className="rounded-md px-3 py-3.5 font-semibold text-body transition-colors hover:bg-primary-tint hover:text-primary-active">
            {l.label}
          </a>
        ))}
      </div>
    </div>
  )
}