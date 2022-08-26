import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: "",
};

const paraSlice = createSlice({
  name: "paraChange",
  initialState,
  reducers: {
    onAddText: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { onAddText } = paraSlice.actions;

export default paraSlice.reducer;
