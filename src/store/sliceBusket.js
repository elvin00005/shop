import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  quantity: 0,
};

const busketSlice = createSlice({
  name: "busket",
  initialState,
  reducers: {
    addItemToBusket(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      } else {
        state.items.push({
          ...newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.quantity++;
      state.totalAmount += newItem.price;
    },
    removeItemFromBusket(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
      state.totalAmount -= existingItem.price;
      state.quantity--;
    },
  },
});

export const busketActions = busketSlice.actions;

export default busketSlice;
