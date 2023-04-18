import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
    type?: string,
    data?: any,
}

export const modalSlice = createSlice({
    name: "modal",
    initialState: {},
    reducers: {
        clear: (state: ModalState) => {
            state.type = null;
            state.data = null;
        },
        set: (state: ModalState, action) => {
            state.type = action.payload.type.toString(); // Ensure type is a string!
            state.data = action.payload.data;
        },
    }
});

export const modalSelectors = {
    type: (state) => { return state.modal.type; },
    data: (state) => { return state.modal.data; },
};

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;