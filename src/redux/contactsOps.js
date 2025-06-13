import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_MOCKAPI_URL

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContacts", async (contact, thunkApi) => {
    try {
        const response = await axios.post("/contacts", contact);
        return response.data;
    } catch (error) {   
        return thunkApi.rejectWithValue(error.message)
    }
})  

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${id}`)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
        
    }
})
