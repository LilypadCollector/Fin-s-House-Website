import {React, useState} from 'react';
import './../App.css';
import clip1 from './../../src/images/clip1.mp4'
import ShadedBox from './shaded-box'
import Header from './header'

const onHoursClick = (scrollTo) => {
    // scrollTo.scrollIntoView({ behavior: 'smooth' })
}

const onLocationClick = () => {
    
}

const onMenuClick = () => {
    
}

const Home = () => {
    return (
        <div className="page" id="home">
            <Header />
            <ShadedBox/>
            <video id='home-video' autoPlay loop muted>
                <source src={clip1} type='video/mp4' />
            </video>
        </div>
    )
}

export default Home