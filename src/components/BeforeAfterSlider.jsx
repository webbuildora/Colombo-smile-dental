import { useState, useRef } from 'react'
export default function BeforeAfterSlider({ before, after, label }) {
  const [pos, setPos] = useState(50)
  const ref = useRef(null)
  const drag = (clientX) => {
    const r = ref.current.getBoundingClientRect()
    const p = ((clientX - r.left) / r.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }
  return (
    <div className="ba-wrap shadow-soft" ref={ref}
      onMouseMove={e => e.buttons === 1 && drag(e.clientX)}
      onTouchMove={e => drag(e.touches[0].clientX)}>
      <img src={before} alt="Before" className="w-full h-72 object-cover" loading="lazy"/>
      <div className="ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src={after} alt="After" className="w-full h-72 object-cover" loading="lazy"/>
      </div>
      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow-soft flex items-center justify-center text-teal font-bold">⇆</div>
      </div>
      <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-navy">{label}</div>
      <div className="absolute top-3 left-3 bg-navy/80 text-white px-3 py-1 rounded-full text-xs">Before</div>
      <div className="absolute top-3 right-3 bg-teal text-white px-3 py-1 rounded-full text-xs">After</div>
      <input type="range" min="0" max="100" value={pos} onChange={e=>setPos(+e.target.value)} className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"/>
    </div>
  )
}
