import './Game.css';
import Board from '../Board/Board';
import { useState } from 'react';
function Game({ calculateWinner }) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }
  //[  [1, 2, 3], [4, 5, 6], [7, 8, 9]  ]
  const moves = history.map((squares, move) => {
    let desc = '';
    if (move === currentMove)
      desc = 'Your current move #' + move;
    else if (move > 0)
      desc = 'Go to move #' + move;
    else
      desc = 'Go to game start';
    return (
      <li key={move}> <button onClick={() => jumpTo(move)}>{desc}</button></li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} calculateWinner={calculateWinner} />
      </div>
      <div className="game-info">
        <ol>
          {moves}
        </ol>
      </div>
    </div>
  )
}
export default Game;