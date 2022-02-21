import React from "react"
import he from 'he'
import Answer from "./Answer"
import { nanoid } from "nanoid"

export default function Question(props) {
  console.log(props.questionSet.answers)
  // const [allAnswers, setAllAnswers] = React.useState(settingAllAnswersArray())

  // function settingAllAnswersArray(){
  //   const answers = [...props.incorrectAnswers, props.correctAnswer]
  //   if(props.type === "boolean"){
  //     for(let i=0;i<2;i++){
  //       if(answers[i].text === "False"){
  //         const falseOption = answers[i]
  //         answers.splice(i, 1)
  //         answers.unshift(falseOption)
  //       }
  //     }
  //   } else {
  //       for(let i=0;i<4;i++){
  //         const myTarget = answers[i]
  //         answers.splice(i, 1)
  //         answers.splice(Math.floor(Math.random(4)), 0, myTarget)
  //       }
  //     }
  //   return answers
  // }

  // function handleClick(id) {
  //   setAllAnswers(prevAnswers => {
  //     return(prevAnswers.map(prevAnswer => {
  //       return(
  //         prevAnswer.id === id ?
  //         {...prevAnswer,selected: !prevAnswer.selected}:
  //         { ...prevAnswer, selected: false}
  //       )
  //     }))
  //   })
  // }

  const answerElements = props.questionSet.answers.map(answer => {
    return <Answer key={nanoid()} text={answer.text} correct={answer.correct} selected={answer.selected} handleClick={()=>props.handleOptionSelect(answer.id,props.questionSet.id)}/>
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
