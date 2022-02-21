import React from "react"

export default function Intro(props) {
  return(
    <div className="intro-screen-container">
      <div className="intro-container">
        <h1>Quizzical</h1>
        <p>Quiz generator for your all time favorite anime!</p>
        <button onClick={props.handleClickStart}>Start quiz</button>
        <div className="intro-yellow-circle"></div>
        <div className="intro-blue-circle"></div>
      </div>
    </div>
  )
}
