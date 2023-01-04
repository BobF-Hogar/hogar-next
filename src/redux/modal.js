import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {},
    reducers: {
        clearModal: (state) => {
            return {};
        },
        setModal: (state, action) => {
            state = action.payload; // { type: "MODAL_WHATEVER", data: { if: needed }}
            state.type = state.type.toString(); // Ensure type is a string!
            return state;
        },
    }
});

export const selectModal = (state) => { return state.modal };

export const { clearModal, setModal } = modalSlice.actions;

export default modalSlice.reducer;