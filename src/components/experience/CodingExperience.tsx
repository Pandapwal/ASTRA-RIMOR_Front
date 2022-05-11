import { ReactNode, useEffect, useState } from 'react'

import './coding-experience.css'

export default function CodingExperience() {
  const [xpList, setXpList] = useState<ReactNode[] | null>()
  const languages: string[] = ['JavaScript','TypeScript','HTML','CSS','PHP','SQL']
  const frameworks: string[] = ['ReactJS','NodeJS','Laravel','Bootstrap']

  function startFerrisWheel() {
    
  }

  function generateLanguages(): ReactNode[] {
    let arr: ReactNode[] = []

    languages.map((item, index) => {
      arr.push(
        <p>{item}</p>
      )
    })

    return arr
  }

  function generateStuff(i: number): ReactNode[] {
    let arr: ReactNode[] = []
    for (let index = 0; index < i; index++) {
      arr.push(
        <p>stuff</p>
      )
    }
    return arr
  }

  useEffect(() => {
    setXpList(generateLanguages())
  },[languages])

  return(
    <div className='coding-experience'>
      <div className='perspective-container col'>
        <h1 className='display-1 fw-700'>XP</h1>
        {xpList}
        <h1>front</h1>
        <h1 style={{transform: 'translateZ(-1px)'}}>back</h1>
        {generateStuff(15)}
      </div>
      <div className='perspective-container col'>
        <h1 className='display-1 fw-700'>XP</h1>
        {xpList}
        <h1>front</h1>
        <h1 style={{transform: 'translateZ(-1px)'}}>back</h1>
        {generateStuff(15)}
      </div>
    </div>
  )
}