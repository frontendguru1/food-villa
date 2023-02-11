import { AppConstant } from "../../common/AppConstant";
import starImg from '../../assets/img/star.svg';
import "./style.scss";

const RestauranteCard = ({name, cloudinaryImageId, cuisines, slaString, costForTwoString, avgRating}) => {
  return (
    <>
      <div className={'restaurante-card'}>
        <div className={'restaurante-img'}>
          <img src={AppConstant.RESTAURANT_IMG_URL+cloudinaryImageId} alt={name} />
            <div className={'card-btn'}>
              <button>Quick View </button>
            </div>
            <div className={'img-overlay'} />
          </div>
        <div className={'restaurant-info'}>
          <div className={'name'}>{name}</div>
          <div className={'cuisines'}>
            {cuisines && cuisines.join(", ")}
          </div>
          <div className={'meta-info'}>
            <div className={'delivery-time'}>{slaString}</div>
            <div className={'cost'}>{costForTwoString}</div>

            <div className={'rating'}>
              <img src={starImg} alt="star" />
              {avgRating}</div>
          </div>
          <div className={'promo-code'}>
          50% off | Use WELCOME50
          </div>
        </div>
      </div>
    </>
  )
}

export default RestauranteCard;
