import React from 'react'
import { NavLink } from 'react-router-dom';
import "./css/Section3.css"
import SocialBanner from './images/2.webp'

function Section4() {
    const [blogcard] = React.useState([
        {
          id: 1,
          title: "Linked Story",
          visit: "/holi1",
        },
        {
          id: 2,
          title: "LinkedIn Campaign",
          visit: "/holi1",
        },
        {
            id: 3,
            title: "LinkedIn Banner",
            visit: "/holi1",
          },
      ]);
    return (
        <div>
            <section className="section3 section4">
                <div className="section3__left order-2">
                <h2 className="section3__heading2 heading6 mt-5">LinkedIn Templates</h2>

                <div className="col-lg-12 mx-auto mt-5 order-1 order-lg-2">
                {/* <h2 className="ml-lg-3"><WebIcon style={{ fontSize: "2rem", marginTop: "-5px" }} /> Start Learning</h2> */}
                  {blogcard.map((info) => (
                    <div className="blogcard col-lg-6 mx-auto" key={info.id} style={{padding: "10px" }} >
                      <div className="card section3__card  card6 m-2 shadow">
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

                <div className="section3__right order-1">
                <img src={SocialBanner} alt="Social Banner"></img>
                </div>
            </section>
        </div>
    )
}

export default Section4;
