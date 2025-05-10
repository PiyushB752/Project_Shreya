import React, { useState } from 'react'

const SentenceActivity = ({data})=>{
  const [selectedWords,setSelectedWords] = useState([])
  const [feedback,setFeedback] = useState("")

  const handleWordClick =(e)=>{
    if (!selectedWords.includes(e)){
      setSelectedWords([...selectedWords,e])
    }
  }

  const handleSubmit =()=>{
    if(selectedWords.join(" ")===data.correctOrder.join(" ")){
      setFeedback("Correct sentence!")  
    } else{
      setFeedback("Incorrect, try again.")
    }
  }

  const handleReset = () => {
    setSelectedWords([])
    setFeedback("")
  };

  return (
    <div>
      <h3>Sentence Builder...</h3>
      <div>
        <p>Q. Simply select the word in correct order to make a sentence.</p>
        {data.words.filter((word)=>!selectedWords.includes(word)).map((word) => (
            <button onClick={()=>handleWordClick(word)}>
              {word}
            </button>
          ))}
      </div>
      <br />
      <strong>Answer:</strong> {selectedWords.join(" ")}
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
      <p>Status - {feedback}</p>
    </div>
  );
};

export default SentenceActivity
