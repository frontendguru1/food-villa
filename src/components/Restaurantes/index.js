import { useEffect, useState } from "react";
import { get } from "lodash";
import RestauranteCard from "../RestauranteCard";
import { AppConstant } from "../../common/AppConstant";
import "./style.scss";

const Restaurantes = () => {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(()=> {
    fetchRestauranteData();
  },[]);

  async function fetchRestauranteData() {
    const data = await fetch(AppConstant.restauranteListing);
    const json = await data.json()
    // console.log(json.data);
    setRestaurants(get(json.data, 'cards[2].data.data.cards'));
  }
  console.log(restaurants);

  return (
    <>
    <div className={'restaurantes-list'}>
      {
        restaurants.map(restaurant => {
          return (
            <RestauranteCard {...restaurant.data} />
          )
        })
      }
    </div>
    </>
  )
}

export default Restaurantes;
