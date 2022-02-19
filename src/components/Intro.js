import React from "react"

export default function Intro(props) {
  return(
    <>
      <p>This is Intro component</p>
      <button onClick={props.handleClickStart}>Start</button>
    </>
  )
}
