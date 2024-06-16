import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

interface InitialTitleStateType {
  title: string;
}

const initialState: InitialTitleStateType = {
  title: "",
};
export const searchTitleSlice = createSlice({
  name: "searchTitle",
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
  },
});

export const { changeTitle } = searchTitleSlice.actions;

export const selectTitle = (state: RootState) => state.searchTitle;

export default searchTitleSlice.reducer;
