import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {AppConstant} from '../common/AppConstant';
import { setRestaurantDetails } from "../slices/restaurantDetailsSlice";

const useRestaurantDetails = (resId) => {
  // const [restaurant, setRestaurant] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getRestaurantInfo();
  },[resId]);

  async function getRestaurantInfo() {
    const data = await fetch(AppConstant.RESTAURANT_DETAILS_URL + resId);
    const json = await data.json();
    // setRestaurant(json.data);
    dispatch(setRestaurantDetails(json.data));
  }
  // return restaurant;
};

export default useRestaurantDetails;
