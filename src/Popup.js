import React from 'react'
import { NavLink } from 'react-router-dom';
import Popupimg from './images/gift.webp';

function Popup() {

    return (
        <div>
            <div className="popup">
                <div className="contentBox">
                <div className="close"></div>
                    <div className="imgBx">
                        <img src={Popupimg} alt="popupimg"></img>
                    </div>
                    <div className="content">
                        <div>
                        <h3>Special Offer</h3>
                        <h2>100<sup>%</sup><span> Off</span></h2>
                        <p>This Holi get free images at Workforwin Templates to spread happiness by sharing them with your friends and family.</p>
                        <NavLink className="popup_a" exact to="/holi1" target="_blank" >Get Now</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default Popup;
