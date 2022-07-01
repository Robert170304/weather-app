import React from 'react'
import {UilLocationPoint, UilTimes } from '@iconscout/react-unicons'
import {motion} from 'framer-motion'

function Modal(props) {
  return (
    <div className="modal-bg flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-50"
    style={{background: props.showMore ? 'rgba(0,0,0,.8)' : ''}}>
        <motion.div animate={{scale: 1}} initial={{scale: 0}} className='md:w-1/2 py-2 px-3 w-full m-4 rounded bg-white'>
            <header className='m-2 text-xl flex items-center justify-between border-b-2'>
                <h5 className="font-medium text-3x uppercase">Set your location</h5>
                <UilTimes className="mx-1 cursor-pointer transition ease-out hover:scale-125" size={25} onClick={props.handleCloseMore}/>
            </header>
            <footer className='flex items-center justify-around p-1.5'>
                <motion.button whileTap={{scale: 0.9}} type="button" 
                className='flex items-center justify-center p-2 font-medium text-red-900'
                onClick={props.detectUserLocation}>
                    Use current location 
                    <UilLocationPoint className="mx-1" size={20}/>
                </motion.button>
            </footer>
        </motion.div>
    </div>
  )
}

export default Modal