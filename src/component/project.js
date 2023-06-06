import React, { forwardRef } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/project.css'

const Project = forwardRef((props, ref) => {
  const slideImages_MOnline = [
    {
          url:'/monline/monline1.png',
          name:'monline1'
        },
        {
          url:'/monline/monline2.png',
          name:'monline2'
        }
      ];

      const slideImages_EatingHub = [
        {
          url:'/eatinghub/eatinghub1.png',
          name:'eatinghub1'
        },
        {
          url:'/eatinghub/eatinghub2.png',
          name:'eatinghub2'
        }
      ];

      const slideImages_PokeSite = [
          {
            url:'/pokesite/pokesite1.png',
            name:'pokesite1'
          },
          {
            url:'/pokesite/pokesite2.png',
            name:'pokesite2'
          },
          {
            url:'/pokesite/pokesite3.png',
            name:'pokesite3'
          }
        ];

      return (
    <div className='project container' ref={ref}>
        <div className='slide-container'>
            <div><p>Project &gt;</p></div>
            <Carousel infiniteLoop={true} autoPlay={true} interval={3000} dynamicHeigh={true} stopOnHover={false}>
                <a href='https://tubular-creponne-bb69a5.netlify.app/' target="_blank" rel="noreferrer"><div className='slide_image' style={{backgroundImage:`url(${slideImages_MOnline[0].url})`}}></div></a>
                <a href='https://tubular-creponne-bb69a5.netlify.app/' target="_blank" rel="noreferrer"><div className='slide_image' style={{backgroundImage:`url(${slideImages_MOnline[1].url})`}}></div></a>
            </Carousel>  
            <Carousel infiniteLoop={true} autoPlay={true} interval={3000} dynamicHeigh={true} stopOnHover={false}>
                <a href='https://moonlit-begonia-320b09.netlify.app/' target="_blank" rel="noreferrer"><div className='slide_image' style={{backgroundImage:`url(${slideImages_EatingHub[0].url})`}}></div></a>
                <a href='https://moonlit-begonia-320b09.netlify.app/' target="_blank" rel="noreferrer"><div className='slide_image' style={{backgroundImage:`url(${slideImages_EatingHub[1].url})`}}></div></a>
            </Carousel>  
            <Carousel infiniteLoop={true} autoPlay={true} interval={3000} dynamicHeigh={true} stopOnHover={false}>
                <a href='https://resonant-platypus-35f02d.netlify.app/' target="_blank" rel="noreferrer"><div className='slide_image' style={{backgroundImage:`url(${slideImages_PokeSite[0].url})`}}></div></a>
                <a href='https://resonant-platypus-35f02d.netlify.app/' target="_blank" rel="noreferrer"><div className='slide_image' style={{backgroundImage:`url(${slideImages_PokeSite[1].url})`}}></div></a>
                <a href='https://resonant-platypus-35f02d.netlify.app/' target="_blank" rel="noreferrer"><div className='slide_image' style={{backgroundImage:`url(${slideImages_PokeSite[2].url})`}}></div></a>
            </Carousel>  
        </div>
    </div>
  )
});

export default Project