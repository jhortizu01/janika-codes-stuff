import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProjectsContainer.scss'
import banner from '../assets/banner.png'
import arrow from '../assets/arrow.png'
import projectsBanner from '../assets/projects.png'
import Project from './Project'
import Error from './Error'


const ProjectsContainer = (props) => {

  return (
    <section className="project-container">
      <div className="title-banner">
        <h1 className="h1-Banner"><img className="banner-projects" src={banner} alt="Janika codes stuff written badly" /></h1>
        <h2><img className="projects-projects" src={projectsBanner} alt="projects written badly" /></h2>
        <Link to="/"><img className="back-arrow" src={arrow} alt="go back written badly with an arrow" /></Link>
      </div>
      { props.errorState ? <Error />  : <Project projectData={props.projectData} />}
    </section>
  )

}

export default ProjectsContainer
