import { createSlice } from "@reduxjs/toolkit";

export interface artDisplayState {
    toggled: boolean
}

const initialState: artDisplayState = {
    toggled: false
}

export const artDisplaySlice = createSlice({
    name: 'artDisplaySlice',
    initialState,
    reducers: {
        invert: (state) => {
            state.toggled = ! state.toggled
        }
    }
})