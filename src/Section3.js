import React from 'react'
import { NavLink } from 'react-router-dom';
import "./css/Section3.css"
import SocialBanner from './images/1.webp'

function Section3() {
    const [blogcard] = React.useState([
        {
          id: 1,
          title: "Instagram Story",
          visit: "/holi1",
        },
        {
          id: 2,
          title: "Instagram Post",
          visit: "/holi1",
        },
        {
          id: 3,
          title: "Instagram Campaign",
          visit: "/holi1",
        },
      ]);
    return (
        <div>
            <h2 className="section3__heading" style={{textAlign:"center", marginBottom:"10%"}}>Our Social Services</h2>
            <section className="section3">
                <div className="section3__left">
                <h2 className="section3__heading2">Instagram Templates</h2>

                <div className="col-lg-12 mx-auto mt-5 order-1 order-lg-2">
                {/* <h2 className="ml-lg-3"><WebIcon style={{ fontSize: "2rem", marginTop: "-5px" }} /> Start Learning</h2> */}
                  {blogcard.map((info) => (
                    <div className="blogcard col-lg-6 mx-auto" key={info.id} style={{padding: "10px" }} >
                      <div className="card section3__card  m-2 shadow">
                        <div className="card-body">
                        <NavLink target="_blank" exact to={{pathname:info.visit}} style={{textDecoration:"none", color:"white"}} >
                          <h5 className="card-title font-weight-bold"> {info.title} </h5>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

                <div className="section3__right">
                <img src={SocialBanner} alt="Social Banner"></img>
                </div>
            </section>
        </div>
    )
}

export default Section3;
