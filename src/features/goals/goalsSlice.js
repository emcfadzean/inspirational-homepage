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
      state.goals = [action.payload, ...state.goals];
    },
    removeGoal: (state, action) => {
      const { id } = action.payload;
      state.goals = state.goals.filter((goal) => goal.id !== id);
    },
    updateGoal: (state, action) => {
      const { id } = action.payload;
      const updatedGoal = state.goals.filter((goal) => goal.id === id)[0];
      state.goals = [
        { ...updatedGoal, complete: !updatedGoal.complete },
        ...state.goals.filter((goal) => goal.id !== id),
      ];
    },
  },
  extraReducers: {},
});
export const { addGoal, removeGoal, updateGoal } = goalsSlice.actions;
export const selectGoals = (state) => state.goals.goals;
export default goalsSlice.reducer;
