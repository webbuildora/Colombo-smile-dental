import PageHero from '../components/PageHero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { treatments } from '../data/treatmentsData.js'

export default function Treatments() {
  return (
    <>
      <PageHero eyebrow="Treatments" title="Our Treatments" subtitle="Comprehensive dental care delivered to international standards."/>
      <section className="section">
        <div className="container-x">
          <Reveal>
            <p className="text-muted text-center max-w-2xl mx-auto mb-14">From routine preventive care to advanced reconstructive procedures, every treatment at ColomboSmile is delivered with precision, comfort, and care.</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {treatments.map(t => <Reveal key={t.slug}><ServiceCard t={t}/></Reveal>)}
          </div>
        </div>
      </section>
    </>
  )
}
