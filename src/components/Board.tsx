import { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [count, setCount] = useState(0);

  const winner = calculateWinner(squares);

  function handleClick(i: number) {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
    setCount((prev) => prev + 1);
  }

  function resetGame() {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    setCount(0);
  }

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (count === 9) {
    status = "It's a tie";
  } else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="grid">
        {squares.map((val, i) => (
          <Square key={i} value={val} onClick={() => handleClick(i)} />
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  );
}

function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
