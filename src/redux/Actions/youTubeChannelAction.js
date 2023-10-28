import axios from "axios";
import {
  getChannelRequest,
  getChannelSuccess,
  getChannelFailure,
} from "../Slices/YouTubeChannelSlice";

const API_KEY = "AIzaSyCngUiHFC-khbq0g4hiNddBgsRibC96GPw";
const CHANNEL_API_URL = "https://www.googleapis.com/youtube/v3/channels";

// Async Action Creator using Redux Thunk
export const getYouTubeChannelAction = (channelId) => async (dispatch) => {
  try {
    // Dispatch the action to indicate the start of the API request
    dispatch(getChannelRequest());

    const response = await axios.get(CHANNEL_API_URL, {
      params: {
        part: "snippet,contentDetails,statistics",
        key: API_KEY,
        id: channelId,
      },
    });

    // Dispatch the success action with the response data
    dispatch(getChannelSuccess(response.data));
  } catch (error) {
    // Dispatch the failure action with the error information
    dispatch(getChannelFailure(error));
  }
};
