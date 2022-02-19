import './App.scss'
import React from "react"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"
import Answer from "./components/Answer"

export default function App() {
  const [start, setStart] = React.useState(false)
  const [quiz, setQuiz] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10&category=31")
      .then(res => res.json())
        .then(data => setQuiz(data.results))
  }, [])

  console.log(quiz)

  function handleClickStart(){
    return setStart(prevStart => !prevStart)
  }

  return (
    start === false ?
    <Intro handleClickStart={handleClickStart}/> :
    <Quiz quizData={quiz}/>
  )
}
