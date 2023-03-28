import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {},
    reducers: {
        clearModal: (state) => {
            state.type = null;
            state.data = null;
        },
        setModal: (state, action) => {
            state.type = action.payload.type.toString(); // Ensure type is a string!
            state.data = action.payload.data;
        },
    }
});

export const selectModal = (state) => { return state.modal };

export const { clearModal, setModal } = modalSlice.actions;

export default modalSlice.reducer;