import { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from "redux-persist/lib/storage";
import { ReactNode } from "react";

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

export interface FilterState {
  name: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  number: string;
}

export interface ContactState {
  items: Contact[];
  isLoading: boolean;
  error: string | null;
};


export interface EditContactParams {
  id: string;
  updatedContact: Omit<Contact, "id">;
}

export interface ButtonProps {
  selected?: boolean;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  [key: string]: any;
}