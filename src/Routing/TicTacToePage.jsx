import { Link } from "react-router-dom"
import TicTacToe from "../Components/TicTacToe/TicTacToe";
import { useState  } from "react";

const TicTacToePage = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleClick = (i) =>{
const nextSquares = squares.slice();
nextSquares[i] = 'X';
setSquares(nextSquares);
    }
    return (
        <div className="Board">
            <button className="btn btn-dark mt-5 mx-5"><Link to ="/">Kembali</Link></button>
            <TicTacToe value={squares[0]} onClick={() => handleClick(0)}/>
            <TicTacToe value={squares[0]} onClick={() => handleClick(1)}/>
            <TicTacToe value={squares[0]} onClick={() => handleClick(2)}/>
            <TicTacToe value={squares[0]} onClick={() => handleClick(3)}/>
            <TicTacToe value={squares[0]} onClick={() => handleClick(4)}/>
            <TicTacToe value={squares[0]} onClick={() => handleClick(5)}/>
            <TicTacToe value={squares[0]} onClick={() => handleClick(6)}/>
            <TicTacToe value={squares[0]} onClick={() => handleClick(7)}/>
            <TicTacToe value={squares[0]} onClick={() => handleClick(8)}/>
          
           
        </div>
    );
};

export default TicTacToePage