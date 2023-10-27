import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import youTubeReducer from "./Slices/youTubeSlice";

const reducers = combineReducers({
  youTubeState: youTubeReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
});

export default store;
