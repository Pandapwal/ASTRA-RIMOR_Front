import { useState } from 'react'
import logo from '../logo.svg'
import '../App.css'

export default function Portfolio() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Portfolio</h1>
      </header>
    </div>
  )
}