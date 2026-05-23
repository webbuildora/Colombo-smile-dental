import { Link } from 'react-router-dom'
import { FaHandshake, FaAward, FaHeart, FaLightbulb, FaCertificate } from 'react-icons/fa'
import PageHero from '../components/PageHero.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { team } from '../data/teamData.js'

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="About ColomboSmile Dental Hospital" subtitle="A legacy of premium dental care in the heart of Colombo." img="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?w=1600&q=80"/>

      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading mt-3 mb-5">Built on a Promise of Excellence</h2>
            <p className="text-muted leading-relaxed mb-4">Founded in 2010, ColomboSmile Dental Hospital was born from a simple idea: that Sri Lankans deserve access to the same quality of dental care found in the world's leading clinics.</p>
            <p className="text-muted leading-relaxed mb-4"><strong className="text-navy">Our mission</strong> is to make world-class dentistry accessible, comfortable, and transformative for every patient.</p>
            <p className="text-muted leading-relaxed"><strong className="text-navy">Our vision</strong> is to be South Asia's most trusted name in patient-centred dental excellence.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&q=80" alt="Our story" loading="lazy" className="rounded-2xl shadow-soft"/>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bglight">
        <div className="container-x">
          <Reveal><div className="text-center mb-14"><span className="eyebrow">Core Values</span><h2 className="heading mt-3">What We Stand For</h2></div></Reveal>
          <div className="grid md:grid-cols-4 gap-6">
            {[{I:FaHandshake,t:'Integrity',d:'Honest advice, transparent pricing.'},{I:FaAward,t:'Excellence',d:'World-class clinical standards.'},{I:FaHeart,t:'Compassion',d:'Care that treats people, not just teeth.'},{I:FaLightbulb,t:'Innovation',d:'Continuous adoption of the latest technology.'}].map((v,i)=>(
              <Reveal key={i} delay={i*0.1}>
                <div className="bg-white rounded-2xl p-7 text-center card-hover shadow-soft h-full">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center text-2xl mb-4"><v.I/></div>
                  <h3 className="font-display text-xl text-navy mb-2">{v.t}</h3>
                  <p className="text-sm text-muted">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal><div className="text-center mb-14"><span className="eyebrow">Our Journey</span><h2 className="heading mt-3">Milestones</h2></div></Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 -translate-x-px top-0 bottom-0 w-px bg-teal/30"/>
            {[
              {y:'2010', t:'Founded', d:'Opened our first practice in Colombo 03.'},
              {y:'2015', t:'Expansion', d:'Added specialist suites for orthodontics and surgery.'},
              {y:'2020', t:'Technology Wing', d:'Launched fully digital workflow with 3D imaging.'},
              {y:'2024', t:'Specialist Team', d:'Welcomed internationally trained dental specialists.'}
            ].map((m,i)=>(
              <Reveal key={i} delay={i*0.1}>
                <div className={`relative pl-12 md:pl-0 mb-10 md:flex md:items-center ${i%2 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white p-6 rounded-2xl shadow-soft">
                      <div className="text-teal font-bold">{m.y}</div>
                      <div className="font-display text-xl text-navy">{m.t}</div>
                      <div className="text-sm text-muted mt-1">{m.d}</div>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal ring-4 ring-white"/>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bglight">
        <div className="container-x">
          <Reveal><div className="text-center mb-14"><span className="eyebrow">Trust</span><h2 className="heading mt-3">Certifications & Accreditations</h2></div></Reveal>
          <div className="grid md:grid-cols-4 gap-6">
            {['Sri Lanka Dental Association','ISO 9001 Certified','BDS Council Accredited','International CPD Member'].map((c,i)=>(
              <div key={i} className="bg-white rounded-2xl p-6 text-center shadow-soft">
                <FaCertificate className="text-gold text-3xl mx-auto mb-3"/>
                <div className="text-sm font-medium text-navy">{c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <Reveal><div className="text-center mb-14"><span className="eyebrow">Our Team</span><h2 className="heading mt-3">Specialists You Can Trust</h2></div></Reveal>
          <div className="grid md:grid-cols-3 gap-7">
            {team.slice(0,3).map(d => <DoctorCard key={d.name} d={d}/>)}
          </div>
          <div className="text-center mt-10"><Link to="/contact" className="btn-teal">Book a Consultation</Link></div>
        </div>
      </section>
    </>
  )
}
