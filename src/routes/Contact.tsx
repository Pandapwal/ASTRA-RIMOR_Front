import { useEffect, useState } from 'react'

import ContactForm from '../components/contact/contactForm'

import '../App.css'


export default function Contact() {

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className='route-container vh-100'>
      <ContactForm />
    </div>
  )
}