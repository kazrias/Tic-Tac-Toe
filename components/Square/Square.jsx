import './Square.css'
function Square({ winnerIndex, index, value, onSquareClick }) {
  let style = {};
  if (winnerIndex) {
    let [temp, a, b, c] = [...winnerIndex];
    if (index === a || index === b || index === c) {
      style.color = 'rgba(100, 255, 145, 1)';
      style.backgroundColor = 'rgba(60, 209, 235, 0.3)';
    }
  }
  return <button style={style} className="square" onClick={onSquareClick}>{value}</button>
}
export default Square;