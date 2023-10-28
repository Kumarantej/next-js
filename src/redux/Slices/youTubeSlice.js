import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  videos: [],
};
const YouTubeSlice = createSlice({
  name: "youTubeVideos",
  initialState,

  reducers: {
    getYouTubeVideos(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getYouTubeVideosSuccess(state, action) {
      return {
        ...state,
        loading: false,
        videos: action.payload.data,
      };
    },
    getYouTubeVideosFail(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});
const { actions, reducer } = YouTubeSlice;
export const {
  getYouTubeVideos,
  getYouTubeVideosSuccess,
  getYouTubeVideosFail,
} = actions;

export default reducer;
