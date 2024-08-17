import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterState } from "../../components/App/App.types";


const initialState: FilterState  = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
