import React from "react"
import he from 'he'
import Answer from "./Answer"
import { nanoid } from "nanoid"

export default function Question(props) {
  const [correctAnswer, setCorrectAnswer] = React.useState({
    text: `${props.correctAnswer}`,
    correct: true,
  })
  const [allAnswers, setAllAnswers] = React.useState(settingAllAnswersArray())


  function settingAllAnswersArray(){
    const incorrectAnswers = props.incorrectAnswers.map(answer => ({
      text: answer,
      correct: false
    }))
    const answers = [...incorrectAnswers, correctAnswer]
    if(props.type === "boolean"){
      answers.map((answer,index) => {
        return answer.text === 'False' ? index = 0 : index = index
      })
    } else {
        answers.map((answer, index) => {
          return index = Math.floor(Math.random(4))
        })
      }
    return answers
  }

  const answerElements = allAnswers.map(answer => {
    return <Answer key={nanoid()} text={answer.text} correct={answer.correct} />
  })

  // const allAnswers = [...props.incorrectAnswers, props.correctAnswer]
  // const incorrectAnswerElements = props.incorrectAnswers.map(text => {
  //   return <Answer key={nanoid()} text={text} correct={false}/>
  // })
  return (
    <div className="question-container">
      <h4>{he.decode(props.question)}</h4>
      <div className="answers-container">
        {answerElements}
      </div>
    </div>
  )
}
