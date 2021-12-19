import React from 'react'
import { NavLink } from 'react-router-dom';
import "./css/Section3.css"
import SocialBanner from './images/3.webp'

function Section5() {
    const [blogcard] = React.useState([
        {
          id: 1,
          title: "Facebook Post",
          visit: "/holi1",
        },
        {
          id: 2,
          title: "Facebook Banner",
          visit: "/holi1",
        },
        {
          id: 3,
          title: "Facebook Campaign",
          visit: "/holi1",
        },
      ]);
    return (
        <div>
            <section className="section3 section4">
                <div className="section3__left mt-lg-5 mt-2 order-2 order-lg-1">
                <h2 className="section3__heading2 heading5">Facebook Templates</h2>

                <div className="col-lg-12 mx-auto mt-5">
                  {blogcard.map((info) => (
                    <div className="blogcard col-lg-6 mx-auto" key={info.id} style={{padding: "10px" }} >
                      <div className="card section3__card card5  m-2 shadow">
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

                <div className="section3__right  order-1 order-lg-2">
                <img src={SocialBanner} alt="Social Banner"></img>
                </div>
            </section>
        </div>
    )
}

export default Section5;
