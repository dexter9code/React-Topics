import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: null,
  visible: false,
  moviesData: null,
};

const UiSlice = createSlice({
  name: "Ui",
  initialState,
  reducers: {
    toggle(state) {
      state.visible = !state.visible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    gettingData(state, action) {
      state.moviesData = [action.payload];
    },
  },
});

export default UiSlice.reducer;

export const { showNotification, toggle, gettingData } = UiSlice.actions;
