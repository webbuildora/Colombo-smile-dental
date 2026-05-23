import { useParams, Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import Reveal from '../components/Reveal.jsx'
import { treatments } from '../data/treatmentsData.js'

export default function TreatmentDetail() {
  const { slug } = useParams()
  const t = treatments.find(x => x.slug === slug)
  if (!t) return <div className="pt-40 pb-20 text-center">Not found. <Link to="/treatments" className="text-teal">Back</Link></div>
  const Icon = t.icon
  const related = treatments.filter(x => x.slug !== slug).slice(0,3)
  return (
    <>
      <PageHero eyebrow={<Link to="/treatments" className="text-teal">Treatments</Link>} title={t.title} subtitle={t.hero}/>
      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center text-2xl"><Icon/></div>
                <h2 className="font-display text-3xl text-navy">Overview</h2>
              </div>
              <p className="text-muted leading-relaxed mb-10">{t.long}</p>
              <h3 className="font-display text-2xl text-navy mb-5">Benefits</h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                {t.benefits.map((b,i)=>(<li key={i} className="flex gap-2"><FaCheckCircle className="text-teal mt-1"/><span className="text-textdark">{b}</span></li>))}
              </ul>
              <h3 className="font-display text-2xl text-navy mb-5">The Procedure</h3>
              <ol className="space-y-3 mb-10">
                {t.procedure.map((s,i)=>(
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-8 h-8 rounded-full bg-teal text-white flex items-center justify-center font-semibold flex-shrink-0">{i+1}</span>
                    <span className="text-textdark pt-1">{s}</span>
                  </li>
                ))}
              </ol>
              <h3 className="font-display text-2xl text-navy mb-5">FAQs</h3>
              <FAQAccordion items={t.faqs}/>
            </Reveal>
          </div>
          <aside className="space-y-6">
            <div className="bg-gradient-to-br from-teal to-navy text-white rounded-2xl p-7 sticky top-32">
              <h4 className="font-display text-2xl mb-3">Ready to Begin?</h4>
              <p className="text-white/80 text-sm mb-5">Book a consultation with our specialists today.</p>
              <Link to="/contact" className="bg-white text-navy px-5 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:bg-gold transition">Book Consultation <FaArrowRight/></Link>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-soft">
              <h4 className="font-display text-lg text-navy mb-4">Related Treatments</h4>
              <ul className="space-y-3">
                {related.map(r => <li key={r.slug}><Link to={`/treatments/${r.slug}`} className="text-textdark hover:text-teal text-sm flex justify-between"><span>{r.title}</span><FaArrowRight className="text-xs text-teal"/></Link></li>)}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
