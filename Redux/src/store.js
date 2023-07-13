import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./recuders/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
