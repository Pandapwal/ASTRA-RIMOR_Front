import React, { useState, useEffect, useRef, MutableRefObject, ReactEventHandler, FormEventHandler } from 'react'
import emailjs from '@emailjs/browser'

import './contactForm.css'

import logo from '../../logo.svg'
import triangleCar from '../../assets/images/triangle_car.png'

export default function ContactForm() {
  const form = useRef() as MutableRefObject<HTMLFormElement>
  const [didgeridoo, setDidgeridoo] = useState<string>(Math.random().toString())
  const [loading, setLoading] = useState<boolean>(true)
  const [clicked, setClicked] = useState<boolean>(false)
  const [res, setRes] = useState<boolean>(false)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(e.target)

    setClicked(true)
    setTimeout(() => {
      setRes(true)
      setLoading(false)
    }, 3000);

    // emailjs.sendForm(
    //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //   form.current,
    //   import.meta.env.VITE_EMAILJS_USER_ID)
    //   .then((result) => {
    //       console.log(result.text)
    //       setRes(true)
    //       setLoading(false)
    //   }, (error) => {
    //       console.log(error.text)
    //       setRes(false)
    //       setLoading(false)
    //   })
  }
  
  useEffect(() => {
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      import.meta.env.VITE_EMAILJS_USER_ID,
      didgeridoo)
  },[])

  return (
    <div className='d-flex flex-row col-11 col-md-10 col-lg-8 rounded-3 bg-dark overflow-hidden p-0 justify-content-center'>
      
      <div className='d-lg-flex d-none flex-column justify-content-center rounded-start col-lg-6 p-4 contact-info'
      style={{backgroundImage: `url(${triangleCar})`, maxHeight: '70vh'}}>
      </div>

      <form ref={form} onSubmit={sendEmail} className='col-11 col-md-10 col-lg-6 p-2 py-4 p-lg-5'>

        <h1>ME CONTACTER</h1>
        <div className='d-flex justify-content-center mb-3'>
          <p className='fw-300 text-higlight'>06 14 14 29 50</p>
          <p className='fw-100 px-3 text-muted'>/-/</p>
          <p className='fw-300 text-higlight'>contact@astrarimor.fr</p>
        </div>

        <div className='form-row'>
          <div className='form-group d-flex flex-column justify-content-start'>
            <label htmlFor='userName' className='text-start'>Nom<span>&#x2a;</span></label>
            <input id='userName' type='text' name={`user_name_${didgeridoo}`} placeholder='Nom Prénom' className='form-control' required/>
            <div className='input-underline'></div>
          </div>
          <div className='form-group d-flex flex-column justify-content-start py-3'>
            <label htmlFor='userEmail' className='text-start'>Courriel<span>&#x2a;</span></label>
            <input id='userEmail' type='email' name={`user_email_${didgeridoo}`} placeholder='nom@mail.com' className='form-control' required autoComplete='new-password'/>
            <div className='input-underline'></div>
          </div>
          <div className='form-group d-flex flex-column justify-content-start pb-3'>
            <label htmlFor='userPhone' className='text-start'>Téléphone<span>&#x2a;</span></label>
            <input id='userPhone' type='tel' pattern='[0-9\s]{10,14}' name={`user_phone_${didgeridoo}`} placeholder='01 01 01 01 01' className='form-control' required/>
            <div className='input-underline'></div>
          </div>
        </div>
        <div className='form-group d-flex flex-column justify-content-start'>
          <label htmlFor='userMessage' className='text-start'>Message<span>&#x2a;</span></label>
          <textarea id='userMessage' name='message' className='form-control' rows={3} required></textarea>
          <div className='input-underline'></div>
        </div>

        <p className='font-italic small mt-3 text-start'>
          <span className='required-asterix'>&#x2a;</span>requis
        </p>

        <div className='d-flex justify-content-center'>
          {clicked?
            loading?
              <div className='spinner-border text-primary' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
              :
              res?
                <p className='text-success font-weight-bold mb-2'>envoyé<i className='fa-solid fa-check mx-2'></i></p>
                :
                <div className='d-flex flex-column justify-content-center align-items-center'>
                  <p className='text-danger font-weight-bold mb-2'>erreur<i className='fa-solid fa-xmark mx-2'></i></p>
                  <p className='error-d'>contactez-nous avec les coordonnées ci-contre</p>
                  <p className='error-m'>contactez-nous avec les coordonnées ci-dessous</p>
                  <p>ou essayez de recharger la page
                    <button className='btn btn-primary mx-2' onClick={() => window.location.reload()}>Recharger</button>
                  </p>
                </div>
            :
            <button className='btn btn-contrast my-2' type='submit' >
              Envoyer<i className='fa-solid fa-paper-plane ms-2'></i>
            </button>
          }
        </div>
      </form>
    </div>
  )
}