import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [first, setfirst] = useState("Nakrani Heet")


  return (<>
    <h1>{first}, 21</h1>
    <div id='appBtn' onClick={() => setfirst("Dhruv")}>click here</div>
    </>
  )
}

export default App