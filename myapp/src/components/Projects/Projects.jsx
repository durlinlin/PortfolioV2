import React, {useState, useEffect} from 'react'
import './Projects.css'

export default function Projects(props) {
let projects = [{name: "Talkin' Smack"}, {name: "Legendary Slayers"}, {name:"Catch the Treasure"}]
  
  return (
    <div className='screen project-box' ref={props.ref} >
      {projects.map((project, key) => project.name.includes(props.show) &&
        (<div key={key} className="characterCard">
        <div className="characterName">{project.name}</div>
        <div className="characterQuote">
          <div key={key} className="quotes">
      
            </div>
        </div>
      </div>)
    )}
    </div>
  )
}
