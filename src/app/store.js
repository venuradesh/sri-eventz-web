import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "../features/ActiveEvent/EventSlice";
import SectionSlice from "../features/ActiveSection/SectionSlice";
import UserSlice from "../features/UserSlice.js/userSlice";

const store = configureStore({
  reducer: {
    event: EventSlice,
    section: SectionSlice,
    user: UserSlice,
  },
});

export default store;
