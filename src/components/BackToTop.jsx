import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f)
  }, [])
  if (!show) return null
  return <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"
    className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-navy text-white flex items-center justify-center hover:bg-teal transition shadow-soft"><FaArrowUp/></button>
}
