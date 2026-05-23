import { useEffect, useState } from 'react'
export default function ScrollProgress() {
  const [w, setW] = useState(0)
  useEffect(() => {
    const f = () => {
      const h = document.documentElement
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setW(p)
    }
    window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f)
  }, [])
  return <div className="fixed top-0 left-0 h-[3px] bg-teal z-[60] transition-all" style={{ width: `${w}%` }} />
}
