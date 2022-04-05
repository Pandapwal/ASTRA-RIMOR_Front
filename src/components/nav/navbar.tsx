import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './navbar.css'

type NavbarProps = {
  theme?: string
}

export default function Navbar({ theme = 'normal' }: NavbarProps) {
  const [active, setActive] = useState<string>('')
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActive('')
        break
      case '/portfolio':
        setActive('portfolio')
        break
      case '/autre':
        setActive('autre')
        break
      case '/contact':
        setActive('contact')
        break
      default:
        setActive('404')
        break
    }
  },[location])

  return (
    <nav className={`${theme}-theme`}>
      <div><Link to='/'          className={active==''?'active':''}          >Accueil</Link></div>
      <div><Link to='/portfolio' className={active=='portfolio'?'active':''} >Portfolio</Link></div>
      <div><Link to='/autre'     className={active=='autre'?'active':''}     >Autre</Link></div>
      <div><Link to='/contact'   className={active=='contact'?'active':''}   >Contact</Link></div>
    </nav>
  )
}
