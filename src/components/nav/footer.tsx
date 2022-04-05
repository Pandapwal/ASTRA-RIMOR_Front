import { Link } from 'react-router-dom'
import { version } from '../../../package.json'

import './footer.css'

type FooterProps = {
  theme?: string
}


export default function Footer({ theme = 'normal'}: FooterProps) {

  return (
    <footer className='d-flex justify-content-between fw-200'>
      <div className='col p-3'>
        &#169;2022 -&nbsp;
        <Link to={'/'} className='fw-600'>
          ASTRA RIMOR
        </Link>
        , tous droits réservés
      </div>
      <div className='d-flex col justify-content-center p-3'>
        <Link to={'/notes-de-mise-a-jour'} className='fw-600'>
          v{version}
        </Link>
      </div>
      <div className='d-flex col justify-content-end align-items-center p-3'>
        <Link to='/'><i className='fa-brands fa-twitter fa-xl'></i></Link>
        <Link to='/' className='mx-3'><p className='icon-container m-0'><i className='fa-brands fa-instagram fa-xl'></i></p></Link>
        <Link to='/'><i className='fa-brands fa-linkedin-in fa-xl'></i></Link>
      </div>
    </footer>
  )
}
