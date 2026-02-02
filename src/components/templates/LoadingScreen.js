import React,{CSSProperties} from 'react'

import Image from 'next/image'
import gsap from 'gsap';


import bonjour from '../../../public/img/logo.gif'


export default function LoadingScreen() {
    const override  = {
      
      
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor:"black"
        
      };
    return (
        <div style={override} className='loadingScreen' >


            <Image src={bonjour} width={400} height={400} alt='nimvex logo'/>
        </div>
    )
}
