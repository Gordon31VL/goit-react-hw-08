import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_DEFAULT_URL

export const registerUser = createAsyncThunk("auth/register", async (userData, thunkApi) => {
    try {
        const response = await axios.post("users/signup", userData);
        axios.defaults.headers.common['Authorization'] = response.data.token;
        console.log(response.data)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkApi) => {
    console.log(userData)
    try {
        const response = await axios.post("users/login", userData);
        axios.defaults.headers.common['Authorization'] = response.data.token;
        console.log(response.data)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkApi) => {
    try {
        const response = await axios.post("users/logout");
        axios.defaults.headers.common['Authorization'] = '';
        console.log(response.data)
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        if (!token) {
            return thunkAPI.rejectWithValue('No token');
        }
        try {
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await axios.get('/users/current');
            console.log(response.data)

            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);