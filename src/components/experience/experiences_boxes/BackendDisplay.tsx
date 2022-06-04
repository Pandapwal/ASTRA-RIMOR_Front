import { ReactNode, useEffect, useState } from 'react'

import './backend-display.css'

import f_data from './data/backend-display.json'

export default function BackendDisplay() {
  const [data, setData] = useState<string[]>([])
  const [text, setText] = useState<ReactNode[]>([])
  const [test, setTest] = useState<string>('')

  function typeWriter(index: number, string: string): void {
    if (index <= string.length) {
      setTest(string.slice(0, index))
      console.log(index, string.length, 'GOING')
      let randIndex = Math.random()<0.05?index-1:index+1
      let randDelay = Math.floor(Math.random()*100)+50
      setTimeout(() => typeWriter(randIndex, string), randDelay)
    }
    else {
      console.log('STOPPED')
    }
  }

  function generateText(texts: string[]): ReactNode[] {
    let arr: ReactNode[] = []

    texts.map((v,i) => {
      arr.push(
        <pre key={i} className='text-start m-0'>{v}</pre>
      )
    })

    return arr
  }

  useEffect(() => {
    // for(let i=0;i<data.length;i++) {
    //   typeWriter(0, data[i])
    // }
    if(data.length>0)
      typeWriter(0, data[0])
  },[data])

  useEffect(() => {
    setData(f_data.texts)
  },[])

  return(
    <div className='position-relative backend-display hw-100 p-3 overflow-hidden'>
      <div className='d-flex flex-column hw-100 justify-content-start'>
        {/* {text} */}
        {test}
      </div>
    </div>
  )
}