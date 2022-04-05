import { useEffect } from 'react'
import { version } from '../../package.json'

// import './patchNotes.css'

type PatchNotesProps = {
  theme?: string
}


export default function PatchNotes({ theme = 'normal'}: PatchNotesProps) {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container'>
      <div className='row'>
        v{version}
      </div>
    </div>
  )
}
