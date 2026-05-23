import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaTooth, FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from 'react-icons/fa'
import { treatments } from '../data/treatmentsData.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const location = useLocation()
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll)
  }, [])
  useEffect(() => { setOpen(false); setMegaOpen(false) }, [location.pathname])

  const links = [
    { to:'/', label:'Home' },
    { to:'/about', label:'About' },
    { to:'/treatments', label:'Treatments', mega:true },
    { to:'/team', label:'Our Team' },
    { to:'/gallery', label:'Gallery' },
    { to:'/blog', label:'Blog' },
    { to:'/contact', label:'Contact' }
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="bg-navy text-white text-center text-xs md:text-sm py-2 px-4">
        <span className="text-gold">✦</span> Now Open in Colombo 07 — Accepting New Patients. <a href="tel:+94111234567" className="underline ml-1">Call +94 11 123 4567</a>
      </div>
      <div className={`transition-all ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-soft' : 'bg-white/95'}`}>
        <div className="container-x flex items-center justify-between py-4 px-4">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-navy flex items-center justify-center text-white group-hover:scale-110 transition">
              <FaTooth />
            </div>
            <div>
              <div className="font-display text-xl font-bold text-navy leading-none">ColomboSmile</div>
              <div className="text-[10px] tracking-[0.3em] text-muted uppercase">Dental Hospital</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map(l => l.mega ? (
              <div key={l.to} className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
                <NavLink to={l.to} className={({isActive}) => `flex items-center gap-1 text-sm font-medium ${isActive ? 'text-teal' : 'text-textdark hover:text-teal'}`}>
                  {l.label} <FaChevronDown className="text-[10px]" />
                </NavLink>
                {megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    <div className="bg-white shadow-soft rounded-2xl p-6 grid grid-cols-3 gap-4 w-[640px]">
                      {treatments.map(t => {
                        const Icon = t.icon
                        return (
                          <Link key={t.slug} to={`/treatments/${t.slug}`} className="flex items-start gap-3 p-3 rounded-xl hover:bg-bglight transition">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal/15 to-navy/10 flex items-center justify-center text-teal flex-shrink-0"><Icon /></div>
                            <div>
                              <div className="text-sm font-semibold text-navy">{t.title}</div>
                              <div className="text-xs text-muted line-clamp-1">{t.short}</div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive}) => `text-sm font-medium ${isActive ? 'text-teal' : 'text-textdark hover:text-teal'}`}>{l.label}</NavLink>
            ))}
          </nav>

          <Link to="/contact" className="hidden lg:inline-flex btn-teal !py-2.5 !px-5 text-sm">Book Appointment</Link>
          <button className="lg:hidden text-2xl text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <FaTimes/> : <FaBars/>}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-white border-t animate-fade-up">
            <div className="px-4 py-4 flex flex-col gap-2">
              {links.map(l => (
                <NavLink key={l.to} to={l.to} end={l.to==='/'} className={({isActive}) => `py-2 font-medium ${isActive ? 'text-teal' : 'text-textdark'}`}>{l.label}</NavLink>
              ))}
              <Link to="/contact" className="btn-teal justify-center mt-2">Book Appointment</Link>
              <a href="tel:+94111234567" className="flex items-center justify-center gap-2 text-navy py-2"><FaPhoneAlt/> +94 11 123 4567</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
