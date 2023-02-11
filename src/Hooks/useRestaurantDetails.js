import { useState, useEffect } from "react";
import {AppConstant} from '../common/AppConstant';

export default useRestaurantDetails = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  },[]);

  async function getRestaurantInfo() {
    const data = await fetch(AppConstant.RESTAURANT_DETAILS_URL + resId);
    const json = await data.json();
    setRestaurant(json.data);
  }
  return restaurant;
};
