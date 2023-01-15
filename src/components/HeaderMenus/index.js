import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const HeaderMenus = () => {
  return (
    <>
    <nav className={'header-menus'}>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About Us</Link></li>
        <li>Resturantes</li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default HeaderMenus;