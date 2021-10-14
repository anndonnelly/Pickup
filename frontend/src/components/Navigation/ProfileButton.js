import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const history = useHistory();

  const openMenu = (e) => {
    e.preventDefault();
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/")
  };

  return (
    <>
      <a href="#" onClick={openMenu}>
        <i className="fas fa-user-circle" />
      </a>
      {showMenu && (
        <>
          <ul className="profile-dropdown">
            <li>{user.username}</li>
            <li>{user.email}</li>
            <button className="logoutButton" onClick={logout}>
              Log Out
            </button>
          </ul>
        </>
      )}
    </>
  );
}

export default ProfileButton;
