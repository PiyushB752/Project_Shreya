const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

const demoData = [
  {type:'fill',question:'The sun rises in the ______.',answer:'east'},
  {type:'image_match',imageUrl:'cat.png',options:['dog','mouse','cat','hamster'],correctAnswer:'cat'},
  {type:'sentence',words:['am','I','happy'],correctOrder:['I','am','happy']}
]

app.post('/api/courseContent',(req,res)=>{
  res.json(demoData)
})

app.listen(port,()=>{
  console.log(`Server running on port: ${port}`)
})
