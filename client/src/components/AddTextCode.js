import React from 'react'

export default function AddTextCode(props) {

  return (
    <div>
        <button onClick={()=>{props.addText("text")}}>+Add Text</button>
        <button onClick={()=>{props.addText("code")}}>+Add Code</button>
    </div>
  )
}
