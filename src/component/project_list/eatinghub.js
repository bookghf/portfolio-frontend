import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const Eatinghub = () => {
    const slideImages_EatingHub = [
        {
            url: '/eatinghub/eatinghub1.png',
            name: 'eatinghub1'
        },
        {
            url: '/eatinghub/eatinghub2.png',
            name: 'eatinghub2'
        }
    ];
    return (
        <div className='eatinghub project_corousal'>
            <div className='project_name'>
                <a href='https://moonlit-begonia-320b09.netlify.app/' target="_blank" rel="noreferrer">
                    EatingHub &gt;
                </a>
            </div>
            <Carousel infiniteLoop={true} autoPlay={true} interval={3000} dynamicHeigh={true} stopOnHover={false}>
                <img src={`${slideImages_EatingHub[0].url}`} alt=''/>
                <img src={`${slideImages_EatingHub[1].url}`} alt=''/>
            </Carousel>
        </div>
    )
}

export default Eatinghub