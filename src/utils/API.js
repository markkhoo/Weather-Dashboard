import axios from "axios";

const key = '22bb6e2db366aab8539ac22df7b32d3a';

const API = {
    searchCity: (city, unit) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${key}`)
    },
    searchLatLon: (lat, lon, unit) => {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&exclude=minutely,hourly&appid=${key}`)
    }
};

export default API;