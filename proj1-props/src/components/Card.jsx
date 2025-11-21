import React from 'react'

const Card = (props) => {
    
  return (
    <div className="card">
        <img
          src="https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <h2>{props.user}</h2>
        <p>This is my first React App using Props.</p>
        <button>view profile</button>
      </div>
  )
}

export default Card