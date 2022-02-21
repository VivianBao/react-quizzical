import React from "react"
import he from 'he'


export default function Answer(props) {
  const style = {
    backgroundColor: props.selected ? '#d6dbf5' : "none",
    border: props.selected ? 'solid 1px #f6f7fb' : 'solid 1px #293264'
  }
  // props.selected ? { 'background-color': '#d6dbf5', 'border': 'transparent 1px #293264' } : {'border': 'solid 1px #293264'}

  return (
    <div className="answer" onClick={props.handleClick} style={style}>
      {he.decode(props.text)}
    </div>
  )
}
