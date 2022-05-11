import { useEffect, useState } from 'react'

// import VideoNav from '../components/landing/videoNav'
import BigTitle from '../components/landing/bigTitle'
import LandingDecoration from '../components/landing/landingDecoration'

import logo from '../logo.svg'

export default function Landing() {
  const tabs = [
    {title: 'accueil', link: '/', video: 'default', bg: 'warning'},
    {title: 'portfolio', link: '/portfolio', video: 'default', bg: 'success'},
    {title: 'autre', link: '/autre', video: 'default', bg: 'primary'},
    {title: 'contact', link: '/contact', video: 'default', bg: 'danger'}
  ]

  useEffect(() => {
    document.title = 'ASTRA RIMOR'
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container vh-100'>
      {/* <VideoNav tabs={tabs}/> */}
      <LandingDecoration />
      <BigTitle upperTitle={`ASTRA`} lowerTitle={`RIMOR`} split={true} animate={true} />
    </div>
  )
}
