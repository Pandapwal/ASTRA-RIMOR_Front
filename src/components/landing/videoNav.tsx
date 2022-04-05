import { ReactNode, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './videoNav.css'

type Tab = {
  title: string,
  link: string,
  video: string,
  bg: string
}

type VideoNavProps = {
  tabs?: Tab[]
}

export default function VideoNav({ tabs = [{title: 'accueil', link: '/', video: 'default', bg: 'dark'}] }: VideoNavProps) {
  const [active, setActive] = useState<string>('')
  const location = useLocation()
  const [rightSide, setRightSide] = useState<string>('dark')
  const [title, setTitle] = useState<string>('')
  
  function createTabs():JSX.Element[] {
    let arr: JSX.Element[] = []
    tabs.map((tab, index) => {
      arr.push(
      <Link key={tab.title+index} to={tab.link} data-title={tab.title}
      onMouseOver={() => {setRightSide(tab.bg);setTitle(tab.title)}}
      onMouseLeave={() => {setRightSide('');setTitle('')}}
      className={`text-end text-uppercase py-3 video-nav-link ${active==tab.title?'active':''}`}>
        <p className='m-0'>{tab.title}</p>
      </Link>
      )
    })
    return arr
  }

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setActive('accueil')
        break
      case '/portfolio':
        setActive('portfolio')
        break
      case '/autre':
        setActive('autre')
        break
      case '/contact':
        setActive('contact')
        break
      default:
        setActive('404')
        break
    }
  },[location])

  return (
    <div className='d-flex flex-row video-nav-container'>
      <div className='d-flex flex-column justify-content-center align-items-center col-4 video-nav'>
        <div className='d-flex flex-column w-100 p-5'>
          {createTabs()}
        </div>
        <div className='video-nav-toggler'>
          <i className='fa-solid fa-angle-right'></i>
        </div>
      </div>
      <div className={`d-flex justify-content-center align-items-center col-8 bg-${rightSide} overflow-hidden`}>
        <p className='video-nav-bit-title col m-0'>{title}</p>
        <p className='video-nav-description'>heleo</p>
      </div>
    </div>
  )
}