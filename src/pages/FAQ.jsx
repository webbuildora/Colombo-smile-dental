import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import { faqs } from '../data/faqData.js'

export default function FAQ() {
  const cats = Object.keys(faqs)
  const [tab, setTab] = useState(cats[0])
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Answers to the questions our patients ask most."/>
      <section className="section">
        <div className="container-x max-w-3xl">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map(c => <button key={c} onClick={()=>setTab(c)} className={`px-5 py-2 rounded-full text-sm transition ${tab===c ? 'bg-navy text-white' : 'bg-bglight text-navy hover:bg-teal hover:text-white'}`}>{c}</button>)}
          </div>
          <FAQAccordion items={faqs[tab]}/>
          <div className="text-center mt-12">
            <p className="text-muted mb-4">Still have questions?</p>
            <Link to="/contact" className="btn-teal">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
