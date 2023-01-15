import React from "react";
import HeaderMenus from "../HeaderMenus";
// import { AppConstant } from "../../common/AppConstant";
import "./style.scss";
import LogoImg from "../../assets/img/food-villa-logo.svg";
import CartIcon from "../../assets/img/cart-icon.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={'logo-container'}>
      <Link to={'/'}>
        <div className={'logo-img'}>
          <img src={LogoImg} alt={'Food Villa'} />
        </div>
        <div className={'logo'}>
        Food <span>Villa</span></div>
      </Link>
    </div>
  )
}

const HeaderIcons = () => {
  return (
    <>
      <div className={'header-icons'}>
        <ul>
          <li><img src={CartIcon} alt="Cart" /><span>0</span></li>
          <li className={'signup-btn'}>Sign Up</li>
        </ul>
      </div>
    </>
  )
}

const AppHeader = () => {
  return (<>
    <div className={'app-header'}>
      <Logo />
      <HeaderMenus />
      <HeaderIcons />
    </div>
  </>)
}

export default AppHeader;