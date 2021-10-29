import React from 'react'
import '../styles/Nav.scss'
import banner from '../assets/banner.png'
import { Link } from 'react-router-dom'
import about from '../assets/about.png'
import projects from '../assets/projects.png'

const Nav = () => {
  let gitHubAriaDescription = "link to github, pink badly drawn cat github logo, on hover image rotates -30 degrees"
  let linkedInDescription = "link to linkedIn, pink badly drawn box, rounded corners white L and I  on the inside, on hover images rotates -30 degrees"
  let emailDescription = "link to open email to email Janika, pink badly drawn envelope, on hover rotates -30 degrees"
  return (
  <nav>
    <h1 className="h1-banner"><img className="banner-nav" src={banner} alt="janika codes things written badly" /></h1>
    <section>
      <a href="https://github.com/jhortizu01" aria-label="link to Janika's Github">
        <div className="gitHub" role="img" aria-label={gitHubAriaDescription}></div>
      </a>
      <a href="https://www.linkedin.com/in/janika-hortizuela" aria-label="link to Janika's LinkedIn">
        <div className="linkedIn" role="img" aria-label={linkedInDescription}></div>
      </a>
      <a href="mailto:janika.hortizuela@gmail.com" aria-label="link to email Janika">
        <div className="email" role="img" aria-label={emailDescription}></div>
      </a>
    </section>
    <Link to="/aboutme"><img className="about-nav" src={about} alt="about me" /></Link>
    <Link to="/projects"><img className="projects-nav" src={projects} alt="projects" /></Link>
  </nav>
  )
}

export default Nav