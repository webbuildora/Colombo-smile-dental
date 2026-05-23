import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
export default function AppointmentModal({ open, onClose }) {
  const [done, setDone] = useState(false)
  if (!open) return null
  return (
    <div className="fixed inset-0 z-[80] bg-navy/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full" onClick={e=>e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-display text-2xl text-navy">Book an Appointment</h3>
          <button onClick={onClose} aria-label="Close"><FaTimes/></button>
        </div>
        {done ? <p className="text-success">Thank you! We'll be in touch shortly.</p> : (
          <form onSubmit={e=>{e.preventDefault(); setDone(true)}} className="space-y-3">
            <input required placeholder="Full Name" className="w-full p-3 border rounded-lg"/>
            <input required type="tel" placeholder="Phone" className="w-full p-3 border rounded-lg"/>
            <input required type="email" placeholder="Email" className="w-full p-3 border rounded-lg"/>
            <button className="btn-teal w-full justify-center">Request</button>
          </form>
        )}
      </div>
    </div>
  )
}
