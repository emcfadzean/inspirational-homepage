import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchImages } from "./carouselAPI";

const initialState = {
  carousel: [],
  status: "idle",
};

export const fetchAsync = createAsyncThunk("carousel/fetchImages", async () => {
  const response = await fetchImages();
  const json = await response.json();
  // The value we return becomes the `fulfilled` action payload
  return json;
});

export const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        console.log("Carousel Slice Fetch Payload:", action.payload);
        state.status = "idle";
        state.carousel = action.payload;
        console.log(state.carousel);
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const selectCarousel = (state) => state.carousel.carousel;
export default carouselSlice.reducer;
