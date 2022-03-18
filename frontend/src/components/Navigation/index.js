import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import DemoUser from "./DemoUser";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks =
    <ProfileButton user={sessionUser} />
  ;
  } else {
    sessionLinks = (
      <>
        <DemoUser />
        <NavLink className="rNavLinks" to="/login">Log In</NavLink>
        <NavLink className="rNavLinks" to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navContainer">
      <div className="navLeftContainer">
        <div className="navLeft">
          <div>
            <NavLink className="nav-link" exact to="/spots">
              Home
            </NavLink>
          </div>
          <div>
            <a className="nav-link" href="https://www.github.com/nikblvck/magicbnb">About</a>
          </div>
        </div>
      </div>
      <div className="navRight">
        <div>
          <div>{sessionLinks}</div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
