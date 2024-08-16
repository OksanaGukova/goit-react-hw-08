import { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";

export interface AuthPersistConfig {
  key: string;
  storage: typeof storage;
  whitelist: string[];
}

export interface User {
  name: string | null;
  email: string | null;
}

export interface AuthResponse {
  token: string;
  user: User
}

export interface AuthState {
    user: User;
  token: null | string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}


export interface Credentials {
  email: string;
  password: string;
  name?: string;
}

export interface RootState {
  auth: AuthState & PersistPartial;
  contacts: {
    items: never[];
    isLoading: boolean;
    error: null;
  };
  filters: {
    name: string;
  };
};