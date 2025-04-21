import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import endpoints from "../../api/enpoints";

export const fetchMenuItems = createAsyncThunk(
  "menu/fetchMenuItems",
  async () => {
    const res = await axios.get(endpoints.getMenu);

    return res.data.data;
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    items: [],
    selectedCategory: "Pizza",
    filteredItems: [],
    selectedItem: {},
    loading: false,
    error: null,
  },

  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
      state.filteredItems = state.items.filter(
        (item) => item.category == payload
      );
      state.selectedItem = state.filteredItems[0]?.items[0];
    },
    setSelectedItem: (state, { payload }) => {
      state.selectedItem = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        // console.log(state.items);
        state.filteredItems = state.items.filter(
          (item) => item.category == state.selectedCategory
        );
        state.selectedItem = state.filteredItems[0]?.items[0];
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSelectedCategory, setSelectedItem } = menuSlice.actions;

export const selectMenuItems = (state) => state.menu.items;
export const selectFilteredItems = (state) => state.menu.filteredItems;
export const selectSelectedItem = (state) => state.menu.selectedItem;
export const selectSelectedCategory = (state) => state.menu.selectedCategory;

export default menuSlice.reducer;
