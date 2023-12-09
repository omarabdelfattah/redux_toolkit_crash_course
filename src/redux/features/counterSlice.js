import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleIncrement: (state, action) => {
            state.value += action.payload
        },
        handleDecrement: (state, action) => {
            state.value += action.payload
        },
    },
});

export const {handleIncrement, handleDecrement } = counterSlice.actions;

export default counterSlice.reducer;