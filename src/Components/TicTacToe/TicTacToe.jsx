import React from "react"

const TicTacToe = ({ value, onClick }) => {
    
  return (
   <button className='square' onClick={onClick}>{value}</button>
  )
}

export default TicTacToe
