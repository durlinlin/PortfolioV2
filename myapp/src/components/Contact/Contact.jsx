import React from 'react'
import './Contact.css'
import { GrMail } from "react-icons/gr";
import {BsLinkedin } from "react-icons/bs";

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1>Get in Touch</h1>
      <div className='contact-content'>
        <p>
          <h2>Email</h2>
          My inbox is always open to any questions you may have.
        </p>
        <a 
          href={"mailto: linlin.lam01@gmail.com"}
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
          >
          <GrMail style={{ color: "white" }} /> linlin.lam01@gmail.com
          </a>
        <p><h2>Linkedin</h2>Or, if you prefer to just say Hi, message me on Linkedin so we can connect!</p>
        <a
          href={"https://www.linkedin.com/in/linlinlam/"}
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <BsLinkedin style={{ color: "white" }} /> Lin Lin Lam
        </a>
      </div>
    </div>
  )
}
