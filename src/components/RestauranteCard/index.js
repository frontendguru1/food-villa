import { AppConstant } from "../../common/AppConstant";
import "./style.scss";

const RestauranteCard = ({name, cloudinaryImageId, cuisines, slaString, costForTwoString, avgRating}) => {
  return (
    <>
      <div className={'restaurante-card'}>
        <div className={'restaurante-img'}><img src={AppConstant.restaurantImgURL+cloudinaryImageId} alt={name} /></div>
        <div className={'name'}>{name}</div>
        <div className={'cuisines'}>
          {cuisines.map(cuisine => {
            return `${cuisine}, `
          })}
        </div>
        <div className={'meta-info'}>
          <div className={'rating'}>{avgRating}</div>
          <div className={'delivery-time'}>{slaString}</div>
          <div className={'cost'}>{costForTwoString}</div>
        </div>
      </div>
    </>
  )
}

export default RestauranteCard;
