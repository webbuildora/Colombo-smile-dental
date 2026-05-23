import { FaTooth } from 'react-icons/fa'
export default function LoadingSplash() {
  return (
    <div className="fixed inset-0 z-[100] bg-navy flex flex-col items-center justify-center">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal to-gold flex items-center justify-center text-white text-4xl animate-float"><FaTooth/></div>
      <div className="font-display text-3xl text-white mt-6">ColomboSmile</div>
      <div className="text-xs tracking-[0.4em] text-teal mt-2">DENTAL HOSPITAL</div>
    </div>
  )
}
