import { useEffect, useState } from 'react'
import logo from '../logo.svg'
import '../App.css'

export default function Portfolio() {

  useEffect(() => {
    document.title = 'ASTRA RIMOR / Portfolio'
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container vh-100'>
      <header className="App-header">
        <h1>Portfolio</h1>
      </header>
    </div>
  )
}