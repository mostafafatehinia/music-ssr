import { store } from "@/rtk/store";

import { apiPool } from "./base";

export async function getMusics() {
  try {
    const result = await store.dispatch(apiPool.endpoints.getMusics.initiate());
    return result;
  } catch (err) {
    throw err;
  }
}
