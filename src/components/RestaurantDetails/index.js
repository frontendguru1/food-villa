import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppConstant } from "../../common/AppConstant";
import useRestaurantDetails from "../../Hooks/useRestaurantDetails";
import { addItem } from "../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";

const RestaurantDetails = () => {
  const { RESTAURANT_IMG_URL } = AppConstant;
  const {resId} = useParams();
  const [sameItems, setSameItem] = useState([]);
  useRestaurantDetails(resId);

  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items);
  // console.log(cartItems, '=> details cartItems')

  const addToCart = item => {
    // console.log("clicked");
    debugger;
    // const nestedItemArr = [];
    if(cartItems.some(e => e.id == item.id)) {
      // nestedItemArr.push(item);
      setSameItem(item);
      dispatch(addItem(sameItems));
    }else {
      dispatch(addItem(item));
    }
    
  }

  console.log(sameItems, '=>> sameItems');

  const restaurant = useSelector(store=> store.restaurantDetails.details);
  const bgColor = restaurant?.bgColor;
  const textColor = restaurant?.textColor;
  
  // const menuItems = Object.values(restaurant?.menu?.items);
  console.log(restaurant, '=> restaurant')

  /**
   * Render Menu Item
   */
  const RenderMenuItem = ({item}) => {
    const { name, description, cloudinaryImageId, isBestSeller, price } = item;
    return (
      <>
        <div className={'menu-item-container'}>
          <div className={'menu-item-desc'}>
            <div className={'item-title'}> {isBestSeller && (<span>★ Bestseller</span>)}
            <h3>{name}</h3> </div>
            <div className={'item-price'}>₹{price/100}</div>
            <div className={'item-desc'}>{description}</div>
            
            </div>
          <div className={'menu-item-img'}>
            {cloudinaryImageId && <img src={AppConstant.RESTAURANT_IMG_URL+ cloudinaryImageId} alt={name} />}
            <div>
              <button className={'add-cart-btn'} onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          </div>
        </div>
      </>
    )
  }

  /**
   * Render Cart Info
   */

  const RenderCartInfo = () => {
    return (
      <>
        <div>
          <h2>Cart</h2>
        </div>
      </>
    )
  }


  return (
    <>
      <div className={'restaurant-details-wrapper'}>
        <div className={'restaurant-details-top'} style={{backgroundColor: bgColor, color: textColor}}>
          <div className={'restaurant-img'}>
            <img src={RESTAURANT_IMG_URL+restaurant?.cloudinaryImageId} alt={restaurant?.name} />
          </div>
          <div className={'restaurant-details'}>
            <h2>{restaurant?.name}</h2>
            <div>{restaurant?.locality}, {restaurant?.area}, {restaurant?.city}</div>
            <div>{restaurant?.cuisines && restaurant?.cuisines.join(", ")}</div>
            <div>Rating - {restaurant?.avgRating}</div>
            <div>Cost for Two - ₹{restaurant?.costForTwo/100}</div>
            <div>Availability - {restaurant?.availability?.opened ? "Open" : "Closed"}</div>
        </div>

          {/* <div>
            <button onClick={addToCart}>Add to Cart</button>
          </div> */}

        </div>

      <div className={'restaurant-details-bottom'}>
        <div className={'menu-item-wrapper'}>
          {
            restaurant?.menu && Object.values(restaurant?.menu?.items).map((data) => {
              // console.log(data, '=>> data')
              return <RenderMenuItem key={data.id} item={data} />
            })
          }
        </div>

        <div className={'cart-info'}>
          <RenderCartInfo />
        </div>
        
      </div>

      </div>
    </>
  )
}

export default RestaurantDetails;