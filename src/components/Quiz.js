import React from "react"
import Question from "./Question"
import { nanoid } from 'nanoid'

export default function Quiz(props) {
  const questionArray = props.quizData.map(item => {
    return <Question key={nanoid()} question={item.question} type={item.type} correctAnswer={item.correct_answer} incorrectAnswers={item.incorrect_answers}/>
  })

  return (
    <div className="questions-container">
      <p>This is Quiz component</p>
      {questionArray}
    </div>
  )
}
