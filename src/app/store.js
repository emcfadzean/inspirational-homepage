import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlice";
import quoteReducer from "../features/quote/quoteSlice";
import carouselReducer from "../features/carousel/carouselSlice";
import goalsReducer from "../features/goals/goalsSlice";

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    quote: quoteReducer,
    carousel: carouselReducer,
    goals: goalsReducer,
  },
});
