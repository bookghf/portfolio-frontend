import React, { forwardRef } from 'react'
import Monline from './project_list/monline';
import Pokesite from './project_list/pokesite';
import Eatinghub from './project_list/eatinghub';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/project.css'

const Project = forwardRef((props, ref) => {

      return (
    <div className='project container' ref={ref}>
        <div className='slide-container'>
          <div className='project_title'>
            <p>Project &gt;</p>
          </div>
          <Monline/>
          <Eatinghub/>
          <Pokesite/> 
        </div>
    </div>
  )
});

export default Project