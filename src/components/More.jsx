import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'
import {UilLocationPoint} from '@iconscout/react-unicons'
import {motion} from 'framer-motion'

function More(props) {

  return (<div className="modal" id="staticBackdrop" 
            data-bs-backdrop="static" data-bs-keyboard="false" 
            tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" 
            style={{display: props.showMore ? 'block' : 'none', background: props.showMore ? 'rgba(0,0,0,.8)' : ''}}>
      <motion.div  animate={{scale: 1}} initial={{scale: 0}} className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title font-medium text-3x">Set your location</h5>
                <button type="button" className="btn-close btn-sm" data-bs-dismiss="modal" aria-label="Close" onClick={props.handleCloseMore}></button>
            </div>
            <div className="modal-body">
            <input type="text"
                placeholder='Enter your city here'
                className='text-xl font-light p-2 w-full capitalize'
                onChange={(e) => props.setLocation(e.target.value)}/>
                OR 
                <button className='flex items-center justify-center' onClick={props.detectUserLocation}>
                    Detect your location 
                    <UilLocationPoint size={20}/>
                </button>
            </div>
            <div className="modal-footer">
                <button type="button" className="bg-midnight" data-bs-dismiss="modal" onClick={props.handleCloseMore}>Cancel</button>
                <motion.button type="button" className="bg-forestgreen" whileHover={{scale: 1.1}} onClick={props.settingUserLocation}>{props.isPending && <TailSpin color="#00BFFF" height={15} width={15} />}Save changes</motion.button>
            </div>
        </div>
      </motion.div>
  </div>     
  )
}

export default More