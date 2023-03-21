import { createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
    toggled: boolean
}

const initialState: DarkModeState = {
    toggled: false
}

export const darkSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        invert: (state) => {
            state.toggled = ! state.toggled
        }
    }
})

export const { invert } = darkSlice.actions

export default darkSlice.reducer