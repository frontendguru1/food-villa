import { useEffect, useState } from "react";
import { get } from "lodash";
import RestauranteCard from "../RestauranteCard";
import { AppConstant } from "../../common/AppConstant";
import "./style.scss";
import { Link } from "react-router-dom";
import Banner from "../Banner";

const Restaurantes = () => {
  const [restaurants, setRestaurants] = useState([]);
  
  useEffect(()=> {
    fetchRestauranteData();
  },[]);

  async function fetchRestauranteData() {
    const data = await fetch(AppConstant.RESTAURANT_LISTING_URL);
    // debugger;
    const json = await data.json();
    const dataList = json.data.cards;
    // console.log(json.data);
    const resList = dataList.filter(list => list.cardType == "seeAllRestaurants");
    console.log(resList, '=> resList')
    setRestaurants(get(resList[0], 'data.data.cards'));
    // cardType: "seeAllRestaurants"

  }
  // console.log(restaurants);

  return (
    <>
    <Banner />
    <div className={'restaurantes-list'}>
      {
        restaurants && restaurants.map(restaurant => {
          return (
           <Link to={'/restaurant/'+restaurant.data.id} key={restaurant.data.id}>
            <RestauranteCard {...restaurant.data} />
          </Link>
          )
        })
      }
    </div>
    </>
  )
}

export default Restaurantes;
