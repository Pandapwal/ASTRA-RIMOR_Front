import { useEffect, useState } from 'react'
import logo from '../logo.svg'
import '../App.css'

export default function Legal() {
  
  useEffect(() => {
    document.title = 'ASTRA RIMOR / Mentions légales'
    window.scrollTo(0,0)
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Legal</h1>
      </header>
    </div>
  )
}
