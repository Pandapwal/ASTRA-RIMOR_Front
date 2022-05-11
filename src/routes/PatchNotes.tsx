import { useEffect } from 'react'
import { version } from '../../package.json'

import SmallMessage from '../components/patchnotes/smallMessage'
import VersionNotes from '../components/patchnotes/versionNotes'

type PatchNotesProps = {
  theme?: string
}


export default function PatchNotes({ theme = 'normal'}: PatchNotesProps) {
  useEffect(() => {
    document.title = `ASTRA RIMOR / Version ${version}`
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container mvh-100'>
      <SmallMessage />
      <VersionNotes />
    </div>
  )
}
