import React from 'react'

const Cards = (props) => {
  return (
    <div className="cardHolder">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="profile_image" />
        <h2>{props.user}</h2>
        <p>Frontend Developer</p>
        <button>Follow</button>
      </div>
  )
}

export default Cards