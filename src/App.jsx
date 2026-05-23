import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import BackToTop from './components/BackToTop.jsx'
import CookieBanner from './components/CookieBanner.jsx'
import LoadingSplash from './components/LoadingSplash.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Treatments = lazy(() => import('./pages/Treatments.jsx'))
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail.jsx'))
const Team = lazy(() => import('./pages/Team.jsx'))
const Gallery = lazy(() => import('./pages/Gallery.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const FAQ = lazy(() => import('./pages/FAQ.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  useEffect(() => { const t = setTimeout(() => setLoading(false), 1500); return () => clearTimeout(t) }, [])
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  if (loading) return <LoadingSplash />

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen" />}>
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}>
            <Routes location={location}>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/treatments" element={<Treatments/>} />
              <Route path="/treatments/:slug" element={<TreatmentDetail/>} />
              <Route path="/team" element={<Team/>} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/faq" element={<FAQ/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </Suspense>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <CookieBanner />
    </>
  )
}
