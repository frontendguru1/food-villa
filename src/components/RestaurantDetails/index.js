import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppConstant } from "../../common/AppConstant";
import useRestaurantDetails from "../../Hooks/useRestaurantDetails";
import { addItem } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

import "./style.scss";

const RestaurantDetails = () => {
  const { RESTAURANT_IMG_URL } = AppConstant;
  const {resId} = useParams();
  const restaurant = useRestaurantDetails(resId);

  const dispatch = useDispatch();
  console.log(restaurant)

  const addToCart = () => {
    // console.log("clicked");
    dispatch(addItem("Milk"))
  }

  return (
    <>
      <div className={'restaurant-details-wrapper'}>
        {/* <h2>Restaurant Details will come here.. Res Id {resId}</h2> */}
        <div className={'restaurant-img'}>
          <img src={RESTAURANT_IMG_URL+restaurant?.cloudinaryImageId} alt={restaurant?.name} />
        </div>
        <div className={'restaurant-details'}>
          <h2>{restaurant?.name}</h2>
          <div>{restaurant?.city}, {restaurant?.area}</div>
          <div>{restaurant?.cuisines.join(", ")}</div>
          <div>
            <button onClick={addToCart}>Add to Cart</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default RestaurantDetails;