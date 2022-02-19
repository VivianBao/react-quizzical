import React from "react"

export default function Quiz(props) {
  console.log(props.quizData)
  const questionArray = props.quizData.map(item => {
    return <div>{item.question}</div>
  })

  return (
    <>
      <p>This is Quiz component</p>
      {questionArray}
    </>
  )
}
