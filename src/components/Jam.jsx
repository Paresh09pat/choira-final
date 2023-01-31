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
                <div><img src="https://img.freepik.com/free-photo/cute-young-woman-playing-guitar-indoors_23-2149140612.jpg?w=2000" alt="" className='imag11'/></div>
                <div><img src="https://assets.cntraveller.in/photos/626aa5af3c1dc6cdeba390f1/master/w_1600%2Cc_limit/Entre%2520nos%2520live%2520at%2520the%2520Heritage%2520Home%2520Concert.jpg" alt="" className='image21' /></div>
                <div><img src="https://img.freepik.com/free-photo/elearning-cute-young-beautiful-girl-remotely-home-taking-violin-classes_140725-167346.jpg?w=2000" alt="" className='imag31' /></div>
               <div><img src="https://media.istockphoto.com/id/1149030677/photo/student-playing-drums-while-listening-music-at-class.jpg?s=612x612&w=0&k=20&c=JV-7fK4m4UidZzd25MlIbjK1qNJ3URobTrDI9EOnxHQ=" alt="" className='imag41' /></div>
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