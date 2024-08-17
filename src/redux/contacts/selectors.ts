import { createSelector } from "@reduxjs/toolkit";
import { Contact, RootState } from "../../components/App/App.types";

export const selectContacts = (state: RootState) => state.contacts.items;

export const selectIsLoading = (state: RootState) => state.contacts.isLoading;

export const selectError = (state: RootState) => state.contacts.error;

export const selectNameFilter = (state: RootState) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts: Contact[], filter: string): Contact[] => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(normalizedFilter)
    );
  }
);
