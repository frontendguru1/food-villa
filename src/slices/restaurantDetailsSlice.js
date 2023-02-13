import { createSlice } from "@reduxjs/toolkit";

const restaurantDetails = createSlice({
  name: 'restaurantDetails',
  initialState: {
    details: {},
  },
  reducers: {
    setRestaurantDetails: (state, action) => {
      // console.log(state, {...action.payload})
      state.details = {...state.details, ...action.payload};
      // state = data;
      // state = Object.assign(state, action.payload);
      // return details;
    }
  }
});

export const {setRestaurantDetails, getRestaurantDetails} = restaurantDetails.actions;
export default restaurantDetails.reducer;
