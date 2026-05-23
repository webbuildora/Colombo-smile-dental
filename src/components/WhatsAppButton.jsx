import { FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'
export default function WhatsAppButton() {
  const [hover, setHover] = useState(false)
  return (
    <a href="https://wa.me/94111234567" target="_blank" rel="noreferrer"
       onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
       aria-label="Chat with us on WhatsApp"
       className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl shadow-soft animate-pulse-ring">
      <FaWhatsapp/>
      {hover && <span className="absolute right-full mr-3 whitespace-nowrap bg-navy text-white text-xs px-3 py-2 rounded-lg">Chat with us on WhatsApp</span>}
    </a>
  )
}
