import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnectionUrl } from "../axiosOptions";


export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkApi) => {
    try {
        const response = await apiConnectionUrl.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk("contacts/addContacts", async (contact, thunkApi) => {
    try {
        const response = await apiConnectionUrl.post("/contacts", contact);
        return response.data;
    } catch (error) {   
        return thunkApi.rejectWithValue(error.message)
    }
})  

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (id, thunkApi) => {
    try {
        const response = await apiConnectionUrl.delete(`/contacts/${id}`)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
        
    }
})
