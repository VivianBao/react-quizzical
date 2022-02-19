import './App.scss'
import React from "react"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"
import Answer from "./components/Answer"

export default function App() {
  const [start, setStart] = React.useState(false)

  function handleClickStart(){
    return setStart(prevStart => !prevStart)
  }

  return (
    start === false ?
    <Intro handleClickStart={handleClickStart}/> :
    <Quiz />
  )
}
