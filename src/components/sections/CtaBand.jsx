import { Reveal } from '../common/Reveal'
import { WhatsAppIcon } from '../icons'
import { WHATSAPP_URL } from '../../data/Site'

export function CtaBand() {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-active p-8 text-center text-white md:p-[60px]">
          {/* Lingkaran dekoratif di pojok kiri atas */}
          <div className="pointer-events-none absolute -left-20 -top-[150px] h-[340px] w-[340px] rounded-full bg-white/[.12]" />

          <div className="relative z-[1]">
            <h2 className="mb-3.5 text-[26px] font-extrabold text-white md:text-[34px]">
              Lagi pengen ngemil?
            </h2>
            <p className="mx-auto mb-7 max-w-[520px] text-[17px] opacity-95">
              Jangan tahan-tahan. Camilan favoritmu cuma sejauh satu chat. Pesan sekarang dan
              nikmati camilan fresh dari Kiyutz!
            </p>
            <a
              href={WHATSAPP_URL}
              className="btn bg-white text-whatsapp-active hover:-translate-y-0.5 hover:bg-whatsapp-soft hover:shadow-[0_10px_26px_rgba(0,0,0,.16)]"
            >
              <WhatsAppIcon /> Pesan via WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}