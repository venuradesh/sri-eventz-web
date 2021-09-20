import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "../features/ActiveEvent/EventSlice";
import SectionSlice from "../features/ActiveSection/SectionSlice";

const store = configureStore({
  reducer: {
    event: EventSlice,
    section: SectionSlice,
  },
});

export default store;
