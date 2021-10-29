import React from 'react'
import '../styles/Project.scss'

const Project = ({ projectData }) => {

 let projects = projectData.map(project => {
   let stack = project.techStack.map(tech => {
     return `${tech}, `
   }) 
      return (
          <div className="card" key={project.id}>
            <div className="box1">
              <img className="project-img" src={project.picture} alt={`picture of project`} />
            </div>
            <div className="box2">
              <h2>{project.projectTitle}</h2>
              <h3>It took {project.duration} to finish this project!</h3>
              <h3>Tech Stack</h3>
              <p>{stack}</p>
              <h3>Description:</h3>
              <p>{project.description}</p>
              <h3>Favorite Part:</h3>
              <p>{project.favoritePart}</p>
              <h3>Not as fun part:</h3>
              <p>{project.worstPart}</p>
              <a href={project.github}><div className="gitHubCode" /></a>
            </div>
          </div>
        
      )
    })
  
    


  return (
    <div className="project-cards">
     {projects} 
    </div>
  )
}

export default Project


