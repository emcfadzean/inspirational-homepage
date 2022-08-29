import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goals: [],
  status: "idle",
};

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action) => {
      console.log(action.payload); // { id: #, goal: description, complete: boolean }
      state.goals = [action.payload, ...state.goals];
    },
    removeGoal: (state, action) => {
      // to be completed
    },
    toggleComplete: (state, action) => {
      // to be completed
    },
  },
  extraReducers: {},
});
export const { addGoal, removeGoal, toggleComplete } = goalsSlice.actions;
export const selectGoals = (state) => state.goals.goals;
export default goalsSlice.reducer;
