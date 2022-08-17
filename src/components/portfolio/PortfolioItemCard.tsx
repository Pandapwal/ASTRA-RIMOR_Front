import { CSSProperties, ReactNode, useEffect, useState } from 'react'

import './portfolio-items.css'

import car from '../../assets/images/triangle_car.png'

interface PortfolioItem {
  name: string,
  description: string,
  thumbnail: string,
  logo: string,
  url: string,
  color: string
}

type PortfolioItemCardProps = {
    data: PortfolioItem
}

export default function PortfolioItemCard(props: PortfolioItemCardProps) {
  const [item, setItem] = useState<PortfolioItem>()
  const [style, setStyle] = useState<CSSProperties>()
  const [hovered, setHovered] = useState<boolean>(false)


//   function createItem(): ReactNode {
//     const tmp = props.data
//     const itemStyle = {
//         '--item-background-color': tmp.color
//     } as CSSProperties

//     return (
//         <div>
//             <h3 className={`name ${hovered ? 'hovered' : 'low'}`} style={itemStyle}>{tmp.name}</h3>
//             <p>{hovered ? 'hovered' : 'chill'}</p>
//             <div className='p-2'>
//                 <div className='position-absolute thumbnail-filler'></div>
//                 <img src={car} className='thumbnail'></img>
//             </div>
//         </div>
//     )
//   }

    useEffect(() => {
        const itemStyle = {
            '--item-background-color': item?.color || '--background-color'
        } as CSSProperties
        setStyle(itemStyle)
    },[item!=undefined])

  useEffect(() => {
    setItem(props.data)
  },[])

  return(
    <>
    {item?
    <div className={`col m-2 portfolio-card`}
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}>
        <div style={style}>
            <div className='position-relative'>
                <div className={`position-absolute filler ${hovered ? 'hovered' : ''}`}></div>
                <h3 className={`name position-relative ${hovered ? 'hovered' : ''}`}>{item.name}</h3>
            </div>
            <div className='p-1 position-relative'> 
                <img src={car} className='thumbnail'></img>
                <div className={`position-absolute filler ${hovered ? 'hovered' : ''}`}></div>
            </div>
        </div>
    </div>
    :
    <div>empty</div>
    }
    </>
  )
}