import { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react'
import './experience-compass.css'

export default function ExperienceCompass() {
  // const languages: string[] = [
  //   'JavaScript','TypeScript','HTML','CSS','PHP','SQL',
  //   'ReactJS','NodeJS','Laravel','Bootstrap','GIMP']
  const languages = ['EAST','SE','SOUTH','SW','WEST','NW','NORTH','NE']
  const [experience,setExperience] = useState<ReactNode[] | null>(null)
  const [angle,setAngle] = useState<number>(0)
  const [highlighted,setHighlighted] = useState<string>('')
  const widthRef = useRef<HTMLHeadingElement>(null)

  function displayExperience(list: string[]): ReactNode[] {
    let arr: ReactNode[] = []
    let offset = 150, pWidth = 100
    let width: number = widthRef.current ? widthRef.current.offsetWidth+offset : 100
    let height: number = widthRef.current ? widthRef.current.offsetHeight+offset : 100
    let radius: number = widthRef.current ? (widthRef.current.offsetWidth+offset)/2 : 100
    let angle: number = 0
    let step: number = (2*Math.PI)/list.length

    list.map((item,index) => {
      let x: number = Math.round(width/2 + radius * Math.cos(angle) - (pWidth*1.3))
      let y: number = Math.round(height/2 + radius * Math.sin(angle) - (pWidth*1.3))
      let itemStyle: CSSProperties = {
        position: 'absolute',
        // transform: `rotate(${angle*(180/Math.PI)}deg) translate(50px)`,
        top: `${y}px`,
        left: `${x}px`,
        width: `${pWidth}px`,
        height: `${pWidth}px`
      }
      arr.push(
        <p key={index} style={itemStyle} className='m-0 compass-element'>{item}</p>
      )
      angle += step
    })

    return arr
  }

  useEffect(() => {
    setExperience(displayExperience(languages))
    return
  },[widthRef.current])

  return(
    <div className='experience-compass'>
      <div ref={widthRef} className='compass'>
        <div className='testy'>
          <div className='indicator'></div>
          {experience}
        </div>
      </div>
    </div>
  )
}