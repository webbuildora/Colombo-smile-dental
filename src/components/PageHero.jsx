export default function PageHero({ eyebrow, title, subtitle, img }) {
  return (
    <section className="relative pt-40 pb-24 px-4 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={img || 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1600&q=80'} alt="" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 to-navy/70"/>
      </div>
      <div className="container-x relative z-10 text-center">
        {eyebrow && <span className="eyebrow text-teal">{eyebrow}</span>}
        <h1 className="font-display text-4xl md:text-6xl font-bold mt-3">{title}</h1>
        {subtitle && <p className="mt-4 text-white/80 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  )
}
