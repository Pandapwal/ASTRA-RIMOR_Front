import { CSSProperties, ReactNode, useEffect, useState } from 'react'

import FrontendDisplay from './experiences_boxes/FrontendDisplay'
import BackendDisplay from './experiences_boxes/BackendDisplay'
import ToolsDisplay from './experiences_boxes/ToolsDisplay'

import './experience-boxes.css'

import data from './data/experience-boxes.json'

type ExperienceType = {
  category: string,
  concepts: string[],
  stack: string[]
}

export default function ExperienceBoxes() {
  const [activeChannel, setActiveChannel] = useState<string>('null')
  const [counter, setCounter] = useState<number>(0)
  const categoriesDict: {[key: string]: JSX.Element} = {null: <></>, frontend: <FrontendDisplay/>, backend: <BackendDisplay/>, outils: <ToolsDisplay/>}

  function handleCounter(c: number){
    setCounter(counter+c)
  }

  function createXP(items: string[]|null): ReactNode[] {
    let arr: ReactNode[] = []

    if(items===null)
      return arr

    items.map((item, index) => {
      if(item=='blank') {
        arr.push(
          <hr></hr>
        )
      } else {
        arr.push(
          <p className='px-2 text-start'>{item}</p>
        )
      }
    })

    return arr
  }

  function createBoxes(items: ExperienceType[]|null): ReactNode[] {
    let arr: ReactNode[] = []

    if(items===null)
      return arr

    items.map((item, index) => {
      arr.push(
        <div key={`${index}_pepito`} className={`d-flex align-items-center row flex-grow-1 channel ${activeChannel==item.category?'active':''}`}
        onClick={() => setActiveChannel(item.category)}>
          <div className='p-0 m-0 hw-100 d-flex align-items-center justify-content-center'>
            <h2 className='p-2 m-0 text-uppercase'>{item.category}</h2>
          </div>
        </div>
      )
    })

    return arr
  }

  function checkFiltered(object: any): string[] {
    let arr: string[] = []

    object.concepts&&object.stack?
    arr = [...object.concepts, 'blank', ...object.stack]
    :object.concepts?
      arr = object.concepts
      :object.stack?
        arr = object.stack
        :arr = ['/']

    return arr
  }

  useEffect(() => {
    setActiveChannel(data[0].category)
  },[])

  return(
    <div className='d-flex justify-content-center align-items-center position-relative v-80 boxes'>
      <div className='d-flex flex-column col-2 position-relative h-100 channel-list overflow-hidden'>
        {createBoxes(data.length>0?data:null)}
      </div>
      <div className='d-flex justify-content-center align-items-center position-relative col-9 h-100 television'>
        {categoriesDict[activeChannel]}
      </div>
      <div className='d-flex flex-column col-1 border-start position-relative h-100 xp-list'>
        <h3 className='xp-column'>XP</h3>
        {data.filter((item) => item.category == activeChannel).map((filtered) => (
          <div>
            {createXP(filtered.concepts||filtered.stack?checkFiltered(filtered):null)}
          </div>
        ))}
      </div>
    </div>
  )
}