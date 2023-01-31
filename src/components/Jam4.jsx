import React from 'react'
import imagSnip from './video/snip1.png'


const Jam4 = () => {

  return (
    <>
    <div className='jam'>
        <div className='jamming-outer1'>
            <div className='inner-Part'>
                <div><img src="https://thumbs.dreamstime.com/b/group-diverse-young-students-standing-together-classroom-156212396.jpg" alt="" className='imag1'/></div>
                <div><img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000" alt="" className='image2' /></div>
                <div><img src="https://i.natgeofe.com/n/959eb04a-010b-48d7-8a51-1711d781d6d1/diwali-lanterns-rts2t3o5_3x2.jpg" alt="" className='imag3' /></div>
                <div><img src="https://img.traveltriangle.com/blog/wp-content/uploads/2021/11/festivals-of-india1.jpg" alt="" className='imag4' /></div>
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
    </>
  )
}

export default Jam4