import { ReactNode, useEffect, useState } from 'react'

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

  function createBoxes(items: ExperienceType[]|null): ReactNode[] {
    let arr: ReactNode[] = []

    if(items===null)
      return arr

    items.map((item, index) => {
      let last = index==items.length?true:false
      arr.push(
        <div key={`${index}_pepito`} className={`d-flex align-items-center row flex-grow-1 channel ${activeChannel==item.category?'active':''}`}
        onClick={() => setActiveChannel(item.category)}>
          <h3 className='p-0 m-0 text-uppercase'>{item.category}</h3>
        </div>
      )
    })

    return arr
  }

  useEffect(() => {
    setActiveChannel(data[0].category)
  },[])

  return(
    <div className='d-flex justify-content-center align-items-center position-relative v-80 boxes'>
      <div className='d-flex flex-column col-md-2 border position-relative h-100 channel-list'>
        {createBoxes(data.length>0?data:null)}
      </div>
      <div className='d-flex justify-content-center align-items-center col-md-10 h-100 television'>
        {categoriesDict[activeChannel]}
      </div>
    </div>
  )
}