import { useEffect, useState } from 'react'

import PortfolioItems from '../components/portfolio/PortfolioItems'

export default function Portfolio() {

  useEffect(() => {
    document.title = 'ASTRA RIMOR / Portfolio'
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container mv-100'>
      <PortfolioItems />
    </div>
  )
}