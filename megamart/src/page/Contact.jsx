import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {Button, Modal} from 'antd'
import './contact.css'


export default function Contact() {
    const {register, handleSubmit, formState:{errors}, reset} = useForm()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const onSubmit = (data)=>{
        console.log(data)
        alert('Form Submitted Successfully')
        reset()
    }



  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }} className='form-container'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: '1rem' }} className='form-group' >
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            {...register('name', { required: 'Name is required' })}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }} className='form-group'>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: '1rem' }} className='form-group'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            {...register('message', { required: 'Message is required' })}
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
          {errors.message && <p style={{ color: 'red' }}>{errors.message.message}</p>}
        </div>

        <button type="submit"  className='submit-button'>
          Submit
        </button>
      </form>
    </div>
  )
}
