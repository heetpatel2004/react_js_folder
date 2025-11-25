import React from 'react'

const App = () => {

  const action = () =>{
    console.log("mouse clicked...!")
  }
  return (
    <div>
      <input onClick={action} type="text" placeholder='enter your name here....' />
    </div>
  )
}

export default App