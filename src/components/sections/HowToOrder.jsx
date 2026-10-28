import { Reveal } from '../common/Reveal'
import { SectionHead } from '../common/SectionHead'
import { WhatsAppIcon } from '../icons'
import { STEPS, WHATSAPP_URL } from '../../data/site'

export function HowToOrder() {
  return (
    <section id="cara" className="section">
      <div className="container-x">
        <SectionHead
          title="Belanja semudah 3 langkah"
          description="Tanpa aplikasi, tanpa daftar akun. Cukup chat, semua diurus lewat WhatsApp."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} delay={i * 90}>
              <div className="group px-2.5 text-center">
                <div className="mx-auto mb-4 grid h-[58px] w-[58px] place-items-center rounded-full border-2 border-whatsapp bg-whatsapp-soft text-[22px] font-extrabold text-whatsapp-active transition-transform duration-300 ease-smooth group-hover:scale-110">
                  {step.num}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-[15px] text-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={240} className="mt-10 text-center">
          <a href={WHATSAPP_URL} className="btn btn-wa">
            <WhatsAppIcon /> Mulai Pesan Sekarang
          </a>
        </Reveal>
      </div>
    </section>
  )
}