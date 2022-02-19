import React from "react"
import he from 'he'
import Answer from "./Answer"

export default function Question(props) {
  console.log(props.incorrectAnswers)
  const answerElements = props.incorrectAnswers.map(answer => {
    return(
      <Answer text={answer} />
    )
  })

  return (
    <div className="question-container">
      <h4>{he.decode(props.question)}</h4>
      <div className="answers-container">
        {answerElements}
      </div>
    </div>
  )
}
