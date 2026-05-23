import { useState, useEffect } from 'react'
export default function CookieBanner() {
  const [show, setShow] = useState(false)
  useEffect(() => { if (!localStorage.getItem('cookie-ok')) setShow(true) }, [])
  if (!show) return null
  return (
    <div className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-40 bg-white shadow-soft rounded-2xl p-5 border">
      <p className="text-sm text-textdark mb-3">We use cookies to enhance your browsing experience. By continuing, you accept our use of cookies.</p>
      <div className="flex gap-2">
        <button onClick={()=>{localStorage.setItem('cookie-ok','1'); setShow(false)}} className="bg-teal text-white px-4 py-2 rounded-full text-sm">Accept</button>
        <button onClick={()=>setShow(false)} className="text-muted px-4 py-2 text-sm">Dismiss</button>
      </div>
    </div>
  )
}
