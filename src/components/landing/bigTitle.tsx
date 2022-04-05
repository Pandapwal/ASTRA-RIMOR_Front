import { useEffect, useRef, useState } from 'react'

import './bigTitle.css'

type BigTitleProps = {
  upperTitle: string,
  lowerTitle: string,
  split?: boolean,
  animate?: boolean
}

export default function BigTitle({upperTitle = 'ASTRA', lowerTitle = 'RIMOR', split = false, animate = false}: BigTitleProps) {
  const[upperString, setUpperString] = useState<string[]>(upperTitle.split(''))
  const[lowerString, setLowerString] = useState<string[]>(lowerTitle.split(''))
  const[shaking, setShaking] = useState<boolean>(false)

  function randomizeLetters(title: string[]) {
    console.log('called')
    let characters: string[] = ['%#@!?','スター','звезда','stella','estrella']
    let arr: string = ''
    let index: number = Math.floor((Math.random()*4)+.5)

    arr = characters[index>4?4:index]
    setUpperString(arr.split(''))
    setShaking(true)
   
    console.log('arr : ',arr)
  }

  useEffect(() => {
    if (split === true) {
      console.log('looped')
      setUpperString(upperTitle.split(''))
      setLowerString(lowerTitle.split(''))
      // letterInterval.current = setInterval(() => {
      setInterval(() => {
        randomizeLetters(upperString)
        setTimeout(() => {
          setUpperString(upperTitle.split(''))
          setShaking(false)
        }
        ,1000)
      } 
      , 10000)
      // return (
      //   clearInterval(letterInterval.current || 0)
      // )
    }
  },[])

  return (
    <div className='d-flex flex-column position-relative big-title'>
      {upperString?.length>0&&lowerString?.length>0&&
        <>
        <h1 className={`display-1 fw-700 lh-7 ${shaking?'shadow-shake':''}`}>
          {upperString}
        </h1>
        <h1 className='display-1 contrast-font lh-7 fst-italic text-contrast text-outline-contrast'>
          {lowerString}
        </h1>
        </>
      }
    </div>
  )
}