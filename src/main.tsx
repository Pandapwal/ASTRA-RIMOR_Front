import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import ReactDOM from 'react-dom'

import './index.css'

import App from './App'
import Landing from './routes/Landing'
import Portfolio from './routes/Portfolio'
import Experience from './routes/Experience'
import Other from './routes/Other'
import Contact from './routes/Contact'

import Legal from './routes/Legal'
import PatchNotes from './routes/PatchNotes'

import NotFound from './routes/NotFound'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='' element={<Landing />}/>
          <Route path='portfolio' element={<Portfolio />}/>
          <Route path='experience' element={<Experience />}/>
          <Route path='contact' element={<Contact />}/>

          <Route path='mentions-legales' element={<Legal />} />
          <Route path='notes-de-mise-a-jour' element={<PatchNotes />}/>

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
