import { configureStore } from "@reduxjs/toolkit";
import EventSlice from "../features/ActiveEvent/EventSlice";
import SectionSlice from "../features/ActiveSection/SectionSlice";
import UserSlice from "../features/UserSlice.js/userSlice";
import FilterSlice from "../features/FilterSlice/FilterSlice";
import SearchSlice from "../features/SearchSlice/SearchSlice";

const store = configureStore({
  reducer: {
    event: EventSlice,
    section: SectionSlice,
    user: UserSlice,
    filter: FilterSlice,
    keyword: SearchSlice,
  },
});

export default store;
