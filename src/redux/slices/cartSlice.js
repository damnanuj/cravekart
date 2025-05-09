import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(
        (item) => item._id === action.payload._id
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.totalQuantity -= 1;
      state.totalPrice -= action.payload.price;
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i._id === action.payload);
      if (item) item.quantity += 1;
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i._id === action.payload);
      if (item) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (cartItem) => cartItem._id !== action.payload
          );
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
