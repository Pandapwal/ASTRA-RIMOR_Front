import { useState } from 'react'
import logo from '../logo.svg'
import '../App.css'

export default function NotFound() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>NotFound</h1>
      </header>
    </div>
  )
}
