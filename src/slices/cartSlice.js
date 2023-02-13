import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      const cartItem = action.payload;

      state.items.push(cartItem);

      console.log(current(state))
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: state => {
      state.items = [];
    }
  }
});


export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
