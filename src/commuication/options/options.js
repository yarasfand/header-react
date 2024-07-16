import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    header: {
        title: "SEGMENTS"
    }
}

const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state.header.title = action.payload.title
        },
        getTitle: (state) => {
            return state.header.title
        }
    }
})

export const { changeTitle, getTitle } = headerSlice.actions
export default headerSlice.reducer