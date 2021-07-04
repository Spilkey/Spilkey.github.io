import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
  value: false
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    toggle: (state) => {
      state.theme = state.theme !== 'light' ? 'light' : 'dark';
      state.value = !state.value;
    },
  },
});

export const { toggle } = styleSlice.actions;

export const selectStyle = (state) => state.style.theme;
export const selectStyleValue = (state) => state.style.value;

export default styleSlice.reducer;