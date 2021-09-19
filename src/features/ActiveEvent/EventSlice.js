import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventActive: "wedding",
};

const EventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      state.eventActive = action.payload.active;
    },
    unsetEvent: (state) => {
      state.eventActive = "";
    },
  },
});

export const { setEvent, unsetEvent } = EventSlice.actions;
export const selectEvent = (state) => state.event.eventActive;
export default EventSlice.reducer;
