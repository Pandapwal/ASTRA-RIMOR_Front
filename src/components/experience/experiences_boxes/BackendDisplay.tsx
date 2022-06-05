import { ReactNode, useEffect, useState } from 'react'

import './backend-display.css'

import f_data from './data/backend-display.json'

export default function BackendDisplay() {
  const [data, setData] = useState<string[]>([])
  const [text, setText] = useState<ReactNode[]>([])
  const [test, setTest] = useState<string>('')

  function handleEndOfRecursion(string: string, control: number) {
    if((control+1)<data.length) {
      setText(oldText => [...oldText, <pre key={control+'yee'} className='text-start m-0 code-green'>{string}</pre>])
      typeWriter(0, data[control+1], control+1)
    }
  }

  function typeWriter(index: number, string: string, control: number) {
    if (index <= string.length) {
      setTest(string.slice(0, index))
      let randIndex = Math.random()<0.05?index-1:index+1
      let randDelay = Math.floor(Math.random()*10)+50
      setTimeout(() => typeWriter((randIndex<0?0:randIndex), string, control), randDelay)
    }
    else {
      handleEndOfRecursion(string, control)
    }
  }

  useEffect(() => {
    if(data.length>0) {
      typeWriter(0, data[0], 0)
    }
  },[data])

  useEffect(() => {
    setData(f_data.texts)
  },[])

  return(
    <div className='position-relative backend-display hw-100 p-3 overflow-hidden'>
      <div className='d-flex flex-column hw-100 justify-content-start'>
        {text}
        <pre key={'peptio'} className='text-start m-0 code-green'>{test}</pre>
      </div>
    </div>
  )
}