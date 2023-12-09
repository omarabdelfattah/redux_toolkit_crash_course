import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("users/fetchUsers", async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
});

const initialState = {
    loading: false,
    data: [],
    error: null,
};

export const usersSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: { },
    extraReducers: (builder) => {
        builder
        .addCase(getUsers.pending, (state, action) => {
            state.loading = true
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        .addCase(getUsers.rejected , (state, action) => {
            state.loading = true
            state.error = action.error
        });
    },
});

export const {handleLogin, handleLogout} = usersSlice.actions;

export default usersSlice.reducer;