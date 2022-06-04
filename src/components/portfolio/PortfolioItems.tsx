import { ReactNode, useEffect, useState } from 'react'

import './portfolio-items.css'

import car from '../../assets/images/triangle_car.png'

import data from '../../data/portfolio.json'

interface PortfolioItem {
  name: string,
  description: string,
  thumbnail: string,
  logo: string,
  url: string
}

const defaultItem = {
  name: 'nom',
  description: 'decription',
  thumbnail: 'miniature',
  logo: 'logo',
  url: 'adresse'
}

export default function PortfolioItems() {
  const [items, setItems] = useState<ReactNode[]>([])

  function initItem(item?: Partial<PortfolioItem>): PortfolioItem {
    return {...defaultItem, ...item}
  }

  function createItems(): ReactNode[] {
    let arr: ReactNode[] = []

    data.map((item,index) => {
      let tmp = initItem(item)
      arr.push(
        <div className='col p-2'>
          <div className='border border-light'>
            <h3>{tmp.name}</h3>
            <img src={car} className='thumbnail'></img>
          </div>
        </div>
      )
    })
    
    return arr
  }

  useEffect(() => {
    setItems(createItems())
  },[])

  return(
    <div className='w-100 portfolio-items'>
      <h1 className='fst-italic'>PORTFOLIO</h1>
      <div className='mx-auto w-75 row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4'>
        {items}
      </div>
    </div>
  )
}