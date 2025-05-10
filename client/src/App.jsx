import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FillActivity from './FillActivity'
import ImageMatchActivity from './ImageActivity'
import SentenceActivity from './SentenceActivity'
import "./App.css"

export default function App() {
  const [activities,setActivities] = useState([])

  useEffect(()=>{
    axios.post('http://localhost:5000/api/courseContent').then((res)=>setActivities(res.data))
  },[])

  return (
    <div>
      <h1>🧠 Learning Activities 🧠</h1>
      {activities.map((act) => {
        let component;
        if (act.type === 'fill') {
          component = <FillActivity data={act} />
        } else if (act.type === 'image_match') {
          component = <ImageMatchActivity data={act} />
        } else if (act.type === 'sentence') {
          component = <SentenceActivity data={act} />
        } 

        return (
          <div>
            {component}<hr />
          </div>
        );
      })}
    </div>
  )
}
