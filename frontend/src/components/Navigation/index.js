import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import * as sessionActions from "../../store/session";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");

  const demoLogin = async (e) => {
    e.preventDefault();
    setCredential("Demo-lition");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "Demo-lition", password: "password" })
    );
  };

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="signupbutton" to="/signup">
          Sign Up
        </NavLink>
        <a href="#" onClick={demoLogin}>
          Demo User
        </a>
      </>
    );
  }

  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="home-container">
          <NavLink className="home-button" exact to="/">
            <img
              src="https://res.cloudinary.com/dis83syog/image/upload/v1633829306/Pickup/PickupLogo_spe2lt.png"
              className="logo"
              alt="logo"
            />
          </NavLink>
        </div>
        <div className="nav-buttons">{isLoaded && sessionLinks}</div>
      </div>
    </div>
  );
}

export default Navigation;
