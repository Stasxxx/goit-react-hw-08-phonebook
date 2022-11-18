import { createSlice } from "@reduxjs/toolkit";
import { register,logIn, logOut, refreshUser } from "./operations";

const initialState = {
    user: { name: null, email: null, },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const addRegister = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const addLogIn = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
};

const addlogout = (state) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
};

const pandingRefreshing = state => {
    state.isRefreshing = true;
};

const fulfilledRefreshing = (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = true;
};

const rejectedRefreshing = state => {
    state.isRefreshing = false;
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(register.fulfilled, addRegister)
            .addCase(logIn.fulfilled, addLogIn)
            .addCase(logOut.fulfilled, addlogout)
            .addCase(refreshUser.pending, pandingRefreshing)
            .addCase(refreshUser.fulfilled, fulfilledRefreshing)
            .addCase(refreshUser.rejected, rejectedRefreshing)
});

export const authReducer = authSlice.reducer;