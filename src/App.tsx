import { ReactNode, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

// import Navbar from './components/nav/navbar'
import Sidenav from './components/nav/sidenav'
import Footer from './components/nav/footer'
import Maintenance from './routes/Maintenance'

import logo from './logo.svg'

import './App.css'

function App() {
  const [theme, setTheme] = useState<string>('normal')
  const [siteState, setSiteState] = useState<ReactNode>()
  const maintenance: boolean = false

  useEffect(() => {
    if (maintenance) {
      setSiteState(<Maintenance />)
    } else {
      setSiteState(
        <div className="App normal-theme">
          {/* <Navbar theme={theme}/> */}
          <Sidenav titleSlice={5} />
          <Outlet />
          <Footer theme={theme}/>
        </div>
      )
    }
  },[])

  return (
    <>
      {siteState}
    </>
  )
}

export default App
