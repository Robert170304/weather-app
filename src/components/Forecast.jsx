import React from 'react'
import { iconUrlFromCode } from '../services/WeatherServices'

function Forecast(props) {
  return (
    <div>
        <div className='flex items-center justify-start mt-6'>
            <p className='text-white font-medium uppercase'>{props.title}</p>
        </div>
        <hr className='my-2'/>
        <div className='flex flex-row flex-wrap items-center justify-between text-white'>
            {props.items.map((item, id) => {
                return <div className='flex flex-col items-center justify-center m-1.5' key={id}>
                    <p className='font-light text-sm'>
                        {item.title}
                    </p>
                    <img src={iconUrlFromCode(item.icon)} className='w-12 my-1' alt="" />
                    <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Forecast