import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaTooth, FaStar, FaMedal, FaGlobe, FaArrowRight } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden pt-32 pb-32">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
          alt="Modern dental clinic interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy/60" />
        {/* Decorative dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
        />
      </div>

      {/* Main content */}
      <div className="container-x relative z-10 px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-teal/20 border border-teal/40 rounded-full px-4 py-1.5 mb-6"
          >
            <FaTooth className="text-teal text-xs" />
            <span className="text-teal text-xs font-semibold uppercase tracking-[0.2em]">
              Premium Dental Care · Colombo
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
          >
            Colombo's Most{' '}
            <span className="text-teal relative">
              Advanced
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 200 4">
                <path d="M0 2 Q100 0 200 2" stroke="#00B4B4" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </span>{' '}
            Dental Care
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed"
          >
            International-grade treatments. Expert dentists. A clinic experience
            unlike any other — right here in the heart of Colombo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-teal">
              Book Appointment <FaArrowRight />
            </Link>
            <Link to="/treatments" className="btn-outline">
              Explore Treatments
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute -bottom-12 left-0 right-0 z-20 px-4">
        <div className="container-x">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px bg-teal/20 rounded-2xl overflow-hidden shadow-soft"
          >
            {[
              { I: FaTooth,  n: '5,000+',        l: 'Patients Treated'      },
              { I: FaStar,   n: '4.9 ★',          l: 'Google Rating'         },
              { I: FaMedal,  n: '15+ Years',      l: 'Combined Experience'   },
              { I: FaGlobe,  n: 'International',  l: 'Dental Standards'      },
            ].map((s, i) => (
              <div key={i} className="bg-white p-5 md:p-6 text-center group hover:bg-teal transition-colors duration-300">
                <s.I className="mx-auto text-2xl text-teal group-hover:text-white mb-2 transition-colors duration-300" />
                <div className="font-display text-lg md:text-2xl text-navy group-hover:text-white font-bold transition-colors duration-300">
                  {s.n}
                </div>
                <div className="text-xs text-muted group-hover:text-white/80 mt-1 transition-colors duration-300">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}