import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { SettingsContext } from "../App";


const Layout = () => {
  const {username} = useContext(SettingsContext)

  const toggleMenu = () => {
    //Pendo menu dal document
    const navbar = document.getElementById("navbar")
    const menu = document.getElementById("menu")

    navbar?.classList.toggle("navbar") //classList intende cosa c'è scirtto in class=""
    menu?.classList.toggle("openMenu");


  }

  return (
    <div>
      LAYOUT
      <header id="header">
        <nav className="navbar" id="navbar">
          <ul className="nav-bar" id="menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/exchange">Exchange</NavLink>
            </li>
            <li>
              <NavLink to="/assets">Asset</NavLink>
            </li>
          </ul>
        </nav>
        <p>{username}</p>
        <div className="menuMobile">
          <button onClick={toggleMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
