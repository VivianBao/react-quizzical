import React from "react"
import he from 'he'

export default function Question(props) {

  return (
    <div className="question-container">
      <h4>{he.decode(props.question)}</h4>
    </div>
  )
}
