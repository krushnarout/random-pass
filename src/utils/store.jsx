import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import channelSlice from "./channelSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    channel: channelSlice,
  },
});

export default store;
