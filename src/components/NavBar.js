import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className="navbar">
      <NavLink exact to = "/">Home</NavLink>
      <NavLink  to ="/movie">Movies</NavLink> 
      <NavLink to ="/director">Directors</NavLink>
      <NavLink to ="/actors">Actors</NavLink>
    </div>
  )
}

export default NavBar;
