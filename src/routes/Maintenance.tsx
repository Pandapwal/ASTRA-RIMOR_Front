import { useEffect, useState } from "react"

import './maintenance.css'

import background from '../assets/images/maintenance.png'

type MaintenanceProps = {
  theme?: string
}

export default function Maintenance({ theme = 'normal'}: MaintenanceProps) {

  function waveMaintenance(text: string): JSX.Element {
    let arr:JSX.Element[] = []
    let tmp:string[] = text.split('')
    let col: number[] = [
      (Math.floor(tmp.length/3)+6) > 12? 12 : (Math.floor(tmp.length/3)+6),
      (Math.floor(tmp.length/3)+2) > 12? 12 : (Math.floor(tmp.length/3)+2),
      Math.floor(tmp.length/3)
    ]
    
    tmp.map((item, index) => {
      let delay: string = `${(index/10)-0.1}s`
      arr.push(
        <h1 key={'wave'+index} className='text-uppercase col' data-letter={item}
        style={{animation: `waving-letter 3.5s linear ${delay} infinite`}}>
          <p>{item}</p>
        </h1>
      )
    })

    return (
      <div className={`d-flex flex-row col-${col[0]} col-md-${col[1]} col-xl-${col[2]} justify-content-center maintenance-title`}>
        {arr}
      </div>
      )
  }

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className={`maintenance-container ${theme}-theme`}
    style={{
      background: `linear-gradient(#00000060, #00000060),
      url(${background}), var(--background-color)`
    }}>
      {waveMaintenance('maintenance')}
      <div className='fw-200'>bientôt de retour en ligne</div>
    </div>
  )
}