import { Link } from 'react-router-dom'
import { FaCheckCircle, FaUserMd, FaMicroscope, FaHeart, FaShieldAlt, FaArrowRight, FaCalendarAlt, FaStethoscope, FaTooth, FaSmile, FaPhone } from 'react-icons/fa'
import HeroSection from '../components/HeroSection.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import DoctorCard from '../components/DoctorCard.jsx'
import BlogCard from '../components/BlogCard.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import BeforeAfterSlider from '../components/BeforeAfterSlider.jsx'
import StatsCounter from '../components/StatsCounter.jsx'
import Reveal from '../components/Reveal.jsx'
import { treatments } from '../data/treatmentsData.js'
import { team } from '../data/teamData.js'
import { blogs } from '../data/blogData.js'

export default function Home() {
  return (
    <>
      <HeroSection/>

      {/* Trust strip */}
      <section className="bg-bglight py-8 px-4 mt-12">
        <div className="container-x flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm text-navy">
          {['Affiliated with SLDA','ISO Certified Sterilisation','Digital X-Ray Technology','Certified Implantologists','Child-Friendly Clinic'].map(b => (
            <div key={b} className="flex items-center gap-2"><FaCheckCircle className="text-teal"/> {b}</div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=80" alt="Clinic interior" loading="lazy" className="rounded-2xl shadow-soft w-full"/>
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-5 rounded-2xl shadow-soft hidden md:block">
                <div className="font-display text-3xl font-bold">15+</div>
                <div className="text-xs uppercase tracking-wider">Years Excellence</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="heading mt-3 mb-5">World-Class Dentistry, Delivered in Colombo</h2>
            <p className="text-muted mb-8 leading-relaxed">ColomboSmile Dental Hospital combines cutting-edge technology with highly trained specialists to deliver dental care that meets — and exceeds — international standards. We treat every patient with precision, compassion, and respect for their time.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[{I:FaUserMd,t:'Specialist Dentists'},{I:FaMicroscope,t:'Advanced Technology'},{I:FaHeart,t:'Patient-First Care'},{I:FaShieldAlt,t:'Sterilisation Certified'}].map((v,i)=>(
                <div key={i} className="flex items-center gap-3 p-4 bg-bglight rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-teal/15 text-teal flex items-center justify-center"><v.I/></div>
                  <span className="font-medium text-navy text-sm">{v.t}</span>
                </div>
              ))}
            </div>
            <Link to="/about" className="text-teal font-medium mt-6 inline-flex items-center gap-1 hover:gap-2 transition-all">Learn More About Us <FaArrowRight className="text-xs"/></Link>
          </Reveal>
        </div>
      </section>

      {/* Treatments */}
      <section className="section bg-bglight">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Our Treatments</span>
              <h2 className="heading mt-3 mb-4">Comprehensive Care, Under One Roof</h2>
              <p className="text-muted">From routine check-ups to complex reconstructive surgery — every service delivered to the highest international standards.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map(t => <Reveal key={t.slug}><ServiceCard t={t}/></Reveal>)}
          </div>
          <div className="text-center mt-12">
            <Link to="/treatments" className="btn-navy">View All Treatments <FaArrowRight/></Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">The Process</span>
              <h2 className="heading mt-3">Your Journey to a Perfect Smile</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-teal via-gold to-teal"/>
            {[
              {I:FaCalendarAlt, t:'Book Online or Call', d:'Schedule in minutes via our online form or phone'},
              {I:FaStethoscope, t:'Initial Consultation', d:'Meet your dentist for a thorough assessment'},
              {I:FaTooth, t:'Personalised Treatment', d:'Receive expert care tailored to your needs'},
              {I:FaSmile, t:'Enjoy Your New Smile', d:'Leave with confidence and a healthy smile'}
            ].map((s,i)=>(
              <Reveal key={i} delay={i*0.1}>
                <div className="text-center relative">
                  <div className="w-14 h-14 mx-auto rounded-full bg-teal text-white flex items-center justify-center text-xl mb-4 relative z-10 shadow-soft"><s.I/></div>
                  <div className="text-xs text-gold font-bold tracking-widest mb-1">STEP {i+1}</div>
                  <h3 className="font-display text-xl text-navy mb-2">{s.t}</h3>
                  <p className="text-sm text-muted">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team preview */}
      <section className="section bg-bglight">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Our Team</span>
              <h2 className="heading mt-3 mb-4">Expert Dental Specialists</h2>
              <p className="text-muted">Specialist dentists with local and international qualifications, dedicated to your care.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-7">
            {team.slice(0,3).map(d => <Reveal key={d.name}><DoctorCard d={d}/></Reveal>)}
          </div>
          <div className="text-center mt-12"><Link to="/team" className="btn-navy">Meet the Full Team <FaArrowRight/></Link></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-12">
              <span className="eyebrow">Patient Stories</span>
              <h2 className="heading mt-3">What Our Patients Say</h2>
            </div>
          </Reveal>
          <TestimonialCarousel/>
        </div>
      </section>

      {/* Before/After */}
      <section className="section bg-bglight">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">Smile Transformations</span>
              <h2 className="heading mt-3">Real Patients, Real Results</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {b:'https://images.unsplash.com/photo-1581585504302-a83bf3a2c5a4?w=800&q=80',a:'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',l:'Veneers'},
              {b:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',a:'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',l:'Implants'},
              {b:'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&q=80',a:'https://images.unsplash.com/photo-1581585504302-a83bf3a2c5a4?w=800&q=80',l:'Whitening'}
            ].map((x,i)=><BeforeAfterSlider key={i} {...x}/>)}
          </div>
          <div className="text-center mt-12"><Link to="/gallery" className="btn-navy">View Full Gallery <FaArrowRight/></Link></div>
        </div>
      </section>

      {/* Stats counter */}
      <section className="py-20 bg-navy text-white px-4">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            {n:10000, s:'+', l:'Smiles Transformed'},
            {n:15, s:'+', l:'Specialist Dentists'},
            {n:20, s:'+', l:'Treatments Offered'},
            {n:98, s:'%', l:'Patient Satisfaction'}
          ].map((x,i)=>(
            <div key={i}>
              <div className="font-display text-4xl md:text-5xl text-teal font-bold"><StatsCounter end={x.n} suffix={x.s}/></div>
              <div className="text-sm text-white/70 mt-2">{x.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Insights</span>
              <h2 className="heading mt-3">Dental Tips & Insights</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-7">
            {blogs.slice(0,3).map(b => <Reveal key={b.id}><BlogCard b={b}/></Reveal>)}
          </div>
          <div className="text-center mt-12"><Link to="/blog" className="btn-navy">View All Articles <FaArrowRight/></Link></div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="px-4 pb-20">
        <div className="container-x bg-gradient-to-br from-teal to-navy rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ background:'radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px) 0 0/30px 30px' }}/>
          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Ready for Your Best Smile?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">Book a consultation today — we're accepting new patients in Colombo.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-white text-navy px-7 py-3 rounded-full font-medium hover:bg-gold transition">Book an Appointment</Link>
              <a href="tel:+94111234567" className="btn-outline"><FaPhone/> Call Us Now</a>
            </div>
            <div className="mt-6 font-display text-2xl text-gold">+94 11 123 4567</div>
          </div>
        </div>
      </section>
    </>
  )
}
