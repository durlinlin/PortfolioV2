import React from 'react'
import {TbSchool, TbDownload} from 'react-icons/tb'
import './About.css'

export default function About(props) {
  return (
    <div className='screen about-box'>
      <div className='about-right'>
        <h1>About Me</h1>
        A Pharmacist turned Software Engineer who takes pride in serving the community and the needs of others. As a front line medical professional, I am well versed in performing under pressure as well as thinking on my feet. Being involved in a fast-paced environment allowed me to sharpen my skills as a team leader and has taught me how to effectively delegate tasks in order to improve work-flow efficiency. Oftentimes, I would perform a collaborative effort with other healthcare professionals to discuss and provide an optimal plan for a patient's wellbeing. With these experiences, I am well equipped to work collaboratively alongside fellow software engineers to resolve technical puzzles as well as adapting to new and improved ideas in a field of ongoing technological growth.
        <h1>Education</h1>
        <div className='exp-box'>
          <div><h4>Software Engineering</h4><p><TbSchool/> General Assembly</p></div>
          <div><h4>Pharm. D</h4><p><TbSchool/> Touro College of Pharmacy</p></div>
          <div><h4>Biochemistry</h4> <p><TbSchool/> Hunter College</p></div>
        </div>
      </div>
      <div className='about-left'>
        <div className='pic'></div>
        <a href="https://drive.google.com/file/d/1telo0HqAGCkE6oM-6xYDEo5Sd-SCC-dh/view?usp=sharing" target="_blank">Resume   <TbDownload/></a>
      </div>
    </div>
  )
}
