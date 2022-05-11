import { useState } from 'react'
import yeetos from '../yeetos-contrast.svg'
import '../App.css'

export default function Other() {
  const [count, setCount] = useState(0)

  return (
    <div className='route-container vh-100'>
      <h1>Other</h1>
      <img src={yeetos} width='500'
      style={{border: 'solid 1px #fff'}}></img>
    </div>
  )
}
