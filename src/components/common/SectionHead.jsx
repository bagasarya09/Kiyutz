import { Reveal } from './Reveal'

/**
 * Judul section rata tengah.
 * `title` boleh berupa string atau JSX (misalnya ada <em> di dalamnya).
 */
export function SectionHead({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-11 max-w-[640px] text-center">
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}

      <Reveal delay={60}>
        <h2 className="mb-3 text-[26px] font-bold md:text-[32px]">{title}</h2>
      </Reveal>

      {description && (
        <Reveal delay={120}>
          <p className="text-base text-muted">{description}</p>
        </Reveal>
      )}
    </div>
  )
}