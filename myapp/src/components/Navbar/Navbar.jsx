import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (

    <div className='nav-container'>
      <a onClick={props.clickHome}>Home</a>
      <a onClick={props.clickAbout}>About Me</a>
      <a onClick={props.clickProjects}>Projects</a>
      <a onClick={props.clickContact}>Contact</a>
    </div>
  )
}
