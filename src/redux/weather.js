import { createSlice } from "@reduxjs/toolkit";
import { listener } from "./listener";

import { getWeatherFromCityName, getWeatherFromLocation } from "../connection/weather";

// TODO - Test code!
const WEATHER_COUNTRY = {
    cityName: "Delhi",
    country_name: "in"
}

// TODO - Test code!
const homeSelectors = {
    current: (state) => { return state.home?.current; },
}


export const weatherSlice = createSlice({
    name: "weather",
    initialState: {},
    reducers: {
        getWeather: (state, action) => {
            // Payload is a flag to reset weather info.
            if (action.payload) {
                return {};
            }
        },
        weatherReceived: (state, action) => {
            if (action.payload) {
                state.data = action.payload;
            }
        }
    }
});

export const selectWeather = (state) => { return state.weather.data };

export const weatherActions = weatherSlice.actions;

listener.startListening({
    actionCreator: weatherActions.getWeather,
    effect: async (action, listenerApi) => {
        const language = "en-us"; // TODO!

        try {
            const home = homeSelectors.current(listenerApi.getState());
        
            if (home && !!home.address_info && !!home.address_info.geometry) {
            const location = {
                latitude: home.address_info.geometry.location.lat,
                longitude: home.address_info.geometry.location.lng
            }
        
            let res = await getWeatherFromLocation(location, language);

            if (res?.main) {
                listenerApi(weatherActions.weatherReceived(res));
            } else {
                listenerApi(weatherActions.weatherReceived());
            }
            } else {
                const location = null; //yield select(currentLocationSelect);

                if (location) {
                    let res = await getWeatherFromLocation(location.coords, language);
                    if (res && res.main) {
                        listenerApi(weatherActions.weatherReceived(res));
                    } else {
                        listenerApi(weatherActions.weatherReceived());
                    }
                } else {
                    let res = await getWeatherFromCityName(WEATHER_COUNTRY.cityName, WEATHER_COUNTRY.country_name, language);
                    // console.log('sagaGetWeather-------->', res)

                    if (res && res.main) {
                        listenerApi(weatherActions.weatherReceived(res));
                    } else {
                        listenerApi(weatherActions.weatherReceived());
                    }
                }
            }
        } catch (e) {
            console.log('Catch GetWeather', e);
            listenerApi(weatherActions.weatherReceived());
        }
    }
})

export default weatherSlice.reducer;