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
      for(let i=0;i<2;i++){
        if(answers[i].text === "False"){
          const falseOption = answers[i]
          answers.splice(i, 1)
          answers.unshift(falseOption)
        }
      }
    } else {
        for(let i=0;i<4;i++){
          const myTarget = answers[i]
          answers.splice(i, 1)
          answers.splice(Math.floor(Math.random(4)), 0, myTarget)
        }
      }
    console.log(answers)
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
