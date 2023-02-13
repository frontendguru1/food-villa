import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import restaurantDetailsSlice from "../slices/restaurantDetailsSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurantDetails: restaurantDetailsSlice
  }
});

export default store;
