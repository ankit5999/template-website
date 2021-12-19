import React, { useEffect } from 'react'
import './css/Home.css'
import Popup from './Popup';
import Section2 from './Section2'
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Footerimg from './images/footer.webp'
import { NavLink } from 'react-router-dom';



function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <>
            <div className="main">
            <Popup />
                <div className="banner__area">
                    <div className="banner__left">
                    <h2>Get Your Customized Template </h2>
                    <p>Workforwin Helps You In Targetting Your Right Audience By Providing Custom Ad Banner Templates For Your Business.</p>
                    <p className="mhide">Here You Will Also Get Templates For Your All Social Networks Which Will Help You In Engaging More Traffic From Them.</p>
                    <NavLink target="_blank" exact to="/holi1"><button className='banner__button'>Get Now</button></NavLink>
                    </div>
                    <div className="banner__right">
                    <div className="col-2">  
                     
                    </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Section2 />
            </div>
            <div className="container">
                <Section3 />
            </div>
            <div className="container">
                <Section4 />
            </div>
            <div className="container">
                <Section5 />
            </div>
            <div className="container">
                <Section6 />
            </div>
            <div className="container">
                <Section7 />
            </div>
            <div className="container">
                <Section8 />
            </div>
            <div className="footer">
            <img src={Footerimg} alt=""></img>
            </div>
            {/* <Animation /> */}
        </>
    )
}

export default Home;
