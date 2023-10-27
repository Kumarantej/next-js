import axios from "axios";
import {
  getYouTubeVideos,
  getYouTubeVideosSuccess,
  getYouTubeVideosFail,
} from "../Slices/youTubeSlice";

const API_KEY = "AIzaSyCngUiHFC-khbq0g4hiNddBgsRibC96GPw";
const API_URL = "https://www.googleapis.com/youtube/v3/videos";

export const getYouTubeVideoAction = async (dispatch) => {
  try {
    dispatch(getYouTubeVideos());

    const response = await axios.get(API_URL, {
      params: {
        part: "snippet,contentDetails,statistics,topicDetails,status,recordingDetails,player",
        maxResults: 100,
        key: API_KEY,
        chart: "mostPopular",
        regionCode: "IN",
        pageToken: "CCgQAA",
      },
    });

    dispatch(getYouTubeVideosSuccess(response));
  } catch (error) {
    dispatch(getYouTubeVideosFail(error));
  }
};
