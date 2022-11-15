import { createSlice } from "@reduxjs/toolkit";
import { register } from "./operation";

const initialState = {
    user: { name: null, email: null, },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const addRegister = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder =>
        builder
            .addCase(register.fulfilled, )
});

export const authReducer = authSlice.reducer;