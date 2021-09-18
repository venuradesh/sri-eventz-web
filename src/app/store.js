import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "../features/ActiveEvent/EventSlice";

const store = configureStore({
  reducer: {
    event: EventSlice,
  },
});

export default store;
