import React from "react"
import he from 'he'


export default function Answer(props) {
  const style = {
    backgroundColor: props.selected ? '#d6dbf5' : "none",
    border: props.selected ? 'solid 1px #f6f7fb' : 'solid 1px #293264'
  }
  // props.selected ? { 'background-color': '#d6dbf5', 'border': 'transparent 1px #293264' } : {'border': 'solid 1px #293264'}
  function checkedStyle(){
    if(props.correct && props.selected) {
      return { backgroundColor: '#94d7a2', border: "none"}
    }else if(props.correct){
      return { backgroundColor: '#94d7a2', border: "none"}
    } else if(props.selected){
      return { backgroundColor: '#f7d9db', border: "none", color: '#8f95af' }
    } else {
      return { color: "#8f95af"}
    }
  }
  console.log(props.checked)

  return (
    <div className="answer" onClick={props.handleClick} style={props.checked ? checkedStyle() : style}>
      {he.decode(props.text)}
    </div>
  )
}
