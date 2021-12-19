import React from 'react'
import './css/Section2.css'
import Video from './images/video.mp4'

function Section2() {
    return (
        <div className="section2">
            <h2>3.6 billion people are using social media worldwide.</h2>
            <h6>We are on a mission to Connect You with your target audience!</h6>
            <div className="section2__div">
                <div className="section2__left">
                </div>
                <div className="section2__right">
                <div className="col-lg-10 ml-lg-5 center" >
  <div className="card shadow mb-3 mt-3" style={{borderRadius: "15px"}} >
  <div className="card-body text-danger embed-responsive embed-responsive-16by9" >
<iframe className="embed-responsive-item center" src={Video}  title='Workforwin Templates' controls="0" style={{borderRadius: "15px"}}></iframe>
  </div>
</div>
  </div>
                </div>
            </div>
        </div>
    )
}

export default Section2;
