import React from "react"
import Question from "./Question"
import { nanoid } from 'nanoid'

export default function Quiz(props) {
  const questionArray = props.quizData.map(item => {
    return <Question key={nanoid()} question={item.question} type={item.type} correctAnswer={item.correct_answer} incorrectAnswers={item.incorrect_answers}/>
  })

  return (
    <div className="questions-container">
      {questionArray}
      <div className="quiz-yellow-circle"></div>
      <div className="quiz-blue-circle"></div>
    </div>
  )
}
