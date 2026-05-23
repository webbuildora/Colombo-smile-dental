import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
export default function ServiceCard({ t }) {
  const Icon = t.icon
  return (
    <Link to={`/treatments/${t.slug}`} className="glow-card group block bg-white rounded-2xl p-7 shadow-soft card-hover relative">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition">
        <Icon/>
      </div>
      <h3 className="font-display text-xl text-navy mb-2">{t.title}</h3>
      <p className="text-sm text-muted mb-4">{t.short}</p>
      <span className="text-teal text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn More <FaArrowRight className="text-xs"/></span>
    </Link>
  )
}
