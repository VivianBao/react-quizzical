import React from "react"
import he from 'he'
import Answer from "./Answer"
import { nanoid } from "nanoid"

export default function Question(props) {
  console.log(props.incorrectAnswers)
  console.log(`Correct Answer: ${props.correctAnswer}`)
  const allAnswers = [...props.incorrectAnswers, props.correctAnswer]
  console.log(`All answers: ${allAnswers}`)
  const answerElements = allAnswers.map(text => {
    return <Answer key={nanoid()} text={text}/>
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
