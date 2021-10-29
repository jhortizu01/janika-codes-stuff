import React from 'react'
import banner from '../assets/banner.png'
import '../styles/AboutMe.scss'
import about from '../assets/about.png'
import janika from '../assets/profile.jpeg'
import arrow from '../assets/arrow.png'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (
    <section className="aboutme-container">
      <h1 className="h1-aboutme"><img className="banner-about" src={banner} alt="janika codes things written badly" /></h1>
      <h2 className="img-about"><img className="about-about" src={about} alt="about me" /></h2>
      <article className="about-moi">
        <img className="janika" src={janika} alt="Janika with three babies" />
        <section className="aboutme-box">
          <article className="words-me">
            <p className="grilled-cheese"><strong>It all started with a grilled cheese sandwhich.</strong></p>
            <br></br>
            <p className="story">
              {'When I was a about 7, I wanted a grilled cheese sandwhich. My dad was busy hanging curtains in our new house and I was hungry. The need for a grilled sandwhich was strong. I put on my thinking cap and got a brilliant idea: get a piece of white bread, spread butter on it (using it as an adhesive), and put a slice of cheese on the butter. Obviously it didn\'t work. I was scared to get in trouble, so I snuck the toaster in to the bathroom and tried scraping out the cheese. Idk whatever.'} 
            </p>
            <br></br>
            <p className="story">
              {'What does this have to do with my new path into the tech industry as a Front End Engineer? From a young age I\'ve always loved solving challenges and making things, which has followed me into adulthood. My forray into the workforce has brought me on a journey doing administrative assistant tasks, helping people get food and health benefits as a caseworker, and to (most recently) a Health Information manager at a nursing home.'} 
            </p>
            <br></br>
            <p className="story">
              {'When covid hit, I had a lot of time to think about life and my priorities. I wanted more out of my career. My soul was itching for an opportunity. I had previously thought about going back to school for a traditional computer science degree, but being a mom of 3 and struggling with advanced math in the past (trigonometry suuuuuuucks) I thought that was out of reach.'} 
            </p>
            <br></br>
            <p className="story"><i>Until...</i></p>
            <br></br>
            <p className="story">
              {'In January 2021, A friend I knew posted about a software bootcamp in slack. I\'ve heard of them before, but I have always been skeptical. She had actually gone through a bootcamp years ago, being a career changer herself and landed a job. I did some research and was still iffy on taking the jump. I\'ve previously done some freeCodeCamp in the past. I found a school called Turing School of Software and Design. They were offering a "try it coding" weekend. The first day was we explored the backend and did a little Ruby. Meh it was ok. The next day we checked out the front and and coded in JavaScript. OMG I was HOOKED. It blended my love of problem solving and making things. I like to say it\'s the ultimate craft, except glitter doesn\'t follow me around for weeks and I don\'t have to clean up anything. I started the bootcamp in May 2021 and here we are today, making websites and still drawing in MS Paint. (ok, it\'s JS Paint online, same thing).'}
            </p>
            <br></br>
            <p className="story">
              {'When I\'m not drawing in MS Paint, making web apps or thinking about code: I like hanging out with my 3 kids and my partner. Looking for jobs (if you\'re a recruiter hit up my email on the home page! 😜), playing rollerderby and living life in Colorado.'}
            </p>
            </article>
          <Link to="/"><img className="arrow" src={arrow} alt="arow pointing to the left" /></Link>
        </section>
      </article>
    </section>
  )
}


export default AboutMe