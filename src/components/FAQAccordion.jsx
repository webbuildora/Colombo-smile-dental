import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
export default function FAQAccordion({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="space-y-3">
      {items.map((it, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-soft overflow-hidden">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between p-5 text-left">
            <span className="font-medium text-navy">{it.q}</span>
            <span className="text-teal">{open === i ? <FaMinus/> : <FaPlus/>}</span>
          </button>
          <div style={{ maxHeight: open===i ? 300 : 0 }} className="overflow-hidden transition-all duration-500">
            <div className="px-5 pb-5 text-muted text-sm">{it.a}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
