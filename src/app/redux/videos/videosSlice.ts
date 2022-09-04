import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  isLoading: false,
  isSuccess: false,
};

const API_KEY = "AIzaSyAderoPP5YCBaSigoo0hrnfXwWnJV48UjA";
const regionCode = "SA";

export const getVideos = createAsyncThunk("get/videos", async () => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=${regionCode}&key=${API_KEY}`
  );
  const data = await res.json();

  return data.items;
});

export const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getVideos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.videos = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
    });
  },
});

export default videosSlice.reducer;
export const { reset } = videosSlice.actions;
