import { useState } from 'react'
import logo from '../logo.svg'
import '../App.css'

export default function NotFound() {
  const [count, setCount] = useState(0)

  return (
    <div className='route-container vh-100'>
      <h1 className='display-1 fw-800'>404</h1>
      <p>page introuvable</p>
    </div>
  )
}
