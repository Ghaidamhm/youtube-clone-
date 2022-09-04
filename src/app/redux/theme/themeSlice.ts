import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toDark: (state) => {
      state.theme = "dark";
    },
    toLight: (state) => {
      state.theme = "light";
    },
  },
});

export default themeSlice.reducer;
export const { toDark, toLight } = themeSlice.actions;
