import React from 'react'
import {UilCelsius, UilTimes, UilLocationArrow } from '@iconscout/react-unicons'
import { iconUrlFromCode } from '../services/WeatherServices'


function DropDownContent(props) {
  return (
    <div className='bg-gradient-to-b from-blue-500 to-slate-50 text-white p-4 fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-full'>
        <header className='flex items-center justify-between'>
            <UilTimes className="cursor-pointer transition ease-out hover:scale-125" size={25} onClick={props.handleCloseMore} />
            <h4 className='text-xl text-slate-900 font-semibold'>Locations</h4>
            <UilCelsius size={15} />
        </header>
        <section className='flex justify-around items-center w-full my-3 p-4 border border-b-2 border-x-0 border-t-0'>
            <div className='flex flex-col'>
                <p className='flex gap-x-2 my-1 font-light'><UilLocationArrow className="fill-red-800" /> CURRENT</p>
                <h3 className='text-xl'>Petlad</h3>
                <span className='text-sm font-light'>India</span>
            </div>
            <div>
                <img src={iconUrlFromCode(props.weather.icon)} className='w-10' alt="" />
                <p className='text-2xl'>{`${props.weather.temp.toFixed()}`}°</p>
            </div>
        </section>
        <div className='w-full h-full my-2'>
            <section className='text-black w-auto p-4 md:w-6/12'>
                <ul className='flex flex-col'>
                    <li className='flex flex-row justify-between items-center w-full p-2 border border-b-2 border-x-0 border-t-0'>
                        <p>FAVORITES</p>
                        <p>Edit</p>
                    </li>
                    <li className='flex flex-row justify-between items-center text-xl w-full p-2 border border-b-2 border-x-0 border-t-0'>
                        <p className='font-medium'>London</p>
                        <div className='flex gap-x-2'>
                            <img src={iconUrlFromCode(props.weather.icon)} className='w-7' alt="" />
                            <p className='text-2xl'>{`${props.weather.temp.toFixed()}`}°</p>
                        </div>
                    </li>
                    <li className='flex flex-row justify-between items-center text-xl w-full p-2 border border-b-2 border-x-0 border-t-0'>
                        <p className='font-medium'>Sydney</p>
                        <div className='flex gap-x-2'>
                            <img src={iconUrlFromCode(props.weather.icon)} className='w-7' alt="" />
                            <p className='text-2xl'>{`${props.weather.temp.toFixed()}`}°</p>
                        </div>
                    </li>
                    <li className='flex flex-row justify-between items-center text-xl w-full p-2 border border-b-2 border-x-0 border-t-0'>
                        <p className='font-medium'>Tokyo</p>
                        <div className='flex gap-x-2'>
                            <img src={iconUrlFromCode(props.weather.icon)} className='w-7' alt="" />
                            <p className='text-2xl'>{`${props.weather.temp.toFixed()}`}°</p>
                        </div>
                    </li>
                    <li className='flex flex-row justify-between items-center text-xl w-full p-2 border border-b-2 border-x-0 border-t-0'>
                        <p className='font-medium'>Paris</p>
                        <div className='flex gap-x-2'>
                            <img src={iconUrlFromCode(props.weather.icon)} className='w-7' alt="" />
                            <p className='text-2xl'>{`${props.weather.temp.toFixed()}`}°</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    </div>
  )
}

export default DropDownContent