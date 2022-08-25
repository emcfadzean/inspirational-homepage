import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchWeather } from "./weatherAPI";

const initialState = {
  weather: {},
  status: "idle",
};

export const fetchAsync = createAsyncThunk("weather/fetchWeather", async () => {
  const response = await fetchWeather();
  const json = await response.json();
  // The value we return becomes the `fulfilled` action payload
  return json;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        //console.log("HERE", action.payload);
        state.status = "idle";
        state.weather = {
          city: action.payload.name,
          temp:
            Math.round((Number(action.payload.main.temp) - 273.15) * 10) / 10,
          description:
            action.payload.weather[0].main +
            ", " +
            action.payload.weather[0].description,
          icon: action.payload.weather[0].icon,
        };
        //console.log("Weather:", state.weather);
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const selectWeather = (state) => state.weather.weather;
export default weatherSlice.reducer;
