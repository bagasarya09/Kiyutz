export function Brand({ as: Tag = 'a', size = 'md', className = '', ...rest }) {
  const sizes = {
    sm: { text: 'text-[19px]', mark: 'h-[30px]'},
    md: { text: 'text-[22px]', mark: 'h-9'},
  }
  const s = sizes[size] ?? sizes.md

  return (
    <Tag
      className={`group flex items-center gap-2.5 font-extrabold tracking-[-.5px] ${s.text} ${className}`}
      {...rest}
    >
      <img
        src="/images/LogoKiyutz.png"
        alt="Logo Kiyutz"
        className={`${s.mark} w-auto transition-transform duration-500 ease-smooth group-hover:-rotate-12 group-hover:scale-110`}
      />
      <span>Kiy<em className="not-italic text-primary">utz</em></span>
    </Tag>
  )
}