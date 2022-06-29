import React from 'react'
import {UilCelsius, UilTimes, UilLocationArrow } from '@iconscout/react-unicons'
import { iconUrlFromCode } from '../services/WeatherServices'
import getFormattedData from '../services/WeatherServices';


function DropDownContent(props) {

    const [cityQueries, setCityQueries] = React.useState({q: ['london','sydney', 'tokyo', 'paris']})
    const [units, setUnits] = React.useState('metric')

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
                <h3 className='text-xl capitalize'>{props.displayCurrentLocation === 'No current location' ? props.displayCurrentLocation : `${props.displayCurrentLocation.name}, ${props.displayCurrentLocation.country}`}</h3>
            </div>
            <div>
                <img src={iconUrlFromCode(props.displayCurrentLocation.icon)} className='w-10' alt="" />
                <p className='text-2xl'>{`${props.displayCurrentLocation.temp.toFixed()}`}°</p>
            </div>
        </section>
        <div className='w-full my-2 flex justify-center items-center'>
            <section className='text-black w-auto p-4 md:w-6/12'>
                <ul className='flex flex-col'>
                    <li className='flex flex-row justify-between items-center w-full p-2 border border-b-2 border-x-0 border-t-0'>
                        <p>FAVORITES</p>
                        <p>Edit</p>
                    </li>
                    {cityQueries.q.map((q, id) => {
                        getFormattedData({q, units}).then((data) => {
                            return <li key={id}>{data.name}</li>
                            // return <li className='flex flex-row justify-between items-center text-xl w-full p-2 border border-b-2 border-x-0 border-t-0' key={id}>
                            //     <p className='font-medium'>{data.name}</p>
                            //     <div className='flex gap-x-2'>
                            //         <img src={iconUrlFromCode(data.icon)} className='w-7' alt="" />
                            //         <p className='text-2xl'>{`${data.temp.toFixed()}`}°</p>
                            //     </div>
                            // </li>
                        })
                    })}
                </ul>
            </section>
        </div>
    </div>
  )
}

export default DropDownContent