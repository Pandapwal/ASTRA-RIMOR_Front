import { useEffect, useState } from 'react'
import ExperienceGalaxy from '../components/experience/ExperienceGalaxy'

export default function Experience() {
  useEffect(() => {
    document.title = 'ASTRA RIMOR / Expérience'
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container vh-100'>
      <ExperienceGalaxy />
    </div>
  )
}
