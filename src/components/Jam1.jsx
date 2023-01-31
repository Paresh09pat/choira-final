import React from 'react'
import './jam.css'
import video from './video/20728412.mp4'
import imagSnip from './video/snip1.png'

const Jam1 = () => {
  return (
    <div className='jam'>
        <div className='jamming-outer1'>
            <div className='inner-Part'>
                <div><video src={video} width="900" height="600" controls="controls" autoplay="true" className='videoJam' /></div>
            </div>
            <div className='foot1'>
                <div><img src={imagSnip} alt="" className='footHed' /></div>
                <button className='endJam1'>End Jam</button>
                <div className='speaker'><i class="fa-solid fa-volume-high"></i></div>
                <div className='video'><i class="fa-solid fa-video"></i></div>
                <div className='mic'><i class="fa-solid fa-microphone-slash"></i></div>
            </div>
        </div>
    </div>
  )
}

export default Jam1