import { configureStore } from "@reduxjs/toolkit";

import paraReducer from "../features/paraSlice";
import uiReducer from "../features/asyncSlice";
import cartReducer from "../features/actionCreater";

export const store = configureStore({
  reducer: {
    paraChange: paraReducer,
    Ui: uiReducer,
    cart: cartReducer,
  },
});
