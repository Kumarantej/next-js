import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  channel: [],
};

const YouTubeChannelSlice = createSlice({
  name: "getChannel",
  initialState,
  reducer: {
    getChannelRequest(state, action) {
      return {
        ...state,
        loading: true,
      };
    },
    getChannelSuccess(state, action) {
      return {
        ...state,
        loading: false,
        channel: action.payload.data,
      };
    },
    getChannelFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

const { actions, reducer } = YouTubeChannelSlice;
export const { getChannelRequest, getChannelSuccess, getChannelFailure } =
  actions;

export default reducer;
