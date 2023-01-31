import React from 'react'
import { useState } from 'react'
import './jam.css'
import Jam1 from './Jam1'
import Jam2 from './Jam2'
import Jam3 from './Jam3'
import Jam4 from './Jam4'
import imagSnip from './video/snip1.png'


const Jam = () => {
    const[jamImage,setJamImage] = useState(false);
  return (
    <>
    <div className='jam'>
        <div className='jamming-outer'>
            <div className='navbar'>
                <h1>Choira</h1>
                <h2>Friday Night Jam</h2>
                <div className='innerNav'>
                    <select className='dropdwon' onChange={(e) =>setJamImage(e.target.value) }>
                        <option value="select" selected>select</option>
                        <option value="user1">1</option>
                        <option value="user2">2</option>
                        <option value="user3">3</option>
                        <option value="user4">4</option>
                    </select>
                    <button className='navBut'><i class="fa-solid fa-square-plus"></i><span>Invite</span></button>
                </div>
            </div>
        </div>
    </div>
    
    {
        jamImage ? (
        <div>
            {jamImage === 'select' && <Jam4 />}
            {jamImage === 'user1' && <Jam1 />}
            {jamImage === 'user2' && <Jam2 />}
            {jamImage === 'user3' && <Jam3 />}
            {jamImage === 'user4' && <Jam4 />}
        </div> )
        :
        (
        <div className='lastDiv'>
            <div className='inner-Part1'>
                <div><img src="https://thumbs.dreamstime.com/b/group-diverse-young-students-standing-together-classroom-156212396.jpg" alt="" className='imag11'/></div>
                <div><img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000" alt="" className='image21' /></div>
                <div><img src="https://i.natgeofe.com/n/959eb04a-010b-48d7-8a51-1711d781d6d1/diwali-lanterns-rts2t3o5_3x2.jpg" alt="" className='imag31' /></div>
               <div><img src="https://img.traveltriangle.com/blog/wp-content/uploads/2021/11/festivals-of-india1.jpg" alt="" className='imag41' /></div>
            </div>
            <div className='foot'>
                <div><img src={imagSnip} alt="" className='footHed' /></div>
                <button className='endJam'>End Jam</button>
                <div className='speaker'><i class="fa-solid fa-volume-high"></i></div>
                <div className='video'><i class="fa-solid fa-video"></i></div>
                <div className='mic'><i class="fa-solid fa-microphone-slash"></i></div>
            </div>
        </div>
        )}
    </>
  )
}

export default Jam;
