import { Brand } from '../common/Brand'
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from '../icons'
import { FOOTER_COLUMNS, WHATSAPP_URL } from '../../data/Site'

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/kiyutz_drinks_food',           Icon: InstagramIcon },
  { label: 'WhatsApp',  href: WHATSAPP_URL,  Icon: WhatsAppIcon },
]

export function Footer() {
  return (
    <footer className="bg-surface-soft pt-14">
      <div className="container-x">
        <div className="grid gap-8 pb-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

          {/* Kolom brand */}
          <div>
            <Brand as="span" />
            <p className="mt-3.5 max-w-[280px] text-sm text-muted">
              Camilan rumahan premium yang dibuat fresh setiap hari. Pesan mudah, langsung lewat WhatsApp.
            </p>

            <div className="mt-4 flex gap-2.5">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface-card text-muted transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Tiga kolom link */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-[15px] font-semibold">{col.title}</h4>
              {col.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="mb-2.5 block text-sm text-body transition-all duration-200 hover:translate-x-1 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-hairline py-5 text-center text-xs text-muted">
        <div className="container-x">
          © {new Date().getFullYear()} Kiyutz — Camilan Enak, Tinggal Chat! • Dibuat di Yogyakarta
        </div>
      </div>
    </footer>
  )
}