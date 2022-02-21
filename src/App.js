import './App.scss'
import React from "react"
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"

export default function App() {
  const [start, setStart] = React.useState(false)
  const [quiz, setQuiz] = React.useState([])

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=31")
      .then(res => res.json())
        .then(data => setQuiz(data.results))
    // Clean up function when quiz component finishes life cycle
    return function(){
      setQuiz([])
    }
  }, [])

  console.log(quiz)

  function handleClickStart(){
    return setStart(prevStart => !prevStart)
  }

  return (
    <div className="screen-container">
      {start === false ?
      <Intro handleClickStart={handleClickStart}/> :
      <Quiz quizData={quiz}/>}
    </div>
  )
}
