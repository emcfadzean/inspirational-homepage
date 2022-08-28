import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice";
import quoteReducer from "../features/quote/quoteSlice";
import carouselReducer from "../features/carousel/carouselSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    quote: quoteReducer,
    carousel: carouselReducer,
  },
});
