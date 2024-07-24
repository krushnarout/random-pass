import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isSidebarOpen: true,
    isThumbnailLarge: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
      state.isThumbnailLarge = !state.isThumbnailLarge;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
      state.isThumbnailLarge = false;
    },
    resetThumbnailSize: (state) => {
      state.isThumbnailLarge = true;
    },
  },
});

export const { toggleSidebar, closeSidebar, resetThumbnailSize } = appSlice.actions;
export default appSlice.reducer;
