import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "auth",
    initialState: {},
    reducers: {
        getWeather: (state, action) => {
            // Payload is a flag to reset weather info.
            if (action.payload) {
                return {};
            } else {
                return state;
            }
        },
        weatherReceived: (state, action) => {
            if (action.payload) {
                state.data = action.payload;
            }

            return state;
            
        }
    }
});

export const selectWeather = (state) => { return state.weather.data };

export const { getWeather, weatherReceived } = weatherSlice.actions;

export default weatherSlice.reducer;