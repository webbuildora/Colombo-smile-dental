import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'

const items = [
  { cat:'Clinic', img:'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80' },
  { cat:'Smiles', img:'https://images.unsplash.com/photo-1581585504302-a83bf3a2c5a4?w=800&q=80' },
  { cat:'Treatments', img:'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80' },
  { cat:'Team', img:'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80' },
  { cat:'Clinic', img:'https://images.unsplash.com/photo-1588776813677-77aaf5595b83?w=800&q=80' },
  { cat:'Smiles', img:'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=800&q=80' },
  { cat:'Treatments', img:'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80' },
  { cat:'Team', img:'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80' },
  { cat:'Clinic', img:'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80' },
  { cat:'Smiles', img:'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80' },
  { cat:'Team', img:'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=80' },
  { cat:'Treatments', img:'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80' }
]
const cats = ['All','Clinic','Smiles','Treatments','Team']

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const filtered = filter === 'All' ? items : items.filter(i => i.cat === filter)
  return (
    <>
      <PageHero eyebrow="Gallery" title="Inside Our Clinic" subtitle="A glimpse into our space, our team, and our work."/>
      <section className="section">
        <div className="container-x">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {cats.map(c => (
              <button key={c} onClick={()=>setFilter(c)} className={`px-5 py-2 rounded-full text-sm transition ${filter===c ? 'bg-navy text-white' : 'bg-bglight text-navy hover:bg-teal hover:text-white'}`}>{c}</button>
            ))}
          </div>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
            {filtered.map((it,i) => (
              <button key={i} onClick={()=>setLightbox(it.img)} className="block w-full mb-5 break-inside-avoid overflow-hidden rounded-2xl shadow-soft group">
                <img src={it.img} alt={it.cat} loading="lazy" className="w-full group-hover:scale-105 transition duration-700"/>
              </button>
            ))}
          </div>
        </div>
      </section>
      {lightbox && (
        <div className="fixed inset-0 z-[90] bg-navy/90 backdrop-blur p-6 flex items-center justify-center" onClick={()=>setLightbox(null)}>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-full rounded-2xl"/>
        </div>
      )}
    </>
  )
}
