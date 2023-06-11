import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const Monline = () => {
    const slideImages_MOnline = [
        {
            url: '/monline/monline1.png',
            name: 'monline1'
        },
        {
            url: '/monline/monline2.png',
            name: 'monline2'
        }
    ];
    return (
        <div className='monline project_corousal'>
            <div className='project_name'>
                <a href='https://tubular-creponne-bb69a5.netlify.app/' target="_blank" rel="noreferrer">Monline &gt;</a>
            </div>
            <Carousel infiniteLoop={true} autoPlay={true} interval={3000} dynamicHeigh={true} stopOnHover={false}>
                <img src={`${slideImages_MOnline[0].url}`} alt=''/>
                <img src={`${slideImages_MOnline[1].url}`} alt=''/>
            </Carousel>
        </div>
    )
}

export default Monline