import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, refreshUser, registerUser } from "./operations";
const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const slice = createSlice({
    name: "auth",
    initialState: {
        item: {
            name: null,
            email: null,
        },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
        isloading: false,
        error: null
    },

    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, handlePending)
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = null;
                state.item = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(registerUser.rejected, handleRejected)
            .addCase(loginUser.pending, handlePending)
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isloading = false;
                state.error = null;
                state.item = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(loginUser.rejected, handleRejected)
            .addCase(logoutUser.pending, handlePending)
            .addCase(logoutUser.fulfilled, (state) => {
                state.isloading = false;
                state.error = null;
                state.item = {
                    name: null,
                    email: null,
                }
                state.token = null;
                state.isLoggedIn = false;
                state.isRefreshing = false;
            })
            .addCase(logoutUser.rejected, handleRejected)
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
                state.isLoading = true;
                state.error = null;
              })
              .addCase(refreshUser.fulfilled, (state, action) => {
                state.isRefreshing = false;
                state.isLoggedIn = true;
                state.item = action.payload;
                state.error = null;
              })
              .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
                state.isLoggedIn = false;
                state.token = null;
                state.item = { name: null, email: null };
              }); 

    }
})

export default slice.reducer