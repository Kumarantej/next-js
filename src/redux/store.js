import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import youTubeReducer from "./Slices/youTubeSlice";
import youTubeChannelReducer from "./Slices/YouTubeChannelSlice";

const reducers = combineReducers({
  youTubeState: youTubeReducer,
  youTubeChannelState: youTubeChannelReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export default store;
