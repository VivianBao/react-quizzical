import React from "react"
import he from 'he'
import Answer from "./Answer"
import { nanoid } from "nanoid"

export default function Question(props) {
  const answerElements = props.questionSet.answers.map(answer => {
    return <Answer key={nanoid()} text={answer.text} correct={answer.correct} selected={answer.selected}
                   checked={props.checked} handleClick={()=>props.handleOptionSelect(answer.id,props.questionSet.id)}/>
  })

  return (
    <div className="question-container">
      <h4>{he.decode(props.questionSet.question)}</h4>
      <div className="answers-container">
        {answerElements}
      </div>
    </div>
  )
}
