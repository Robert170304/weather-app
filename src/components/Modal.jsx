import React from 'react'
import {UilLocationPoint, UilTimes } from '@iconscout/react-unicons'
import {motion} from 'framer-motion'

function Modal(props) {
  return (
    <div className="modal-bg flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50 backdrop-blur-sm"
    style={{background: props.showMore ? 'rgba(0,0,0,.8)' : ''}}>
        <motion.div animate={{scale: 1}} initial={{scale: 0}} className='md:w-1/2 py-2 px-3 w-full rounded bg-white'>
            <header className='m-2 text-xl flex items-center justify-between'>
                <h5 className="font-medium text-3x uppercase">Set your location</h5>
                <UilTimes className="mx-1 cursor-pointer transition ease-out hover:scale-125" size={25} onClick={props.handleCloseMore}/>
            </header>
            <div className='body flex items-center justify-center flex-col p-2 gap-x-0.5' style={{borderBottom: '1px solid lightgray', borderTop: '1px solid lightgray'}}>
                <input type="text"
                    placeholder='Enter your city or town here'
                    className='text-xl font-light p-2 my-1 w-full capitalize'
                    onChange={(e) => props.setLocation(e.target.value)}
                />
                <span className='m-1.5'>OR</span>
                <motion.button whileTap={{scale: !props.location && 0.9}} type="button" 
                className={`flex items-center justify-center text-white p-2 bg-red-${props.location ? 500 : 700} cursor-${props.location && 'not-allowed'} font-medium`} 
                onClick={props.detectUserLocation}
                disabled={props.location}>
                    Use current location 
                    <UilLocationPoint className="mx-1" size={20}/>
                </motion.button>
            </div> 
            <footer className='flex items-center justify-end p-1.5'>
                <button type="button" className='bg-green-600 w-auto px-3 py-1 m-1 text-white font-medium' 
                onClick={props.settingUserLocation}>
                    Save changes
                </button>
            </footer>
        </motion.div>
    </div>
  )
}

export default Modal