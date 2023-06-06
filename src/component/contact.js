import React, { forwardRef } from 'react'
import {SocialIcon} from 'react-social-icons'
import '../css/contact.css'

const Contact = forwardRef((props, ref) => {
  return (
    <div className='contact container' ref={ref}>
        <div className='contact_wrapper'>
          <div className='contact_form'>
            <p>Contact Me!</p>
            <input id='name' type="text" placeholder="Name"></input>
            <input id='email' type="text" placeholder="Email"></input>
            <input id='phone' type="text" placeholder="Phone"></input>
            <input id='message' type="text" placeholder="Message"></input>
            <div className='button_wrapper'>
              <button className='clear_button'>Clear</button>
              <button className='submit_button'>Submit</button>
            </div>
          </div>
          <div className='social_contact_wrapper'>
            <SocialIcon network='facebook' url='https://www.facebook.com/bookghf'/>
            <SocialIcon network='twitter'/>
            <SocialIcon network='linkedin'/>
            <SocialIcon network='email'/>
          </div>
        </div>
    </div>
  )
});

export default Contact