import React from "react"
import he from 'he'


export default function Answer(props) {

  return (
    <div className="answer">
      {he.decode(props.text)}
    </div>
  )
}
