import { useEffect } from 'react'
import { version } from '../../package.json'

// import './patchNotes.css'

type PatchNotesProps = {
  theme?: string
}


export default function PatchNotes({ theme = 'normal'}: PatchNotesProps) {
  useEffect(() => {
    document.title = 'ASTRA RIMOR / Notes de mise à jour'
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container vh-100'>
      <div className='row'>
        v{version}
      </div>
    </div>
  )
}
