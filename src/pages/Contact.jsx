import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaCheckCircle } from 'react-icons/fa'
import { treatments } from '../data/treatmentsData.js'

export default function Contact() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', treatment:'', date:'', time:'Morning', message:'' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const set = (k,v) => setForm(f => ({...f, [k]:v}))

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Please enter your name'
    if (!/^[+0-9\s-]{7,}$/.test(form.phone)) er.phone = 'Valid phone required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) er.email = 'Valid email required'
    if (!form.treatment) er.treatment = 'Select a treatment'
    if (!form.date) er.date = 'Pick a date'
    setErrors(er)
    if (Object.keys(er).length === 0) setDone(true)
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Book Your Appointment" subtitle="Our team will confirm your appointment within 2 hours during working hours."/>
      <section className="section">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-navy mb-6">Get in Touch</h2>
            <ul className="space-y-5 mb-8">
              <li className="flex gap-4"><div className="w-11 h-11 rounded-xl bg-teal/15 text-teal flex items-center justify-center"><FaMapMarkerAlt/></div><div><div className="text-xs text-muted uppercase tracking-wider">Address</div><div className="text-navy">No. XX, Galle Road, Colombo 03, Sri Lanka</div></div></li>
              <li className="flex gap-4"><div className="w-11 h-11 rounded-xl bg-teal/15 text-teal flex items-center justify-center"><FaPhone/></div><div><div className="text-xs text-muted uppercase tracking-wider">Phone</div><a href="tel:+94111234567" className="text-navy hover:text-teal">+94 11 123 4567</a></div></li>
              <li className="flex gap-4"><div className="w-11 h-11 rounded-xl bg-teal/15 text-teal flex items-center justify-center"><FaEnvelope/></div><div><div className="text-xs text-muted uppercase tracking-wider">Email</div><a href="mailto:hello@colombosmile.lk" className="text-navy hover:text-teal">hello@colombosmile.lk</a></div></li>
              <li className="flex gap-4"><div className="w-11 h-11 rounded-xl bg-teal/15 text-teal flex items-center justify-center"><FaClock/></div><div><div className="text-xs text-muted uppercase tracking-wider">Hours</div><div className="text-navy">Mon–Sat: 8AM–7PM<br/>Sun: 9AM–2PM</div></div></li>
            </ul>
            <iframe title="Map" src="https://www.openstreetmap.org/export/embed.html?bbox=79.84%2C6.90%2C79.88%2C6.94&layer=mapnik" className="w-full h-64 rounded-2xl border-0" loading="lazy"/>
            <div className="flex gap-3 mt-6">
              {[FaFacebook,FaInstagram,FaWhatsapp,FaYoutube].map((I,i)=><a key={i} href="#" className="w-10 h-10 rounded-full bg-bglight text-navy flex items-center justify-center hover:bg-teal hover:text-white transition"><I/></a>)}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8">
            {done ? (
              <div className="text-center py-12">
                <FaCheckCircle className="text-success text-5xl mx-auto mb-4"/>
                <h3 className="font-display text-2xl text-navy mb-2">Appointment Requested</h3>
                <p className="text-muted">Thank you, {form.name}. We'll contact you shortly to confirm your appointment.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h3 className="font-display text-2xl text-navy mb-2">Request an Appointment</h3>
                <Field label="Full Name" error={errors.name}><input value={form.name} onChange={e=>set('name',e.target.value)} className="input"/></Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Phone" error={errors.phone}><input type="tel" value={form.phone} onChange={e=>set('phone',e.target.value)} className="input"/></Field>
                  <Field label="Email" error={errors.email}><input type="email" value={form.email} onChange={e=>set('email',e.target.value)} className="input"/></Field>
                </div>
                <Field label="Preferred Treatment" error={errors.treatment}>
                  <select value={form.treatment} onChange={e=>set('treatment',e.target.value)} className="input">
                    <option value="">Select…</option>
                    {treatments.map(t => <option key={t.slug} value={t.title}>{t.title}</option>)}
                  </select>
                </Field>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Preferred Date" error={errors.date}><input type="date" value={form.date} onChange={e=>set('date',e.target.value)} className="input"/></Field>
                  <Field label="Preferred Time">
                    <select value={form.time} onChange={e=>set('time',e.target.value)} className="input">
                      <option>Morning</option><option>Afternoon</option><option>Evening</option>
                    </select>
                  </Field>
                </div>
                <Field label="Message"><textarea rows={3} value={form.message} onChange={e=>set('message',e.target.value)} className="input"/></Field>
                <button className="btn-teal w-full justify-center">Request Appointment</button>
                <p className="text-xs text-muted text-center">Our team will confirm your appointment within 2 hours during working hours.</p>
              </form>
            )}
          </div>
        </div>
      </section>
      <style>{`.input{ width:100%; padding:.75rem 1rem; border:1px solid #e5e7eb; border-radius:.75rem; font-size:.9rem; outline:none; transition:border .2s; } .input:focus{ border-color:#00B4B4; }`}</style>
    </>
  )
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-navy mb-1.5 uppercase tracking-wider">{label}</label>
      {children}
      {error && <div className="text-xs text-red-500 mt-1">{error}</div>}
    </div>
  )
}
