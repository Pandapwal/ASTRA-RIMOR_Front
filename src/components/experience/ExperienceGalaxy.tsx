import { ChangeEvent, MouseEvent, CSSProperties, ReactNode, useEffect, useState } from 'react'

import './experience-galaxy.css'

import data from './experience-galaxy.json'

import stars from '../../assets/images/maintenance.png'

type Position = {
  x: number,
  y: number
}

type MagnifierRect = {
  width: number,
  height: number,
  position: Position
}

export default function ExperienceGalaxy() {
  const [galaxy, setGalaxy] = useState<ReactNode[]>([])
  const [zoom, setZoom] = useState<number>(1)
  const [position, setPosition] = useState<Position>({x: 0, y: 0})
  const [magnifier, setMagnifier] = useState<MagnifierRect>({width: 0, height: 0, position: {x: 0, y: 0}})
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)
  const values = {minOrbit: 20, maxOrbit: 500, minRevolution: 20, maxRevolution: 150}

  function generateSatellites(depth: number, data: any): ReactNode[] {
    let arr: ReactNode[] = []

    data.forEach((item: any, index: number) => {
      // let tmpOrbit = Math.floor(Math.random()*((index+1)*(100/(depth*depth))))+(50/depth)
      // let tmpRevolution = Math.floor(Math.random()*(index*(20/depth)))+(10/depth)

      let d_l_8 = data.length - 1
      let d_l_2 = 1 / data.length

      let demiOrbit = ((index+1)/data.length)*(values.maxOrbit/(depth**2.8))/2 - ((depth-1)*index*2)
      let tmpOrbit = ((index+1)/data.length) * ((values.maxOrbit*0.8) / (depth**3.2)) + ((values.maxOrbit*0.2) / (depth**2.5))
      // let tmpOrbit = demiOrbit*2
      let tmpRevolution = ((index+1)/data.length)*(values.maxRevolution/(depth**2))

      let styleOrbit = {
        '--orbit':`${tmpOrbit}px`,
        '--revolution':`${tmpRevolution}s`,
      } as CSSProperties
      let styleSat = {
        background: `${item.color}`
      } as CSSProperties

      arr.push(
        <div key={`${item.name}-${index}-${depth}`} className={`d-flex justify-content-center align-items-center position-absolute satmosphere depth-${depth}`} style={styleOrbit}>
          <div className='position-absolute sat orbit' style={{...styleOrbit, ...styleSat}}>
            {item.satellites?generateSatellites(depth+1, item.satellites):null}
          </div>
        </div>
      )
    })

    return arr.reverse()
  }

  function changeZoom(event: ChangeEvent<HTMLInputElement>) {
    let direction = Math.round(parseFloat(event.target.value)*100)/100
    setZoom(direction)
  }

  function resetGalaxy() {
    setZoom(1)
    setPosition({x: 0, y: 0})
  }

  function handleMouseMove(event: MouseEvent<HTMLDivElement>, isDragged: boolean) {
    let rect = event.currentTarget.getBoundingClientRect()
    let xPercent = ((event.clientX - rect.left)/rect.width)*100
    let yPercent = ((event.clientY - rect.top)/rect.height)*100
    if(isDragged) {
      setPosition({x: (xPercent-50)*(zoom*5)*-1, y: (yPercent-50)*(zoom*5)*-1})
    }
  }

  useEffect(() => {
    let tmp = {...magnifier}
    let x = position.x*-1/(zoom*5)+50, y = position.y*-1/(zoom*5)+50
    let mx = tmp.width/2, my = tmp.height/2
    let finalX = 0, finalY = 0

    if(mx > x) {
      finalX = mx
    } else if (x > 100-mx) {
      finalX = 100-mx
    } else {
      finalX = x
    }

    if(my > y) {
      finalY = my
    } else if (y > 100-my) {
      finalY = 100-my
    } else {
      finalY = y
    }

    tmp.position.x = finalX, tmp.position.y = finalY

    setMagnifier(tmp)
  },[position])

  useEffect(() => {
    let tmp = {...magnifier}

    tmp.width = 100 - (100*(zoom/5.5)), tmp.height = 100 - (100*(zoom/5.5))

    setMagnifier(tmp)
  },[zoom])

  useEffect(() => {
    window.scrollTo(0,0)
    setGalaxy(generateSatellites(1, data))
  },[])

  return(
    <div className='d-flex justify-content-center align-items-center position-relative v-100 galaxy'
    style={{
      background: `linear-gradient(#00000080, #00000080), url(${stars})`,
      backgroundSize: `${100+(50*(zoom/5))}%`,
      backgroundPosition: `${50 + (position.x/5)/(zoom*3)}% ${50 + (position.y/5)/(zoom*3)}%`
    }}>
      <div className='d-flex align-items-center justify-content-center position-relative v-80'>
        
        <div className='d-flex align-items-center justify-content-center position-absolute astro hw-100'
        style={{transform: `scale(${zoom}) translate(${position.x}%, ${position.y}%)`}}>
          <h1 className='m-0'>&#x1F914;</h1>
          {galaxy}
        </div>

        <div className='d-flex flex-column position-absolute scale-buttons'>
          <label className='py-2'><h3>zoom</h3></label>
          <div className='d-flex flex-column px-3'>
            <input className='zoom-slider' aria-orientation='vertical' type='range' step='0.1' value={zoom} min='0.1' max='5'
            onChange={(e) => changeZoom(e)}></input>
            <div className='d-flex flex-row w-100 justify-content-between'>
              <p>0</p>
              <p>5</p>
            </div>
          </div>
        </div>

        <div className='d-flex flex-column justify-content-center position-absolute translate-buttons'>
        <label className='py-2'><h3>position</h3></label>
          <div className='position-minimap'
          onMouseDown={() => setIsMouseDown(true)}
          onMouseUp={() => setIsMouseDown(false)}
          onMouseMove={(e) => handleMouseMove(e, isMouseDown)}
          onMouseLeave={() => setIsMouseDown(false)}>
            <div className='position-relative position-magnifier'
            style={{width: `${magnifier.width}%`, height: `${magnifier.height}%`,
                    left: `${magnifier.position.x}%`, top: `${magnifier.position.y}%`}}>
              
            </div>
          </div>
        </div>
        
        <div className='position-absolute reset-buttons py-2'>
          <button onClick={() => resetGalaxy()} className='reset-button'>recentrer</button>
        </div>
      </div>
    </div>
  )
}