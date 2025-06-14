import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiConnectionUrl } from "../axiosOptions";


export const registerUser = createAsyncThunk("auth/register", async (userData, thunkApi) => {
    try {
        const response = await apiConnectionUrl.post("users/signup", userData);
        apiConnectionUrl.defaults.headers.common['Authorization'] = response.data.token;
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkApi) => {
    try {
        const response = await apiConnectionUrl.post("users/login", userData);
        apiConnectionUrl.defaults.headers.common['Authorization'] = response.data.token;
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})

export const logoutUser = createAsyncThunk("auth/logout", async (_, thunkApi) => {
    try {
        const response = await apiConnectionUrl.post("users/logout");
        apiConnectionUrl.defaults.headers.common['Authorization'] = '';
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
            apiConnectionUrl.defaults.headers.common.Authorization = `Bearer ${token}`;
            const response = await apiConnectionUrl.get('/users/current');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);