import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptPage: false,
  },
  reducers: {
    setGptPage: (state) => {
      state.gptPage = !state.gptPage;
    },
  },
});

export const { setGptPage } = gptSlice.actions;
export default gptSlice.reducer;
