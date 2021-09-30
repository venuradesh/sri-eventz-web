import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    profilePhoto: "",
    dbId: "",
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.user.profilePhoto = action.payload.profilePhoto;
      state.user.dbId = action.payload.dbId;
    },

    unsetUser: (state) => {
      state.user.name = "";
      state.user.email = "";
      state.user.profilePhoto = "";
      state.user.dbId = "";
    },
  },
});

export const { setUser, unsetUser } = UserSlice.actions;
export const selectUser = (state) => state.user.user;
export default UserSlice.reducer;
