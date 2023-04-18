import apiKey from "./api_key";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const URL_GET_BY_CITY_NAME = `${BASE_URL}q=`;

export function getWeatherFromCityName(cityName, country_code, language) {
  const url = `${URL_GET_BY_CITY_NAME}${cityName},${country_code}&APPID=${apiKey}&lang=${language || "en"}&units=metric`
  // console.log("GET_WEATHER::City_Name", JSON.stringify(url))

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET"
    }).then((response) => response.json())
      .then(res => {
        if (res) {
          resolve(res)
        }
      })
      .catch((error) => {
        console.log("RES_GET_WEATER::City_Name::error", error)
        reject(error)
      });
  })
}

export function getWeatherFromLocation(location, language) {
  const url = `${BASE_URL}lat=${location.latitude}&lon=${location.longitude}&APPID=${apiKey}&lang=${language || "en"}&units=metric`
  // console.log("GET_WEATHER::Location", JSON.stringify(url))

  return new Promise((resolve, reject) => {
    fetch(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET"
    })
      .then((response) => {
        // console.log("RES_GET_WEATER::Location", response.json())
        resolve(response.json())
      })
      .catch((error) => {
        reject(error)
      });
  })
}
