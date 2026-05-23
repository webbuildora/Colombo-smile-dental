import { FaArrowRight } from 'react-icons/fa'
export default function BlogCard({ b }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-soft card-hover group">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>
      </div>
      <div className="p-6">
        <span className="inline-block bg-teal/10 text-teal text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold">{b.category}</span>
        <h3 className="font-display text-lg text-navy mt-3 mb-2 line-clamp-2">{b.title}</h3>
        <p className="text-sm text-muted line-clamp-2 mb-4">{b.excerpt}</p>
        <div className="flex justify-between items-center text-xs text-muted">
          <span>{b.date} · {b.read}</span>
          <a href="#" className="text-teal font-medium inline-flex items-center gap-1">Read <FaArrowRight className="text-[10px]"/></a>
        </div>
      </div>
    </article>
  )
}
