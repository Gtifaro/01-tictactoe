import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState("X")
  const updateBoard = (initialboard, initialTurn, cell) => {
    let newBoard = [...initialboard]
    newBoard[cell] = initialTurn
    let newTurn = initialTurn == "X" ? "O" : "X"
    setBoard(newBoard)
    setTurn(newTurn)

  }

  const handleClick = (id) => {
    updateBoard(board, turn, id)
  };

  return (
    <main className="tic_container">
      <h1 className="tic_title">Tic Tac Toe</h1>
      <div className="tic_board">
        {board.map((cell, idx) => {
          return (
            <span
              key={`tic-cell-${idx}`}
              onClick={() => handleClick(idx)}
              className="board_cell"
            >
              {cell}
            </span>
          );
        })}
      </div>
      <h2 className="tic_nextTurn">Es el turno de: X</h2>
      <button className="tic_restart">Reiniciar</button>
    </main>
  );
}

export default App;
