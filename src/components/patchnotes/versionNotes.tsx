import { ReactNode, useEffect, useState } from 'react'

import './version-notes.css'

import versions from '../../data/versions.json'

type NoteType = {
  version: string,
  date: string,
  description: string,
  added?: string[] | null,
  modified?: string[] | null,
  removed?: string[] | null,
}

export default function VersionNotes() {
  const[notes, setNotes] = useState<NoteType[] | null>(null)
  const[articles, setArticles] = useState<ReactNode[] | null>(null)
  enum ChangeEnum {Added, Modified, Removed}

  function iterateChanges(list: string[] | null, key: string, change: ChangeEnum): ReactNode[] {
    let arr: ReactNode[] = []
    let changeType: string =
      change==ChangeEnum.Added?'added':
      change==ChangeEnum.Modified?'modified':
      change==ChangeEnum.Removed?'removed':
      ''
    let changeText: string =
      change==ChangeEnum.Added?'ajouté':
      change==ChangeEnum.Modified?'modifié':
      change==ChangeEnum.Removed?'supprimé':
      ''

    if(list===null) 
      return arr

    list.map((item,index) => {
      arr.push(
        <div key={`${key}-${index}`} className='d-flex p-1 border-bottom-extra-muted'>
          <div>
            <p className={`py-1 px-2 my-1 me-2 text-center change-type ${changeType}`}>{changeText}</p>
          </div>
          <p className='my-auto'>{item}</p>
        </div>
      )
    })

    return arr
  }

  function createNotes(notes: NoteType[] | null): ReactNode[] {
    let arr: ReactNode[] = []

    if(notes===null) 
      return arr

    notes.map((note,index) => {
      arr.push(
        <div key={`${note.version}`} className='d-flex flex-column my-3 article'>
          <div className='d-flex border-bottom-muted'>
            <h3 className='m-0 fw-800 px-2 py-1 version'>{note.version}</h3>
            <p className='my-auto mx-3 fw-400'>{note.date}</p>
          </div>
          <div className='d-flex flex-column text-start p-3'>
            <p>{note.description}</p>
            {iterateChanges(note.added??=null, note.version, ChangeEnum.Added)}
            {iterateChanges(note.modified??=null, note.version, ChangeEnum.Modified)}
            {iterateChanges(note.removed??=null, note.version, ChangeEnum.Removed)}
          </div>
        </div>
      )
    })

    return arr
  }

  useEffect(() => {
    if(notes) {
      setArticles(createNotes(notes))
    }
  },[notes])

  useEffect(() => {
    setNotes(versions.sort((a: NoteType, b: NoteType) => a.version === b.version ? 0 : a.version > b.version ? -1 : 1))
    setArticles(createNotes(notes))
    console.log('version')
  },[])

  return(
    <div className='col-4 d-flex flex-column justify-content-start'>
      {articles}
    </div>
  )
}