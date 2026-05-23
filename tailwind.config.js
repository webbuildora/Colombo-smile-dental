/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0A1F44',
        teal: '#00B4B4',
        gold: '#C9A84C',
        bglight: '#F8FAFB',
        textdark: '#1A1A2E',
        muted: '#6B7280',
        success: '#10B981'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(10,31,68,0.15)',
        glow: '0 0 30px rgba(0,180,180,0.3)'
      },
      borderRadius: { '2xl': '1.25rem' },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 4s ease-in-out infinite'
      },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        pulseRing: { '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.6)' }, '100%': { boxShadow: '0 0 0 18px rgba(37,211,102,0)' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } }
      }
    }
  },
  plugins: []
}
