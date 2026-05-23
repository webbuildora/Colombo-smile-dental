import { useEffect, useState } from 'react'
import { FaStar, FaGoogle, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '../data/testimonialsData.js'

export default function TestimonialCarousel() {
  const [i, setI] = useState(0)
  useEffect(() => { const t = setInterval(() => setI(p => (p+1)%testimonials.length), 5500); return () => clearInterval(t) }, [])
  const prev = () => setI(p => (p-1+testimonials.length)%testimonials.length)
  const next = () => setI(p => (p+1)%testimonials.length)
  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-soft p-10 text-center relative">
        <FaQuoteLeft className="text-teal/20 text-5xl absolute top-6 left-6"/>
        <div className="flex justify-center gap-1 mb-4 text-gold">
          {[...Array(5)].map((_,n)=><FaStar key={n}/>)}
        </div>
        <p className="font-display text-xl md:text-2xl text-navy leading-relaxed mb-6">"{testimonials[i].text}"</p>
        <div className="font-semibold text-navy">{testimonials[i].name}</div>
        <div className="text-sm text-muted">{testimonials[i].treatment}</div>
        <div className="inline-flex items-center gap-2 mt-4 text-xs text-muted bg-bglight px-3 py-1 rounded-full"><FaGoogle className="text-teal"/> Verified Google Review</div>
      </div>
      <button onClick={prev} aria-label="Previous" className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-navy hover:bg-teal hover:text-white transition"><FaChevronLeft/></button>
      <button onClick={next} aria-label="Next" className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-soft flex items-center justify-center text-navy hover:bg-teal hover:text-white transition"><FaChevronRight/></button>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_,n)=><button key={n} onClick={()=>setI(n)} aria-label={`Slide ${n+1}`} className={`w-2 h-2 rounded-full transition ${n===i ? 'bg-teal w-8' : 'bg-navy/20'}`}/>)}
      </div>
    </div>
  )
}
