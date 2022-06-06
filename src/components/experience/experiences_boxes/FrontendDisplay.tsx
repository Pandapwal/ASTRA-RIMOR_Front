import { CSSProperties, ReactNode, useState } from 'react'
import './frontend-display.css'

export default function FrontendDisplay() {
  const [hovered, setHovered] = useState<{left: number|null,right: number|null, [key: string]: number|null}>({left: null, right: null})
  const kanjis: {left: string[], right: string[], [key: string]: string[]} = {left: ['ス','タ','イ','ル','ー'], right: ['星','お','様','名','優']}
  
  function createCubes(columns: number, index: number): ReactNode {
    let arr: ReactNode[] = []

    for(let i=1;i<=columns;i++) {
      arr.push(
        <div className='tile'
        onMouseOver={() => setHovered({left:index, right:i-1})}
        onMouseLeave={() => setHovered({left:null, right:null})}>
          <div className='face face-top'><p>{(index*columns)+i}</p></div>
          <div className='face face-right'></div>
          <div className='face face-left'></div>
          <div className='face face-back-right'></div>
          <div className='face face-back-left'></div>
        </div>
      )
    }

    return <div className='row flex-nowrap'>{arr}</div>
  }

  function generateTiles(columns: number): ReactNode[] {
    let arr: ReactNode[] = []

    for(let i=0;i<columns;i++) {
      arr.push(createCubes(columns, i))
    }

    return arr
  }

  function generateKanjis(columns: number, side: string): ReactNode[] {
    let arr: ReactNode[] = []

    for(let i=0;i<columns;i++) {
      arr.push(
        <div className={`col fw-900 kanji ${hovered[side]==i?'hovered':''}`}>{kanjis[side][i]}</div>
      )
    }

    return arr
  }

  return(
    <div className='d-flex justify-content-center align-items-center frontend-display position-relative hw-100 overflow-hidden'>
      <div className='scene'>
        <div className='position-absolute d-flex align-items-end kanjis right'>
          {generateKanjis(5, 'right')}
        </div>
        <div className='position-absolute d-flex align-items-start kanjis left'>
          {generateKanjis(5, 'left')}
        </div>
        {generateTiles(5)}
      </div>
    </div>
  )
}