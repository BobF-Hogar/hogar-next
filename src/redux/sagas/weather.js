import { call, put, select, takeLatest } from "redux-saga/effects";
import { getWeather, weatherReceived } from "../weather";
import { getWeatherFromCityName, getWeatherFromLocation } from "../../connection/weather";

function selectHome(state) { return state.home?.current; }

// TODO - Test code!
const WEATHER_CONTRY = {
    cityName: "Delhi",
    country_name: "in"
}

function* sagaGetWeather(action) {
    const language = "en-us"; // TODO!

    try {
        const home = yield select(selectHome);
    
        if (home && !!home.address_info && !!home.address_info.geometry) {
          const location = {
            latitude: home.address_info.geometry.location.lat,
            longitude: home.address_info.geometry.location.lng
          }
    
          let res = yield getWeatherFromLocation(location, language);

          if (res?.main) {
            yield put(weatherReceived(res));
          } else {
            yield put(weatherReceived());
          }
        } else {
          const location = null; //yield select(currentLocationSelect);

          if (location) {
            let res = yield getWeatherFromLocation(location.coords, language);
            if (res && res.main) {
              yield put(weatherReceived(res));
            } else {
              yield put(weatherReceived());
            }
          } else {
            let res = yield getWeatherFromCityName(WEATHER_CONTRY.cityName, WEATHER_CONTRY.country_name, language);
            // console.log('sagaGetWeather-------->', res)

            if (res && res.main) {
              yield put(weatherReceived(res));
            } else {
              yield put(weatherReceived());
            }
          }
        }
      } catch (e) {
        console.log('Catche GetWeather', e);
        yield put(weatherReceived());
      }
}

function* watchGetWeather() {
    yield takeLatest(getWeather().type, sagaGetWeather);
}

// TODO - Listen for select home!

export const sagas = {
    sagaGetWeather,
}

export const watchers = {
    watchGetWeather,
}