import { createSlice } from "@reduxjs/toolkit";

export interface authorsDisplayState {
    sortArguments: {
        sort: "name" | "birthYear",
        order: "asc" | "desc",
        artistCountry: string,
        search: string
    }
}

const initialState: authorsDisplayState = {
    sortArguments: {
        sort: "name",
        order: "asc",
        artistCountry: "",
        search: ""
    }
}

export const authorsDisplaySlice = createSlice({
    name: "authorsDisplaySlice",
    initialState,
    reducers: {
        sortRequest: (state, action) => {
            state.sortArguments = {
                ...state.sortArguments,
                sort: action.payload.sort,
                order: action.payload.order,
                artistCountry: action.payload.artistCountry,
                search: action.payload.search
            }
        }
    }
})

export const { sortRequest } = authorsDisplaySlice.actions

export default authorsDisplaySlice.reducer