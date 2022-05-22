import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import './experience-map.css'

type Station = {
  name: string,
  x: number,
  y: number
}

type Line = {
  stations: Station[],
  color: string
}

type Coords2D = {
  x: number,
  y: number
}

export default function ExperienceMap() {
  const [coords, setCoords] = useState<Coords2D[]>([])
  const [lines, setLines] = useState<Line[]>([])
  const [metro, setMetro] = useState<ReactNode[]>([])
  const colors =['#F0DB4F','#8993BE','#E34C26','#F1502F']
  // ['#F0DB4F','#61DBFB','#44883E','#007ACC','#F1502F','#E34C26','#264DE4','#8993BE','#F05340']
  const experiences = [['JavaScript','ReactJS','NodeJS','TypeScript'],['Git','VSCode','Hack\'n\'plan'],['HTML5','CSS3'],['PHP','Laravel']]

  function generateStations(experiences: string[]): Station[] {
    let arr: Station[] = []
    let count = coords.map((value, index) => index)
    
    for(let i=0;i<experiences.length;i++){
      let rand = Math.floor(Math.random()*count.length)
      arr.push({name: experiences[i], x: coords[rand].x, y: coords[rand].y})
      count.splice(rand, 1)
    }

    

    return arr
  }

  function generateLines(lineCount: number): Line[] {
    let arr: Line[] = []

    experiences.forEach((value,index) => {
      let stations = generateStations(value)
      arr.push({stations: stations, color: colors[index]})
    })

    return arr
  }

  function generateMetro(stations: Station[]): ReactNode[] {
    let arr: ReactNode[] = []
    
    stations.map((station, index) => {
      let divStyle: CSSProperties = {
        top: `${station.y}%`,
        left: `${station.x}%`
      }
      let stationStyle: CSSProperties = {
        border: `solid 2px yellow`
      }
      let nameStyle: CSSProperties = {
        color: `yellow`
      }

      arr.push(
        <div key={`${index}-metro`} className='d-flex justify-content-center align-items-start position-absolute metro-station' style={divStyle}>
          <div className='me-2 pin' style={stationStyle}></div>
          <p className='m-0'  style={nameStyle}>{station.name}</p>
        </div>
      )
    })

    return arr
  }

  useEffect(() => {
    setLines(generateLines(experiences.length))
  },[coords])

  useEffect(() => {
    let tmp: Coords2D[] = []
    for (let i = 0; i <= 10; i++) {
      for (let j = 0; j < 10; j++) {
        tmp.push({x: j*10, y: i*10})
      }
    }
    setCoords(tmp)
  },[])

  return(
    <div className='d-flex justify-content-center align-items-center position-relative v-100 map'>
      <p>map</p>
      <div className='position-absolute v-80 metro'>
        {metro}
      </div>
    </div>
  )
}