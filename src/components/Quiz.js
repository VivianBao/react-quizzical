import React from "react"
import Question from "./Question"
import { nanoid } from 'nanoid'

export default function Quiz(props) {
  const [checked, setChecked] = React.useState(false)
  const [questionSets, setQuestionSets] = React.useState(settingQuestionSets())

  function settingQuestionSets() {
    const questions = props.quizData.map(set => {
      const correctAnswer = {
        id: nanoid(),
        text: `${set['correct_answer']}`,
        correct: true,
        selected: false
      }
      const incorrectAnswers = set['incorrect_answers'].map(answer => ({
        id: nanoid(),
        text: answer,
        correct: false,
        selected: false
      }))
      const answers = [...incorrectAnswers, correctAnswer]
      if (set.type === "boolean") {
        for (let i = 0; i < 2; i++) {
          if (answers[i].text === "False") {
            const falseOption = answers[i]
            answers.splice(i, 1)
            answers.unshift(falseOption)
          }
        }
      } else {
        for (let i = 0; i < 4; i++) {
          const myTarget = answers[i]
          answers.splice(i, 1)
          answers.splice(Math.floor(Math.random(4)), 0, myTarget)
        }
      }
      return{
        id: nanoid(),
        type: set.type,
        question: set.question,
        answers: answers
      }
    })
    return questions
  }

  function handleOptionSelect(answer_id) {
    setQuestionSets(prevSets => {
      return(
        prevSets.map(prevSet => {
          const newAnswers = prevSet.answers.map(prevAnswer => {
            return (
                prevAnswer.id === answer_id ?
                { ...prevAnswer, selected: !prevAnswer.selected } :
                { ...prevAnswer, selected: false }
            )
          })
          return {...prevSet, answers: newAnswers}
        })
      )
    })
  }
  function handleCheck() {
    setChecked(prevChecked => {
      if(prevChecked === false){
        return !prevChecked
      }
    })
  }

  const questionElements = questionSets.map(set => {
    return <Question key={nanoid()} questionSet={set} handleOptionSelect={handleOptionSelect}/>
  })
  return (
    <div className="questions-container">
      {questionElements}
      {checked ?
        <span>Your score is ___ <button className="check-answer-btn" onClick={props.handleClickStart}>Start New Game</button></span>:
      <button className="check-answer-btn" onClick={handleCheck}>Check Answer</button>}
      <div className="quiz-yellow-circle"></div>
      <div className="quiz-blue-circle"></div>
    </div>
  )
}
