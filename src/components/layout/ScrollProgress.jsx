/** Garis tipis di paling atas layar yang mengikuti posisi scroll. */
export function ScrollProgress({ progress = 0 }) {
  return (
    <div
      className="fixed left-0 top-0 z-[80] h-[3px] bg-gradient-to-r from-primary to-primary-active transition-[width] duration-100 ease-linear"
      style={{ width: `${progress}%` }}
    />
  )
}