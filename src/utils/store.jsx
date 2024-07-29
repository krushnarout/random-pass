import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import channelSlice from "./channelSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    channel: channelSlice,
    chat: chatSlice,
  },
});

export default store;
