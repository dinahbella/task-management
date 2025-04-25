import { createSlice } from "@reduxjs/toolkit";

const getInitialUser = () => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("userInfo");
    return storedUser ? JSON.parse(storedUser) : null;
  }
  return null;
};

const initialState = {
  user: getInitialUser(),
  isSidebarOpen: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      }
    },
    logOut: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("userInfo");
      }
    },
    setOpenSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setCredentials, logOut, setOpenSidebar } = authSlice.actions;
export default authSlice.reducer;
