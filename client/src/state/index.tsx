import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction) => {},
    // setGlobalState: (state, action) => {
    //   return { ...state, ...action.payload };
    // },
  },
});

export const {} = globalSlice.actions;
export default globalSlice.reducer;
