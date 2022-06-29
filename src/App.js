import './App.css';
import React from 'react';
import TopBtns from './components/TopBtns';
import Inputs from './components/Inputs';
import TimeaAndLocation from './components/TimeaAndLocation';
import TempDetails from './components/TempDetails';
import Forecast from './components/Forecast';
import getFormattedData from './services/WeatherServices';
import { ToastContainer, toast } from 'react-toastify';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-toastify/dist/ReactToastify.css';
import 'react-notifications-component/dist/theme.css'
import Modal from './components/Modal';
import { UilAngleDown } from '@iconscout/react-unicons'
import DropDownContent from './components/DropDownContent';
import {motion, AnimatePresence} from 'framer-motion'


function App() {

  const [location, setLocation] = React.useState("")
  // const currentUserCity = localStorage.getItem("usercity");
  const userLocationCoords = localStorage.getItem("userCoords");
  const [query, setQuery] = React.useState({q:'berlin' })
  const [units, setUnit] = React.useState('metric')
  const [weather, setWeather] = React.useState(null)
  const [showMore, setShowMore] = React.useState(false)
  const [showDropDown, setShowDropDown] = React.useState(false)
  const [isPending, startTransition] = React.useTransition()
  const modalRef = React.useRef()
  const [userQuery, setUserQuery] = React.useState(JSON.parse(userLocationCoords))
  const [displayCurrentLocation, setDisplayCurrentLocation] = React.useState(null)

  React.useEffect(() => {
    (async function() {
      const msg = 'current location'
      toast.info('Fetching weather for ' + msg)
      await getFormattedData({...userQuery, units}).then((data) => {
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
        setDisplayCurrentLocation(data)
      })
    })()
  },[userQuery])
    

  React.useEffect(() => {
    (async function () {
      const msg = query.q ? query.q : 'current location'
      toast.info('Fetching weather for ' + msg)
      await getFormattedData({...query, units}).then((data) => {
        toast.success(`Successfully fetched weather for ${data.name}, ${data.country}`)
        setWeather(data)
      })
    })()
  },[query, units]);

  React.useEffect(() => {
    if (showMore || showDropDown) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }
  })

  // React.useEffect(() => {
  //   function getClickOutSide(e) {
  //     if(showMore && e.target !== modalRef.current) {
  //       setShowMore(false);
  //     }
  //   }
  //   window.addEventListener('click', getClickOutSide);
  //   return () => {
  //     window.removeEventListener('click', getClickOutSide);
  //   }
  // }, [showMore])

  function formatBg() {
    const thresold = units === 'metric'? 20 : 60
    if (!weather || weather.temp <= thresold) {
      return 'from-cyan-700 to-blue-700'
    }else{
      return 'from-yellow-700 to-orange-700'
    }
  }

  function handleCloseMore() {
    if (showMore) {
      setShowMore(false)
    } else if (showDropDown) {
      setShowDropDown(false)
    }
  }

  // function settingUserLocation() {
  //   if(location){
  //     startTransition(() => {
  //       handleCloseMore()
  //     })
  //     localStorage.setItem("usercity", location);
  //     localStorage.removeItem('userCoords');
  //     setQuery({q: location})
  //   }else if(location === "") {
  //     alert('please provide your city name')
  //   }
  // }

  function detectUserLocation() {
    startTransition(() => {
      handleCloseMore()
    })
    if (navigator.geolocation) {
      toast.info('Fetching your location')
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        let coords = {lat, lon}
        localStorage.setItem("userCoords",JSON.stringify(coords));
        localStorage.removeItem('usercity');
        setUserQuery(coords)
      })
    }
  }

  return (<>
    {showMore && <Modal showMore={showMore} 
      ref={modalRef}
      handleCloseMore={handleCloseMore} 
      // location={location}
      // setLocation={setLocation}
      // settingUserLocation={settingUserLocation} 
      isPending={isPending}
      detectUserLocation={detectUserLocation}/>} 
    <AnimatePresence>
      {showDropDown && 
      <motion.div key="content"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: { opacity: 1, height: 0 },
        collapsed: { opacity: 0, height: "-50%" }
      }}
      transition={{type:"spring", stiffness:"100", duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}>
        <DropDownContent 
        displayCurrentLocation={displayCurrentLocation}
        handleCloseMore={handleCloseMore} />
      </motion.div>}
    </AnimatePresence>
    <div className={`App mx-auto m-4 px-3 py-3 bg-gradient-to-br ${formatBg()} h-fit shadow-xl shadow-gray-400 md:py-5 md:px-32`}>
      {displayCurrentLocation && <motion.button type='button' whileTap={{scale: 0.9}} className='text-white inline-flex' onClick={() => setShowDropDown(true)}>
        <p>{`${displayCurrentLocation.name}, ${displayCurrentLocation.country}`}</p>
        <UilAngleDown size={20}/>
      </motion.button>}
      <TopBtns setQuery={setQuery} showMore={showMore} setShowMore={setShowMore}/>
      <Inputs setQuery={setQuery} units={units} setUnit={setUnit}/>
      {weather && (
        <>
          <TimeaAndLocation weather={weather}/>
          <TempDetails weather={weather}/>
          <Forecast title="hourly forecast" items={weather.hourly}/>
          <Forecast title="daily forecast" items={weather.daily}/>
        </>
      )}
      {/* <ReactNotifications /> */}
      <ToastContainer autoClose={5000} theme='colored' newestOnTop={true}/>
    </div>
    </>
  );
}

export default App;
