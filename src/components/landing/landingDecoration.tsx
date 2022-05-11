import { ReactNode, useState } from 'react'
import './landingDecoration.css'

export default function LandingDecoration() {
  const[lineStyle, setLineStyle] = useState<string[]>(['arrow-fly 3s cubic-bezier(0.075, 0.82, 0.5, 1) infinite'])

  function randomizeLine(lines: number): ReactNode[] {
    let arr: ReactNode[] = []

    for (let i=0; i<lines; i++) {
      let duration: number = Math.random() + 5
      let delay: number = Math.random() * 3
      let top: number = (Math.random() - 0.5) * 50
      arr.push(
        <div key={`line${i}`} className='line'
        style={{
          top: `${top}vh`,
          animationName: 'arrow-fly',
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          animationTimingFunction: 'cubic-bezier(0.075, 0.82, 0.5, 1)',
          animationIterationCount: 'infinite'
        }}>
        {/* style={{background: '#fff'}}> */}
        </div>
      )
    }

    return arr
  }

  return (
    <div className='d-flex center h-100 w-100 position-absolute landing-decoration'>
      <div className='circle pos-1 siz-1'></div>
      <div className='orbital siz-3'></div>
      <div className='orbital-big siz-4'></div>
      <div className='h-50 w-25 thin-dots pos-3 siz-2 compass extra-muted'>
        <h1 className='cardinal-text north w-100'>Développeur web</h1>
        <h1 className='cardinal-text east'>NodeJS</h1>
        <h1 className='cardinal-text south'>ReactJS</h1>
        <h1 className='cardinal-text west'>TypeScript</h1>
      </div>
      <div className='dots pos-2 siz-1'></div>
      <div className='stripes pos-4 siz-2'></div>
      <div className='line-holder'>
        {randomizeLine(Math.floor((Math.random() + 1) * 5))}
      </div>
    </div>
  )
}

// /!\ ATTENTION /!\
// this component takes parent's full size
// include it first so it is overlapped by the interactive content 