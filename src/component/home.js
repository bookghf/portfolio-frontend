import React, { forwardRef } from 'react'
import '../css/home.css'
const Home = forwardRef((props, ref) => {
  return (
    <div className='home' ref={ref}>
      <div className='home_content'>
        <div className='home_top'>
          <div className='home_des'>
            <div className='text'>Front-end Developer </div>
            <div className='text'>Hi, I'm Tanawin Jitpongtae. A passionate junior Front-end Developer in Bangkok Thailand. </div>
            <div className='text'><a href='https://github.com/bookghf' target="_blank" rel="noreferrer"><img src='/skill_logo/github.png' alt='' /></a></div>
            <div className='skill'>
              <div>Tech skill</div>
              <div className='tech_stack'>
                <img src='/skill_logo/css.png' alt='' />
                <img src='/skill_logo/html.png' alt='' />
                <img src='/skill_logo/javascript.png' alt='' />
                <img src='/skill_logo/react.png' alt='' />
              </div>
            </div>
          </div>
          <div className='photo container'>
            <img src='/profile_picture.jpg' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
});

export default Home