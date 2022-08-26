import { createSlice } from "@reduxjs/toolkit";
import { showNotification, gettingData } from "./asyncSlice";

const initialState = {
  free: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    added(state, action) {
      state.free = action.payload.free;
    },
  },
});

export const { added } = cartSlice.actions;
export default cartSlice.reducer;

export const sendData = () => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: `Pending...`,
        title: `Connecting`,
        message: `Making a secure connection with the database`,
      })
    );

    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);

      if (!res.ok) {
        throw new Error(`Error while connecting with database`);
      }

      dispatch(
        showNotification({
          status: `200`,
          title: `Success`,
          message: `Successfully loaded the data from the server`,
        })
      );

      const data = await res.json();
      dispatch(gettingData(data));
    } catch (error) {
      dispatch(
        showNotification({
          status: `400`,
          title: `Error while Connecting`,
          message: `Error:-${error.message}`,
        })
      );
    }
  };
};
