import PageHero from '../components/PageHero.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { team } from '../data/teamData.js'

export default function Team() {
  return (
    <>
      <PageHero eyebrow="Our Team" title="Meet Our Dental Specialists" subtitle="Specialists with local and international qualifications."/>
      <section className="section">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {team.map(d => <Reveal key={d.name}><DoctorCard d={d}/></Reveal>)}
        </div>
      </section>
      <section className="section bg-bglight">
        <div className="container-x text-center max-w-2xl mx-auto">
          <span className="eyebrow">Standards</span>
          <h2 className="heading mt-3 mb-5">Our Clinical Standards</h2>
          <p className="text-muted">Every member of our team undergoes ongoing training in the latest dental techniques. We follow ISO-certified sterilisation protocols, evidence-based treatment guidelines, and a strict patient-safety framework — ensuring you receive care that matches the world's leading clinics.</p>
        </div>
      </section>
    </>
  )
}
