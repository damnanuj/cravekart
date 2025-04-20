import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import endpoints from "../../src/api/enpoints";

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
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
