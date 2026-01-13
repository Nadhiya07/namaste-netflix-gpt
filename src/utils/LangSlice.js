import { createSlice } from "@reduxjs/toolkit";

const LangSlice = createSlice({
  name: "language",
  initialState: {
    lang: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguage } = LangSlice.actions;
export default LangSlice.reducer;
