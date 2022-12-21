import React, {useState, useEffect} from 'react'
import { BsGithub, BsDisplay, BsDisplayFill } from 'react-icons/bs'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import {SiPostgresql, SiDjango, SiExpress, SiJsonwebtokens, SiMongodb, SiJavascript, SiCss3, SiHtml5} from 'react-icons/si'
import SmackImage from "../img/Talkinsmack.png"
import LegendImg from "../img/League.png"
import TreasureImg from "../img/CatchTreasure.png"
import './Projects.css'

export default function Projects(props) {
let projects = [
  {
    name: "Talkin' Smack",
    image: SmackImage,
    info: "A Twitter inspired social media site where you can talk smack with your friends (or frenemies).",
    git: "https://github.com/SEI-Buffleheads/talkin-smack-fe",
    demo: "https://genuine-marshmallow-56fd7d.netlify.app",
    tools: [<FaReact />, <SiDjango />, <SiPostgresql />, ],
  },
  {
    name: "Legendary Slayers",
    image: LegendImg,
    info: "An interactive website based on a popular game League of Legends where you can view, save, and edit your favorite champions and items.",
    git: "https://github.com/durlinlin/Legendary-Slayers-FE",
    demo: "https://legendsofleague.netlify.app",
    tools: [<FaReact />, <FaNodeJs/>, <SiExpress />, <SiJsonwebtokens />, <SiMongodb />],
  },
  {
    name: "Catch the Treasure",
    image: TreasureImg,
    info: "Help Luffy collect his treasures but avoid the rocks and bombs!",
    git: "https://github.com/durlinlin/Catch-the-treasure",
    demo: "https://durlinlin.github.io/Catch-the-treasure",
    tools: [<SiCss3 />, <SiJavascript />, <SiHtml5 />]
  },
];
  
  return (
    <>
      <div className='project-title'><h1>Projects</h1></div>
    <div className="screen project-box">
      {projects.map(
        (project, key) =>
          project.name.includes(props.show) && (
            <div key={key} className="characterCard">
              <div
                className="characterName"
                style={{ backgroundImage: `url(${project.image})` }}
                >
              <div key={key} className="project-info">{project.info}</div>
              </div>
              <div className="characterQuote">
                <div key={key} className="quotes">
                  <h2>{project.name}</h2>
                  <a
                    href={project.git}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <BsGithub style={{ color: "black" }} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <BsDisplayFill style={{ color: "black" }} /> Demo
                  </a>
                  <div className='tools'>{project.tools}</div>
                </div>
              </div>
            </div>
          )
      )}
      </div>
      </>
  );
}
