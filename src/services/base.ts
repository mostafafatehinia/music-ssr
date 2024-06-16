import type { Action, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

import { RootState } from "@/rtk/store";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export interface GetMusictResultType {
  id: number;
  title: string;
  image: string;
  artist_name: string;
  album_name: null | string;
}

export const apiPool = createApi({
  reducerPath: "apiPool",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL + "/api",
  }),
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getMusics: build.query<GetMusictResultType[], void>({
      query: () => "/musics",
    }),
  }),
});
