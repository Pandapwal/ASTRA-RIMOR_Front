import { CSSProperties, ReactNode, useEffect, useState } from 'react'
import './experience-arena.css'

type Identity = {
  name: string,
  color: string,
  icon?: string
}

type Coordinates = {
  x: number,
  y: number,
  width: number
}

type BallType = {
  startingPoint: Coordinates,
  endingPoint: Coordinates,
  identity: Identity
}

export default function ExperienceArena() {
  const specs: Identity[] = [
    {name: 'JavaScript', color: 'yellow'},
    {name: 'ReactJS', color: 'lightblue'},
    {name: 'TypeScript', color: 'lime'}
  ]
  const [balls, setBalls] = useState<BallType[]>([])
  const [ballNodes, setBallNodes] = useState<ReactNode[] | null>(null)
  const [score,setScore] = useState<number>(0)
  
  function initBalls(list: Identity[]): BallType[] {
    let arr: BallType[] = []

    list.map((spec,index) => {
      let x = Math.floor(Math.random()*100)
      let y = Math.floor(Math.random()*100)
      arr.push(
        {
          startingPoint: {x: x, y: y, width: 150},
          endingPoint: {x: x%2==0?x-5:x+5, y: y%2==0?y-5:y+5, width: index%2==0?120:180},
          identity: {name: spec.name, color: spec.color}
        }
      )
    })

    return arr
  }

  function randomizeBalls(balls: BallType[]): BallType[] {
    let arr: BallType[] = []

    balls.map((ball,index) => {
      let x = Math.floor(Math.random()*80)+10
      let y = Math.floor(Math.random()*80)+10
      let width = Math.floor(Math.random()*50)+150
      arr.push(
        {
          startingPoint: ball.endingPoint,
          endingPoint: {x: x, y: y, width: width},
          identity: ball.identity
        }
      )
    })

    return arr
  }

  function randomizeCoordinates(balls: BallType[]): ReactNode[] {
    let arr: ReactNode[] = []

    balls.map((ball,index) => {
      let coords = {
        '--transform-start-y': `${ball.startingPoint.y}%`,
        '--transform-start-x': `${ball.startingPoint.x}%`,
        '--transform-end-y': `${ball.endingPoint.y}%`,
        '--transform-end-x': `${ball.endingPoint.x}%`,
        '--transform-start-width': `${ball.startingPoint.width}px`,
        '--transform-end-width': `${ball.endingPoint.width}px`
      }
      let ballStyle: CSSProperties = {
        background: `${ball.identity.color}`
      }
      arr.push(
        <div key={ball.identity.name+index} id={`ball_${index}`} className='d-flex justify-content-center align-items-center ball'
        style={{...ballStyle, ...coords}}>
          {ball.identity.name}
        </div>
      )
    })
    return arr
  }

  function updateGame() {
    setScore((oldScore) => oldScore + 1)
    setBalls((balls) => randomizeBalls(balls))
  }

  useEffect(() => {
    setBallNodes(() => randomizeCoordinates(balls))
  },[balls])

  useEffect(() => {
    setBalls(initBalls(specs))
    const interval = setInterval(updateGame, 5000)
    return () => {
      clearInterval(interval)
    }
  },[])

  return(
    <div className='d-flex justify-content-center align-items-center v-80 experience-arena'>
      {score}
      {ballNodes}
    </div>
  )
}