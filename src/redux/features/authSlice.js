import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false,
    user: {},
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        handleLogin: (state) => {
            state.isLogged = true;
            state.user = {
                first_name: "Omar",
                last_name: "Abdelfattah",
                job: "Web developer"
            }
        },
        handleJobChange: (state, job) => {
          state.user.job = job.payload
        },
        handleLogout: (state) => {
            state.isLogged = false
        },
        handleResetJob: (state) => {
          state.user.job = "Web developer"
        }
    },
});

export const {handleLogin, handleLogout, handleJobChange, handleResetJob} = authSlice.actions;

export default authSlice.reducer;