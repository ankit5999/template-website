import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {

  return (
    <>
      <nav className="header"> 
	<input id="nav-toggle" type="checkbox" />
	<div className="logo"><strong>Workforwin</strong> <strong className="mhide">&nbsp; Templates</strong></div>
	
	<ul className="links">
		<li><NavLink exact to="/">Home</NavLink></li>
		<li><NavLink exact to="/holi1">Templates</NavLink></li>
		<li><NavLink exact to="/holi1">Design</NavLink></li>
		<li><NavLink exact to="">About</NavLink></li>
		<li><NavLink exact to="">Contact</NavLink></li>
	</ul>
	<label for="nav-toggle" className="icon-burger">
		<div className="line"></div>
		<div className="line"></div>
		<div className="line"></div>
	</label>
</nav>

    </>
  );
}

export default Navbar;

