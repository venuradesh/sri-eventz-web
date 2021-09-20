import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: "timeline",
};

const SectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    setSection: (state, action) => {
      state.activeSection = action.payload.active;
    },

    unsetSection: (state) => {
      state.activeSection = "";
    },
  },
});

export const { setSection, unsetSection } = SectionSlice.actions;
export const selectSection = (state) => state.section.activeSection;
export default SectionSlice.reducer;
