import React from "react"
import he from 'he'


export default function Answer(props) {

  return (
    <div className="answer" onClick={props.handleClick}>
      {he.decode(props.text)}
    </div>
  )
}
