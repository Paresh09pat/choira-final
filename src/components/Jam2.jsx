import React from 'react'
import './jam.css'
import imagSnip from './video/snip1.png'

const Jam2 = () => {
  return (
    <div className='jam'>
        <div className='jamming-outer1'>
            <div className='inner-Part'>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstast01KGM2q_hojYFuGn0v_O0rmRL2X0cg&usqp=CAU" alt="" className='jam1'/></div>
                <div><img src="https://i.pinimg.com/564x/f7/75/7d/f7757d5977c6ade5ba352ec583fe8e40.jpg" alt="" className='jam2' /></div>
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

export default Jam2