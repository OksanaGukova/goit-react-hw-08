import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return { id: contactId };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, updatedContact }, thunkAPI) => {
    if (!id) {
      throw new Error("Contact ID is required");
    }

    try {
      const response = await axios.patch(`/contacts/${id}`, updatedContact);
      thunkAPI.dispatch(saveContact(updatedContact));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
