import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";
import { Contact, ContactState } from "../../components/App/App.types";



const initialState: ContactState = {
  items: [],
  isLoading: false,
  error: null,
};


const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, action: PayloadAction<Contact[]>) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        }
      )
      .addCase(
        fetchContacts.rejected,
        (state, action) => {
          state.isLoading = false;
            state.error = action.error.message || null; 
        }
      )
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        addContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.isLoading = false;
          state.error = null;
          state.items.push(action.payload);
        }
      )
      .addCase(
        addContact.rejected,
        (state, action) => {
          state.isLoading = false;
           state.error = action.error.message || null; 
        }
      )
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        deleteContact.fulfilled,
        (state, action: PayloadAction<{ id: string }>) => {
          state.isLoading = false;
          state.error = null;
          state.items = state.items.filter(
            (contact) => contact.id !== action.payload.id
          );
        }
      )
      .addCase(
        deleteContact.rejected,
        (state, action) => {
          state.isLoading = false;
           state.error = action.error.message || null; 
        }
      )
      .addCase(editContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        editContact.fulfilled,
        (state, action: PayloadAction<Contact>) => {
          state.isLoading = false;
          state.error = null;
          const index = state.items.findIndex(
            (contact) => contact.id === action.payload.id
          );
          if (index !== -1) {
            state.items[index] = action.payload;
          }
        }
      )
      .addCase(editContact.rejected, (state, action) => {
        state.isLoading = false;
       state.error = action.error.message || null; 
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
