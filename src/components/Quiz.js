import React from "react"
import Question from "./Question"

export default function Quiz(props) {
  console.log(props.quizData)
  const questionArray = props.quizData.map(item => {
    return <Question key={Math.random()} question={item.question}/>
  })

  return (
    <div className="questions-container">
      <p>This is Quiz component</p>
      {questionArray}
    </div>
  )
}
