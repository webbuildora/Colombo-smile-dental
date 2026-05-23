import { Link } from 'react-router-dom'
import { FaTooth, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { treatments } from '../data/treatmentsData.js'

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-8 px-4">
      <div className="container-x grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-teal flex items-center justify-center"><FaTooth/></div>
            <div className="font-display text-xl font-bold">ColomboSmile</div>
          </div>
          <p className="text-sm text-white/70 mb-5">World-class dentistry, delivered with care in the heart of Colombo.</p>
          <div className="flex gap-3">
            {[FaFacebook,FaInstagram,FaWhatsapp,FaYoutube,FaTiktok].map((I,i)=>(
              <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-teal flex items-center justify-center transition"><I/></a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {[['/','Home'],['/about','About'],['/treatments','Treatments'],['/team','Team'],['/gallery','Gallery'],['/blog','Blog'],['/contact','Contact']].map(([to,l])=>(
              <li key={to}><Link to={to} className="hover:text-teal">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Treatments</h4>
          <ul className="space-y-2 text-sm text-white/70">
            {treatments.map(t => <li key={t.slug}><Link to={`/treatments/${t.slug}`} className="hover:text-teal">{t.title}</Link></li>)}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2"><FaMapMarkerAlt className="text-teal mt-0.5"/> No. XX, Galle Road, Colombo 03, Sri Lanka</li>
            <li className="flex gap-2"><FaPhone className="text-teal mt-0.5"/> +94 11 123 4567</li>
            <li className="flex gap-2"><FaEnvelope className="text-teal mt-0.5"/> hello@colombosmile.lk</li>
            <li className="flex gap-2"><FaClock className="text-teal mt-0.5"/> Mon–Sat: 8AM–7PM<br/>Sun: 9AM–2PM</li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-12">
        <iframe title="Map" src="https://www.openstreetmap.org/export/embed.html?bbox=79.84%2C6.90%2C79.88%2C6.94&layer=mapnik" className="w-full h-56 rounded-2xl border-0" loading="lazy"></iframe>
      </div>

      <div className="container-x mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
        <div>© 2025 ColomboSmile Dental Hospital. All Rights Reserved.</div>
        <div className="flex gap-4"><a href="#" className="hover:text-teal">Privacy Policy</a><a href="#" className="hover:text-teal">Terms</a></div>
      </div>
    </footer>
  )
}
