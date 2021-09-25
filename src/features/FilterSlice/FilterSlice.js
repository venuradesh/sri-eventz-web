import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  level: "all",
  starRating: null,
};

const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload.level;
    },
    unsetLevel: (state) => {
      state.level = "all";
    },
    setStarRating: (state, action) => {
      state.starRating = action.payload.star;
    },
    unsetStarRating: (state) => {
      state.starRating = null;
    },
  },
});

export const { setLevel, unsetLevel, setStarRating, unsetStarRating } = FilterSlice.actions;
export default FilterSlice.reducer;
