import { useEffect, useState } from 'react'
// import CodingExperience from '../components/experience/CodingExperience'
// import ExperienceCompass from '../components/experience/ExperienceCompass'
// import ExperienceArena from '../components/experience/ExperienceArena'
import ExperienceMap from '../components/experience/ExperienceMap'

export default function Experience() {
  useEffect(() => {
    document.title = 'ASTRA RIMOR / Expérience'
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container vh-100'>
      {/* <ExperienceCompass/> */}
      {/* <CodingExperience /> */}
      {/* <ExperienceArena /> */}
      <ExperienceMap />
    </div>
  )
}
