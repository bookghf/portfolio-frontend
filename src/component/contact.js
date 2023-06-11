import React, { forwardRef,useRef } from 'react'
import emailjs from '@emailjs/browser';
import {SocialIcon} from 'react-social-icons'
import '../css/contact.css'
import $ from 'jquery'


const Email_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

const Contact = forwardRef((props, ref) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(Email_ID)
    console.log(TEMPLATE_ID)
    console.log(PUBLIC_KEY)

    emailjs
      .sendForm(
        Email_ID, 
        TEMPLATE_ID, 
        form.current, 
        PUBLIC_KEY
      )
      .then((result) => {
          console.log(result.text);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  $(function () {
    $(".clear_button").on("click", function () {
        $("#name").val('');
        $("#email").val('');
        $("#phone").val('');
        $("#message").val('');
      });
  });
  return (
    <div className='contact container' ref={ref}>
        <div className='contact_wrapper'>
          <form className='contact_form' ref={form} onSubmit={sendEmail}>
            <div className='container'>
              <p>Contact Me!</p>
              <SocialIcon network='email' fgColor="#ffffff" />
            </div>
            <input id='name' type="text" placeholder="Name" name='user_name' required/>
            <input id='email' type="email" placeholder="Email" name='user_email' required/>
            <input id='phone' type="text" placeholder="Phone" name='user_contact_number' required/>
            <textarea id='message' type="text" placeholder="Message" cols="40" rows="5" name='user_message'></textarea>
            <div className='button_wrapper'>
              <div className='clear_button' type=''>Clear</div>
              <button className='submit_button' type='submit'>Submit</button>
            </div>
          </form>
          <div className='social_contact_wrapper'>
            <SocialIcon network='facebook'fgColor="#ffffff" url='https://www.facebook.com/bookghf'/>
            <SocialIcon network='twitter' fgColor="#ffffff" url='https://www.twitter.com/2072niwanat'/>
            <SocialIcon network='linkedin' fgColor="#ffffff" url='https://www.linkedin.com/in/tanawin-jitpongtae-86331b216/'/>
            <SocialIcon network='github' fgColor="#ffffff" url='https://www.github.com/bookghf'/>
          </div>
        </div>
        
    </div>
  )
});

export default Contact