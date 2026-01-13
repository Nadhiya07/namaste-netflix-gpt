import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./MovieSlice";
import gptReducer from "./GptSlice";
import langReducer from "./LangSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearchPage: gptReducer,
    language: langReducer,
  },
});

export default appStore;
