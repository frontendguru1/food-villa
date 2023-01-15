import React from "react";
import BannerImg from "../../assets/img/banner-img.jpg";
import Button from "../Button";
import "./style.scss";

const Banner = () => {
  return (
    <>
      <div className={'banner-container'}>
        <div className={'banner-left-col'}>
          <h1>it's not just<br />Food, <span>It's an Experience.</span></h1>
          <div className={'banner-btn'}>
            <Button label={'View More'} />
          </div>
          <div className={'banner-reviews'}></div>

        </div>
        <div className={'banner-img'}>
          <img src={BannerImg} alt="Banner" />
        </div>
      </div>
    </>
  )
}

export default Banner;