import React, { useEffect, useState } from 'react'
import Square from './square'
import Winner from './winner'

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNextm, setXIsNext] = useState(true)
  const [xScore, setXScore] = useState(0)
  const [oScore, setOScore] = useState(0)
  const winner = Winner(squares);
  let status;
  let htext;

  const handleClik = (i) => {

    if (squares[i] || Winner(squares)) {
        return;
      }

    if (squares[i]) {
        return;
      }

    const nextSquares = squares.slice();
    if(xIsNextm){
        nextSquares[i] = "X";
    }else{
        nextSquares[i] = "0";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNextm)
  }

  const restartGame = () => {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  
  if (winner) {
    htext = "Winner Is "
    status = winner;
  } else {
    htext = "Next player: "
    status = (xIsNextm ? 'X' : 'O');
  }

  useEffect(()=>{
    if(winner === 'X'){
        setXScore(xScore + 1)
    }else if(winner === '0'){
        setOScore(oScore + 1)
    }
  },[winner])

  return (
    <div className='board_content'>
        <h1>{htext}<span>{status}</span></h1>

        <div className='board'>
            <div className='board_row'>
                <Square  value={squares[0]} squareClick={() => handleClik(0)}/>
                <Square  value={squares[1]} squareClick={() => handleClik(1)}/>
                <Square  value={squares[2]} squareClick={() => handleClik(2)}/>
            </div>

            <div className='board_row'>
                <Square  value={squares[3]} squareClick={() => handleClik(3)}/>
                <Square  value={squares[4]} squareClick={() => handleClik(4)}/>
                <Square  value={squares[5]} squareClick={() => handleClik(5)}/>
            </div>

            <div className='board_row'>
                <Square  value={squares[6]} squareClick={() => handleClik(6)}/>
                <Square  value={squares[7]} squareClick={() => handleClik(7)}/>
                <Square  value={squares[8]} squareClick={() => handleClik(8)}/>
            </div>
        </div>

        <div className='btn' onClick={restartGame}>Restart Game</div>

        <div className='score_table'>
            <p className='scoreP'>Score for X: <span>{xScore}</span></p>
            <p className='scoreP'>Score for O: <span>{oScore}</span></p>
        </div>
    </div>
  )
}
