import { CSSProperties, ReactNode, useEffect, useState } from 'react'

import PortfolioItemCard from './PortfolioItemCard'

import data from '../../data/portfolio.json'

interface PortfolioItem {
    name: string,
    description: string,
    thumbnail: string,
    logo: string,
    url: string,
    color: string
}

const defaultItem = {
    name: 'projet',
    description: 'decription',
    thumbnail: 'miniature',
    logo: 'logo',
    url: 'adresse',
    color: '--background-color'
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
        <PortfolioItemCard data={tmp} />
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
      <div className='mx-auto w-75 row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 justify-content-center'>
        {items}
      </div>
    </div>
  )
}