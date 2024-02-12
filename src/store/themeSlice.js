import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: "white",
  },
  reducers: {
    setToTheme: (state, data) => {
      state.theme = data.payload;
    },
  },
});

export const { setToTheme } = themeSlice.actions;

export default themeSlice;
