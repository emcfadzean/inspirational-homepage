import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchQuote } from "./quoteAPI";

const initialState = {
  quote: {},
  status: "idle",
};

export const fetchAsync = createAsyncThunk("quote/fetchQuote", async () => {
  const response = await fetchQuote();
  const json = await response.json();
  // The value we return becomes the `fulfilled` action payload
  return json;
});

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        const { title, author, quote, background, permalink } =
          action.payload.contents.quotes[0];
        state.status = "idle";
        state.quote = {
          title: title,
          author: author,
          quote: quote,
          background: background,
          cite: permalink,
        };
      })
      .addCase(fetchAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const selectQuote = (state) => state.quote.quote;
export default quoteSlice.reducer;
