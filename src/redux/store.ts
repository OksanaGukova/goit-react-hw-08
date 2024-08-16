import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { contactsReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";
import { filtersReducer } from "./filters/slice";
import { AuthPersistConfig, AuthState } from "../components/App/App.types";



const authPersistConfig: AuthPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};



export const store = configureStore({
  reducer: {
    auth: persistReducer<AuthState, any>(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});


export const persistor = persistStore(store);
