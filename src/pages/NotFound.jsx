import { Link } from 'react-router-dom'
import { FaTooth } from 'react-icons/fa'
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-32 pb-20">
      <div className="text-center">
        <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-teal to-navy text-white flex items-center justify-center text-5xl mb-6 animate-float"><FaTooth/></div>
        <h1 className="font-display text-6xl text-navy mb-3">404</h1>
        <p className="text-xl text-navy mb-2">Oops! This page doesn't exist</p>
        <p className="text-muted mb-8">But your smile still does.</p>
        <Link to="/" className="btn-teal">Back to Home</Link>
      </div>
    </div>
  )
}
