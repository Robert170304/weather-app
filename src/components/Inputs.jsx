import React from 'react'
import { UilSearch, UilFahrenheit, UilCelsius } from '@iconscout/react-unicons'

function Inputs(props) {
  const [city, setCity] = React.useState("")
  const ref = React.useRef(null);

  function handleSearchClick() {
    if(city !== "") {
      props.setQuery({q: city})
    }else if(city === "") {
      ref.current.focus();
    }
  }

  function chngUnitToCelsius() {
    if (props.units !== 'celsius') {
      props.setUnit('celsius')
    }
  }

  function chngUnitToFahrenheit() {
    if (props.units !== 'fahrenheit') {
      props.setUnit('fahrenheit')
    }
  }

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input type="text"
              ref={ref}
              placeholder='Search city'
              className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'
              onChange={(e) => setCity(e.target.value)} onKeyPress={(e) => e.key === 'Enter' ? handleSearchClick() : setCity(e.target.value)} />
             <UilSearch size={25} 
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={handleSearchClick} />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='matric' className='text-xl text-white font-light hover:scale-125 transition ease-out' onClick={chngUnitToCelsius}>
              <UilCelsius size={25} />
            </button>
            <p className="text-xl text-white mx-1">|</p>
            <button name='inperial' className='text-xl text-white font-light hover:scale-125 transition ease-out' onClick={chngUnitToFahrenheit}>
              <UilFahrenheit size={25} />
            </button>
        </div>
    </div>
  )
}

export default Inputs