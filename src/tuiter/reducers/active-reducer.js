import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
    name: "active",
    initialState: "home",
    reducers: {
        changeActive(state, action) {
            return action.payload
        }
    }
});

export const {changeActive} = activeSlice.actions;
export default activeSlice.reducer;
