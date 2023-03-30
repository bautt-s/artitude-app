import { createSlice } from "@reduxjs/toolkit";

export interface artDisplayState {
    sortArguments: {
        sort: "name" | "artist" | "year",
        order: "asc" | "desc",
        artistCountry: string,
        search: string
    }
}

const initialState: artDisplayState = {
    sortArguments: {
        sort: "name",
        order: "asc",
        artistCountry: "",
        search: ""
    }
}

export const artDisplaySlice = createSlice({
    name: "artDisplaySlice",
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

export const { sortRequest } = artDisplaySlice.actions

export default artDisplaySlice.reducer