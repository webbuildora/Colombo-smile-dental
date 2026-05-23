import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import BlogCard from '../components/BlogCard.jsx'
import { FaSearch } from 'react-icons/fa'
import { blogs } from '../data/blogData.js'

const cats = ['All','Oral Health','Cosmetic','Implants','Kids']

export default function Blog() {
  const [filter, setFilter] = useState('All')
  const [q, setQ] = useState('')
  const [limit, setLimit] = useState(6)
  let filtered = filter === 'All' ? blogs : blogs.filter(b => b.category === filter)
  if (q) filtered = filtered.filter(b => b.title.toLowerCase().includes(q.toLowerCase()))
  return (
    <>
      <PageHero eyebrow="Blog" title="Dental Tips & Insights" subtitle="Expert articles to help you take better care of your smile."/>
      <section className="section">
        <div className="container-x">
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
            <div className="flex flex-wrap gap-2">
              {cats.map(c => <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-full text-sm transition ${filter===c ? 'bg-navy text-white' : 'bg-bglight text-navy hover:bg-teal hover:text-white'}`}>{c}</button>)}
            </div>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"/>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search articles…" className="pl-11 pr-4 py-2.5 rounded-full bg-bglight text-sm w-full md:w-72"/>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.slice(0,limit).map(b => <BlogCard key={b.id} b={b}/>)}
          </div>
          {limit < filtered.length && <div className="text-center mt-12"><button onClick={()=>setLimit(l=>l+3)} className="btn-navy">Load More</button></div>}
        </div>
      </section>
    </>
  )
}
