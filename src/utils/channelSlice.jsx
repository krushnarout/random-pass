import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";

export const fetchChannelDetails = createAsyncThunk(
  "channel/fetchChannelDetails",
  async (channelId) => {
    const response = await fetch(YOUTUBE_CHANNEL_API + channelId);
    const data = await response.json();
    if (data.items.length === 0) {
      throw new Error("No channel details found");
    }
    return {
      channelId,
      channelLogo: data.items[0].snippet.thumbnails.default.url,
    };
  }
);

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    channels: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchChannelDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.channels[action.payload.channelId] = action.payload.channelLogo;
      })
      .addCase(fetchChannelDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default channelSlice.reducer;
