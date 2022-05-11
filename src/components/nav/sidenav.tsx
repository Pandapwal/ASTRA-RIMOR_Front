import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { name, version } from '../../../package.json'

import './sidenav.css'

import bg from '../../assets/images/v_m_c.png'

type SidenavProps = {
  theme?: string,
  titleSlice?: number
}

export default function Sidenav({ theme = 'normal', titleSlice = 0 }: SidenavProps) {
  const [toggled, setToggled] = useState<boolean>(false)
  const [brand, setBrand] = useState<string>('Brand')
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
      case '/experience':
        setActive('experience')
        break
      case '/contact':
        setActive('contact')
        break
      default:
        setActive('404')
        break
    }
  },[location])

  useEffect(() => {
    if (titleSlice > 0)
      setBrand(name.replace('_', ' '))
  },[])

  return (
    <div className='sidenav'>
      <nav className={`d-flex flex-column p-3 ${theme}-theme ${toggled?'toggled':''}`}
      style={{background: `linear-gradient(#00000080 80%,#000000D0), url(${bg})`}}>
        <h2 className='py-2 text-uppercase'>{brand}</h2>

          <div className='nav-link-container my-2 overflow-hidden'>
            <Link to='/' className={`${active==''?'active':''}`} onClick={() => setToggled(false)}>Accueil</Link>
            <div className={`nav-link-effect ${active==''?'active':''}`} data-title='ACCUEIL'></div>
          </div>
          <div className='nav-link-container my-1 overflow-hidden'>
            <Link to='/portfolio' className={active=='portfolio'?'active':''} onClick={() => setToggled(false)} >Portfolio</Link>
            <div className={`nav-link-effect ${active=='portfolio'?'active':''}`} data-title='PORTFOLIO'></div>
          </div>
          <div className='nav-link-container my-1 overflow-hidden'>
            <Link to='/experience' className={active=='experience'?'active':''} onClick={() => setToggled(false)} >Expérience</Link>
            <div className={`nav-link-effect ${active=='autre'?'active':''}`} data-title='EXPÉRIENCE'></div>
          </div>
          <div className='nav-link-container my-1 overflow-hidden'>
            <Link to='/contact' className={active=='contact'?'active':''} onClick={() => setToggled(false)} >Contact</Link>
            <div className={`nav-link-effect ${active=='contact'?'active':''}`} data-title='CONTACT'></div>
          </div>
        
        <div className='d-flex col justify-content-center align-items-center p-3'>
          <a href='https://github.com/Pandapwal' className='github link-icon' onClick={() => setToggled(false)}><i className='fa-brands fa-github fa-2xl'></i></a>
          {/* <a href='/' className='twitter link-icon' onClick={() => setToggled(false)}><i className='fa-brands fa-twitter fa-2xl'></i></a> */}
          <a href='https://www.instagram.com/astra_rimor' className='instagram link-icon' onClick={() => setToggled(false)}><p className='icon-container m-0'><i className='fa-brands fa-instagram fa-2xl'></i></p></a>
          <a href='https://www.linkedin.com/in/théo-scotton/' target='_blank' className='linkedin link-icon' onClick={() => setToggled(false)}><i className='fa-brands fa-linkedin-in fa-2xl'></i></a>
        </div>

        <div className='d-flex flex-row mt-auto sidenav-footer'>
          <div className='col'>
            <p className='m-0 text-muted fs-small'>
              &#169;2022 -&nbsp;
              <Link to={'/'} className='fw-600 p-0' onClick={() => setToggled(false)}>
                ASTRA RIMOR
              </Link>
              <br/>tous droits réservés
            </p>
          </div>
          <div className='d-flex justify-content-center'>
            <p className='m-0 text-muted fs-small'>
              <Link to={'/notes-de-mise-a-jour'} className='fw-600 p-0' onClick={() => setToggled(false)}>
                {version}
              </Link>
              <br/>version
            </p>
          </div>
        </div>
      </nav>
      <div className={`sidenav-toggler py-3 ${toggled?'toggled':''}`}>
        <h4 className='p-2 mx-0 fw-300 sidenav-toggler-title' onClick={() => setToggled(!toggled)}>
          <i className='fa-solid fa-bars fa-sm me-3'></i>MENU
        </h4>
      </div>
    </div>
  )
}
