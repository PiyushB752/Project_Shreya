import React, { useState } from 'react'

const ImageActivity = ({data})=>{
  const [selected,setSelected] = useState("")
  const [feedback,setFeedback] = useState("")

  const check = (e)=>{
    setSelected(e)
    if(e===data.correctAnswer){
      setFeedback("Correct!")
    } else{
      setFeedback("Incorrect. Try Again...")
    }
  }

  return (
    <div>
      <h3>Image Match</h3>
      <img src={`/images/${data.imageUrl}`}/>
      <div>
        {data.options.map((op)=>(
          <button onClick={()=>check(op)}> {op} </button>
        ))}
      </div>
      <p>Status - {feedback}</p>
    </div>
  );
};

export default ImageActivity
