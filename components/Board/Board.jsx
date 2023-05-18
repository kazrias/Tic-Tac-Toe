import './Board.css';
import Square from '../Square/Square';
function Board({ xIsNext, squares, onPlay, calculateWinner }) {
  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) return
    if (xIsNext) nextSquares[i] = 'X';
    else nextSquares[i] = 'O';
    onPlay(nextSquares);
  }
  const winnerLine = calculateWinner(squares);
  let status; 
  if (winnerLine) status = 'Winner: ' + winnerLine[0];
  else if (!(squares.filter(item => item === null)).length) status = 'Draw!'
  else status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  return (
    <>
      <div className="status">{status}</div>
      <div className='board-row'>
        <Square winnerIndex={winnerLine} index={0} value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square winnerIndex={winnerLine} index={1} value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square winnerIndex={winnerLine} index={2} value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className='board-row'>
        <Square winnerIndex={winnerLine} index={3} value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square winnerIndex={winnerLine} index={4} value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square winnerIndex={winnerLine} index={5} value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className='board-row'>
        <Square winnerIndex={winnerLine} index={6} value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square winnerIndex={winnerLine} index={7} value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square winnerIndex={winnerLine} index={8} value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>

  )
}
export default Board