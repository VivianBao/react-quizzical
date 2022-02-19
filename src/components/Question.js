import React from "react"
import he from 'he'

export default function Question(props) {

  return (
    <div>
      {he.decode(props.question)}
    </div>
  )
}
