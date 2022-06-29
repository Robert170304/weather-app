import React from 'react'
import {UilTemperature, 
    UilTear, 
    UilWind, 
    UilSun, 
    UilSunset} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/WeatherServices'

function TempDetails(props) {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>{props.weather.details}</p>
        </div>
        <div className='flex flex-row flex-wrap items-center justify-between text-white py-3'>
            <img src={iconUrlFromCode(props.weather.icon)} className='w-20 m-1.5' alt="" />
            <p className='text-5xl m-1.5'>{`${props.weather.temp.toFixed()}`}°</p>
            <div className='flex flex-col space-y-2 m-1.5'>
                <div className='flex font-light text-5m items-center justify-center'>
                    <UilTemperature size={18} className='mr-1'/>
                    Real fell:
                    <span className='font-medium ml-1'>{`${props.weather.feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex font-light text-5m items-center justify-center'>
                    <UilTear size={18} className='mr-1'/>
                    Humidity:
                    <span className='font-medium ml-1'>{`${props.weather.humidity.toFixed()}%`}</span>
                </div>
                <div className='flex font-light text-5m items-center justify-center'>
                    <UilWind size={18} className='mr-1'/>
                    Wind:
                    <span className='font-medium ml-1'>{`${props.weather.speed.toFixed()} km/h`}</span>
                </div>
            </div>
        </div> 
        <div className='flex flex-row flex-wrap items-center justify-center space-x-2 text-white text-sm py-3'>
            <UilSun/>
            <p className='font-light'>
                Rise: <span className='font-medium ml-1'>{formatToLocalTime(props.weather.sunrise, props.weather.timezone, "hh:mm a")}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSunset/>
            <p className='font-light'>
                Set: <span className='font-medium ml-1'>{formatToLocalTime(props.weather.sunset, props.weather.timezone, "hh:mm a")}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun/>
            <p className='font-light'>
                High: <span className='font-medium ml-1'>{`${props.weather.temp_max.toFixed()}°`}</span>
            </p>
            <p className='font-light'>|</p>
            <UilSun/>
            <p className='font-light'>
                Low: <span className='font-medium ml-1'>{`${props.weather.temp_min.toFixed()}°`}</span>
            </p>
        </div>
    </div>
  )
}

export default TempDetails