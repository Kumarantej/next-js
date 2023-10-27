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
    getYouTubeVideos(state, actions) {
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
  getYouTubeChannelsSuccess,
} = actions;

export default reducer;
// export const YouTubeAction = YouTubeSlice.actions;
// export default YouTubeAction;
