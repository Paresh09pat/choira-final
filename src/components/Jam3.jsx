import React from 'react'
import imagSnip from './video/snip1.png'

const Jam3 = () => {
  return (
    <div className='jam'>
        <div className='jamming-outer1'>
            <div className='inner-Part'>
                <div><img src="https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=" alt="" className='imag1'/></div>
                <div><img src="https://cdn.esawebb.org/archives/images/screen/weic2216b.jpg" alt="" className='jamNew' /></div>
                <div><img src="https://www.shutterstock.com/image-photo/ancient-architecture-ruins-gadi-sagar-260nw-1267308565.jpg" alt="" className='jamN4' /></div>
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

export default Jam3