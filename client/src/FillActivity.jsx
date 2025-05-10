import React, { useState } from 'react'

const FillActivity = ({data})=>{
  const [input,setInput] = useState("")
  const [feedback,setFeedback] = useState("")

  const check =()=>{
    if(input.toLowerCase()===data.answer.toLowerCase()){
        setFeedback("Correct!")
    } else{
        setFeedback("Try Again...")
    }
  }

  return (
    <div>
        <h3>Fill in the Blanks..</h3>
        <p>Q. {data.question}</p>
        Answer - <input onChange={(e)=>setInput(e.target.value)} />
        <button onClick={check}>Submit</button>
        <p>Status - {feedback}</p>
    </div>
  )
}

export default FillActivity
