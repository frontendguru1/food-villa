import React, { useState } from "react";
import HeaderMenus from "../HeaderMenus";
// import { AppConstant } from "../../common/AppConstant";
import "./style.scss";
import LogoImg from "../../assets/img/food-villa-logo.svg";
import CartIcon from "../../assets/img/cart-icon.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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

const HeaderIcons = ({handleSearch, searchIconClass}) => {
  const searchIcon = (<><svg width="17px" height="18px" viewBox="0 0 17 18">
  <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Rounded" transform="translate(-545.000000, -421.000000)">
          <g id="Action" transform="translate(100.000000, 100.000000)">
              <g id="-Round-/-Action-/-search" transform="translate(442.000000, 318.000000)">
                  <g>
                      <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                      <path d="M15.5,14 L14.71,14 L14.43,13.73 C15.63,12.33 16.25,10.42 15.91,8.39 C15.44,5.61 13.12,3.39 10.32,3.05 C6.09,2.53 2.53,6.09 3.05,10.32 C3.39,13.12 5.61,15.44 8.39,15.91 C10.42,16.25 12.33,15.63 13.73,14.43 L14,14.71 L14,15.5 L18.25,19.75 C18.66,20.16 19.33,20.16 19.74,19.75 C20.15,19.34 20.15,18.67 19.74,18.26 L15.5,14 Z M9.5,14 C7.01,14 5,11.99 5,9.5 C5,7.01 7.01,5 9.5,5 C11.99,5 14,7.01 14,9.5 C14,11.99 11.99,14 9.5,14 Z" id="🔹Icon-Color" fill="#202142"></path>
                  </g>
              </g>
          </g>
      </g>
  </g>
</svg></>);

const cartItems = useSelector(store => store.cart.items);
console.log(cartItems, '=> cartItems')

  return (
    <>
      <div className={'header-icons'}>
        <ul>
          <li className={'search-container'}>
            <input type={'text'} onChange={handleSearch} />
            <button className={searchIconClass}>{searchIcon}</button>
            </li>
          <li className={'cart-icon'}><img src={CartIcon} alt="Cart" /><span>{cartItems.length}</span></li>
          <li className={'signup-btn'}>Sign Up</li>
        </ul>
      </div>
    </>
  )
}

const AppHeader = () => {
  const [iconClass, setIconClass] = useState('search-btn');

  // let iconClass = 'search-btn';
  const handleSearch = e => {
    if(e.target.value) {
      setIconClass('search-btn active');
    }
    else {
      setIconClass('search-btn');
    }

    // console.log(iconClass, '= > iconClass')
  }

  return (<>
    <div className={'app-header'}>
      <Logo />
      <HeaderMenus />
      <HeaderIcons handleSearch={handleSearch} searchIconClass={iconClass} />
    </div>
  </>)
}

export default AppHeader;