import { FaLinkedin, FaInstagram } from 'react-icons/fa'
export default function DoctorCard({ d }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft card-hover group">
      <div className="aspect-[4/5] overflow-hidden bg-bglight">
        <img src={d.img} alt={d.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700"/>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl text-navy">{d.name}</h3>
        <div className="text-xs text-teal uppercase tracking-wider mt-1 mb-3">{d.title}</div>
        <p className="text-sm text-muted mb-4">{d.bio}</p>
        <div className="flex gap-3 text-navy">
          <a href="#" aria-label="LinkedIn" className="hover:text-teal"><FaLinkedin/></a>
          <a href="#" aria-label="Instagram" className="hover:text-teal"><FaInstagram/></a>
        </div>
      </div>
    </div>
  )
}
