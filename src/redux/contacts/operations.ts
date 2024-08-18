import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ContactsProps,
  EditContactParams,
} from "../../components/App/App.types";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk<
  ContactsProps[],
  void,
  { rejectValue: string }
>("contacts/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});

export const addContact = createAsyncThunk<
  ContactsProps,
  Omit<ContactsProps, "id">,
  { rejectValue: string }
>("contacts/addContact", async (contact, thunkAPI) => {
  try {
    const response = await axios.post("/contacts", contact);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});

export const deleteContact = createAsyncThunk<
  { id: number },
  number,
  { rejectValue: string }
>("contacts/deleteContact", async (contactId, thunkAPI) => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    return { id: contactId };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});


export const editContact = createAsyncThunk<
  ContactsProps,
  EditContactParams,
  { rejectValue: string }
>("contacts/editContact", async ({ id, updatedContact }, thunkAPI) => {
  try {
    console.log("ID in editContact:", id);
    const response = await axios.patch<ContactsProps>(
      `/contacts/${id}`,
      updatedContact
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    } else {
      return thunkAPI.rejectWithValue("An unknown error occurred");
    }
  }
});
