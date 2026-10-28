import { useEffect, useRef, useState } from 'react'

/**
 * Menganimasikan angka dari 0 ke `to` saat elemen masuk viewport.
 *
 * Cara pakai:
 *   const { ref, text } = useCountUp(10000)
 *   <div ref={ref}>{text}</div>
 *
 * @param {number} to        angka tujuan
 * @param {number} duration  durasi animasi (ms)
 */
export function useCountUp(to, duration = 1400) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof to !== 'number') return

    // Hormati preferensi "kurangi animasi"
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(to)
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.unobserve(entry.target)

        let start = null
        const step = (ts) => {
          if (start === null) start = ts
          const p = Math.min((ts - start) / duration, 1)
          // ease-out cubic
          setValue(to * (1 - Math.pow(1 - p, 3)))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.5 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return { ref, text: Math.round(value).toLocaleString('id-ID') }
}