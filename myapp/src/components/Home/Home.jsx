import React from 'react'
import { useState } from 'react'

import './Home.css'

export default function Home(props) {

  return (
    <div className='screen home-box' >
      <h1 style={props.slideH1}>Lin Lin Lam</h1>
      <h3 style={props.slideH3}>Software Engineer</h3>
    </div>
  )
}
