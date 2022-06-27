import { DateTime } from "luxon";

const API_KEY = 'c30f47ecf7cae8fd0a2aaf19ddb20285'
const BASE_URL = "https://api.openweathermap.org/data/2.5"

function getWetherData(infoType, searchParams) {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid: API_KEY})
    return fetch(url).then((res) => res.json());
}

function foramatCurrentWeather(data) {
    const {coord: {lat, lon},
            main: {temp,feels_like,temp_min,temp_max,pressure,humidity}, 
            name, 
            dt,
            sys:{country, sunrise, sunset},
            weather,
            wind: {speed}} = data
    const {main: details, icon} = weather[0]
    return {lat, lon, temp, feels_like, temp_min, temp_max, pressure, 
        humidity, name, dt, country, sunrise, sunset, details, icon, speed}
}


async function formatForecastWeather(data) {
    let {timezone, daily, hourly} = data
    daily = daily.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'ccc'),
            temp: d.temp.day,
            icon: d.weather[0].icon
        }
    })
    hourly = hourly.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
            temp: d.temp,
            icon: d.weather[0].icon
        }
    });

    return {timezone, daily , hourly}
}

async function getFormattedData (searchParams) {
    const formattedCurrentWeather = await getWetherData('weather', searchParams).then(foramatCurrentWeather)
    const {lat, lon} = formattedCurrentWeather
    const formattedForecastWeather = await getWetherData('onecall', {lat, lon, exclude: "current,minutely,alerts", units: searchParams.units})
    .then(formatForecastWeather)
    return {...formattedCurrentWeather, ...formattedForecastWeather}
}

function formatToLocalTime(secs, zone, format = "cccc, dd LLL, yyyy' | Local time: 'hh:mm a") {
     return DateTime.fromSeconds(secs).setZone(zone).toFormat(format)
}

const iconUrlFromCode = (code) => {
    return `http://openweathermap.org/img/wn/${code}.png`
}

export default getFormattedData;
export {formatToLocalTime, iconUrlFromCode}
