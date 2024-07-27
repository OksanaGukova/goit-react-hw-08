import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/slice";
import filtersSlice from "./filters/slice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersSlice,
  },
});
