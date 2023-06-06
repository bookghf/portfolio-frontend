import React, { forwardRef } from 'react'
import '../css/about.css'

const About = forwardRef((props, ref) => {
  return (
    <div className='about' ref={ref}>
        <div className='about_wrap'>
            <div className='about_photo container'>
              <img className='around' src='/skill_logo/css.png' alt=''/>
              <img className='around'src='/skill_logo/html.png' alt=''/>
              <img className='around'src='/skill_logo/javascript.png' alt=''/>
              <img className='around'src='/skill_logo/react.png' alt=''/>
              <img src='/about_bg2.jpg' alt=''/>
            </div>
            <div className='text_wrap'>
                <div><p>About me &gt;</p></div>
                <div>A passionate junior Front-end Developer, Live in Bangkok Thailand.</div>
                <div>As a Junior Front-end Developer, I have skills in HTML, CSS, javaScript, React. I'm familiar with designing and maintaining responsive websites that offer a smooth user experience.</div>
            </div>
        </div>
        <div className='ball_animation'>
            <div className='scene'>
                <div className='floor'></div>
                <div className='cube'>
                    <div className='front'></div>
                    <div className='back'></div>
                    <div className='right'></div>
                    <div className='left'></div>
                    <div className='top'>
                        <div className='ballShadow'></div>
                    </div>
                    <div className='bottom'></div>
                </div>
                <div className='ball'></div>
            </div>
        </div>
    </div>
  )
});

export default About