import React from 'react'
import { useState } from 'react'

import './Home.css'

export default function Home(props) {

  return (
    <div className='screen home-box' >
      <h1 style={props.slideH1}>
        <div className='hello'> Hi, my name is </div> Lin Lin Lam.  
      </h1>
      <h3 className='text-one' style={props.slideH3}>I am a Software Engineer.</h3>
      <h3 className='text-two' style={props.slideH3}>Eager to learn , build, and innovate.</h3>
    </div>
  )
}
