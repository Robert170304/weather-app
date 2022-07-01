import React from 'react'
import {UilCelsius, UilTimes, UilLocationArrow, 
    UilTemperature, UilTear, UilWind } from '@iconscout/react-unicons'
import { iconUrlFromCode } from '../services/WeatherServices'
import { formatToLocalTime } from '../services/WeatherServices'
import Forecast from '../components/Forecast';



function DropDownContent(props) {

    function formatBg() {
        const thresold = 20 
        if (!props.displayCurrentLocation || props.displayCurrentLocation.temp <= thresold) {
          return 'from-blue-500 to-slate-100'
        }else{
          return 'from-orange-500 to-slate-100'
        }
    }

  return (
    <div className={`bg-gradient-to-b ${formatBg()} text-white p-4 fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full`}>
        <header className='flex items-center justify-between'>
            <UilTimes className="cursor-pointer transition ease-out hover:scale-125 mx-3" size={25} onClick={props.handleCloseMore} />
            <h3 className='text-slate-900 text-center font-semibold mx-3'>Current location weather</h3>
            <UilCelsius size={15} className="mx-3"/>
        </header>
        <section className='flex flex-wrap justify-around items-center w-full my-3 p-4 border border-b-2 border-x-0 border-t-0'>
            <div className='flex flex-col'>
                <p className='flex gap-x-2 my-1 font-light'><UilLocationArrow className="fill-red-800" /> CURRENT</p>
                <h3 className='text-xl capitalize'>{props.displayCurrentLocation === 'No current location' ? props.displayCurrentLocation : `${props.displayCurrentLocation.name}, ${props.displayCurrentLocation.country}`}</h3>
            </div>
            <div>
                <img src={iconUrlFromCode(props.displayCurrentLocation.icon)} className='w-10' alt="" />
                <p className='text-2xl'>{`${props.displayCurrentLocation.temp.toFixed()}`}°</p>
            </div>
            <div className='flex items-center justify-center my-6'>
                <p className='text-white text-xl font-extralight'>
                    {formatToLocalTime(props.displayCurrentLocation.dt, props.displayCurrentLocation.timezone)}
                </p>
            </div>
        </section>
        <section className='flex justify-center items-center flex-row gap-x-2'>
            <div className='flex flex-col gap-y-2 font-light text-5m items-center justify-center'>
                <UilTemperature size={25} className='m-2'/>
                Real fell
                <span className='font-medium ml-1'>{`${props.displayCurrentLocation.feels_like.toFixed()}°`}</span>
            </div>
            <div className='flex flex-col gap-y-2 font-light text-5m items-center justify-center'>
                <UilTear size={25} className='m-2'/>
                Humidity
                <span className='font-medium ml-1'>{`${props.displayCurrentLocation.humidity.toFixed()}%`}</span>
            </div>
            <div className='flex flex-col gap-y-2 font-light text-5m items-center justify-center'>
                <UilWind size={25} className='m-2'/>
                Wind
                <span className='font-medium ml-1'>{`${props.displayCurrentLocation.speed.toFixed()} km/h`}</span>
            </div>
        </section>
        <Forecast title="Today's forecast" textColor="text-slate-900" items={props.displayCurrentLocation.hourly}/>
    </div>
  )
}

export default DropDownContent