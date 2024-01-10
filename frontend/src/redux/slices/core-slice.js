import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../../constants/constants";
import { request } from "./requests/request";
import getuniqueValuesByKey from "../../utils/unique-values-by-key";

export const getCores = createAsyncThunk("getCores", async ({}, thunkAPI) => {
  try {
    return request(ENDPOINTS.getCores, "GET");
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  cores: [],
  statuses: [],
  original_launches: [],
  water_landings: [],
  loading: false,
};

const coreSlice = createSlice({
  name: "cores",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCores.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCores.fulfilled, (state, { payload }) => {
      if (payload && payload.length > 0) {
        state.statuses = getuniqueValuesByKey(payload, "status");
        state.original_launches = getuniqueValuesByKey(
          payload,
          "original_launch"
        );
        state.water_landings = getuniqueValuesByKey(payload, "water_landing");
        state.cores = payload;
      } else {
        console.warn("No cores were fetched");
      }
      state.loading = false;
    });
  },
});

export const {} = coreSlice.actions;
export default coreSlice.reducer;
