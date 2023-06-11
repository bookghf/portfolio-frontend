import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const Pokesite = () => {
    const slideImages_PokeSite = [
        {
            url: '/pokesite/pokesite1.png',
            name: 'pokesite1'
        },
        {
            url: '/pokesite/pokesite2.png',
            name: 'pokesite2'
        },
        {
            url: '/pokesite/pokesite3.png',
            name: 'pokesite3'
        }
    ];
    return (
        <div className='pokesite project_corousal'>
            <div className='project_name'>
                <a href='https://resonant-platypus-35f02d.netlify.app/' target="_blank" rel="noreferrer">
                    Pokesite &gt;
                </a>
            </div>
            <Carousel thumbWidth={80} infiniteLoop={true} autoPlay={true} interval={3000} dynamicHeigh={true} stopOnHover={false}>
                <img src={`${slideImages_PokeSite[0].url}`} alt=''/>
                <img src={`${slideImages_PokeSite[1].url}`} alt=''/>
                <img src={`${slideImages_PokeSite[2].url}`} alt=''/>
            </Carousel>
        </div>
    )
}

export default Pokesite