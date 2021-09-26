import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  starRating: 1,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setStarRating: (state, action) => {
      state.starRating = action.payload.star;
    },
    unsetStarRating: (state) => {
      state.starRating = null;
    },
  },
});

export const { setStarRating, unsetStarRating } = FilterSlice.actions;
export default FilterSlice.reducer;
