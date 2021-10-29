import React from 'react'
import errorImg from '../assets/error.png'
import '../styles/Error.scss'

const Error = () => {
  return (
    <div className="error-div">
      <img src={errorImg} alt="404 whoops! Try again later." className="error-img"/>
    </div>
  )
}

export default Error