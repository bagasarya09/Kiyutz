const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ className = 'h-5 w-5', viewBox = '0 0 24 24', children, ...rest }) {
  return (
    <svg className={className} viewBox={viewBox} aria-hidden="true" {...rest}>
      {children}
    </svg>
  )
}


/* ---------- Ikon fitur ---------- */

export function TruckIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </Svg>
  )
}

export function MedalIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.5 13.5-1 7 4.5-2.5 4.5 2.5-1-7" />
    </Svg>
  )
}

export function LeafIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M4 20c0-8 6-14 16-14 0 10-6 14-12 14a5 5 0 0 1-4-2Z" />
      <path d="M9 16c1.5-4 4-6.5 8-8" />
    </Svg>
  )
}

export function BoltIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M13 3 5 13h6l-1 8 8-10h-6z" />
    </Svg>
  )
}

export function BoxIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2z" />
      <path d="m4 7.2 8 4.2 8-4.2M12 11.4V21" />
    </Svg>
  )
}

export function ChatIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M20 12a7.5 7.5 0 0 1-10.9 6.7L4 20l1.3-4.4A7.5 7.5 0 1 1 20 12Z" />
    </Svg>
  )
}

/* ---------- Ikon UI ---------- */

export function SearchIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.2-3.2" />
    </Svg>
  )
}

export function ArrowRightIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M5 12h13m-5-5 5 5-5 5" />
    </Svg>
  )
}

export function ArrowUpIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M12 19V6m-6 6 6-6 6 6" />
    </Svg>
  )
}

export function MenuIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  )
}

export function CloseIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  )
}

export function CartIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M3 4h2.2l2.2 11h9.6l2-8H6" />
      <circle cx="9" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </Svg>
  )
}

export function HeartIcon({ className, filled = false }) {
  const d = 'M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20Z'
  return filled ? (
    <Svg className={className} fill="currentColor">
      <path d={d} />
    </Svg>
  ) : (
    <Svg className={className} {...stroke}>
      <path d={d} />
    </Svg>
  )
}

/* ---------- Sosial media ---------- */

export function WhatsAppIcon({ className = 'h-[18px] w-[18px]' }) {
  return (
    <Svg className={className} viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.9 1 1-4.7-.3-.5c-1-1.6-1.5-3.4-1.5-5.3C4.4 9.5 9.6 4.4 16 4.4S27.6 9.5 27.6 16 22.4 24.8 16 24.8zm6.5-6.9c-.4-.2-2.1-1-2.4-1.2-.3-.1-.6-.2-.8.2s-.9 1.2-1.1 1.4c-.2.2-.4.3-.8.1-.4-.2-1.5-.6-2.9-1.8-1.1-.9-1.8-2.1-2-2.5s0-.6.2-.8c.2-.2.4-.4.5-.7.2-.2.2-.4.4-.6.1-.3 0-.5 0-.7s-.8-1.9-1.1-2.6c-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.5-.3.4-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.5 3.8 6 5.3 3.5 1.5 3.5 1 4.1.9.6-.1 2.1-.8 2.3-1.7.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.7-.4z" />
    </Svg>
  )
}

export function InstagramIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </Svg>
  )
}

export function TikTokIcon({ className }) {
  return (
    <Svg className={className} {...stroke}>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </Svg>
  )
}

/* ---------- Peta nama → komponen ----------
   Dipakai oleh data di src/data/site.js, misalnya { icon: 'truck' } */

export const ICONS = {
  truck: TruckIcon,
  medal: MedalIcon,
  leaf: LeafIcon,
  bolt: BoltIcon,
  box: BoxIcon,
  chat: ChatIcon,
}