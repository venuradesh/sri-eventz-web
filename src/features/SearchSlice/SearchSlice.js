import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
};

const SearchSlice = createSlice({
  name: "keyword",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload.keyword;
    },
    unsetKeyword: (state) => {
      state.keyword = "";
    },
  },
});

export const { setKeyword, unsetKeyword } = SearchSlice.actions;
export default SearchSlice.reducer;
