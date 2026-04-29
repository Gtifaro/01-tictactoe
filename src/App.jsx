import { useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  
  const checkWinner = (board, player) => {
    const winningCombinations = [
      [0, 1, 2], // filas
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // columnas
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonales
      [2, 4, 6]
    ];
    
    return winningCombinations.some(combination => 
      combination.every(index => board[index] === player)
    ) ? player : null;
  }

  const handleClick = (id) => {
    // No permitir celdas ocupadas o continuar después de ganador
    if (board[id] !== null || winner) return;
    
    let newBoard = [...board];
    newBoard[id] = turn;
    setBoard(newBoard);
    setTurn(turn === "X" ? "O" : "X");

    let winningPlayer = checkWinner(newBoard, turn);
    
    if (winningPlayer) {
      setWinner(winningPlayer);
    }
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setWinner(null);
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
      <h2 className="tic_nextTurn">Es el turno de: {turn}</h2>
      {winner && (
        <div className="modal_overlay">
          <div className="modal">
            <h2 className="modal_title">Ganó {winner}</h2>
            <p className="modal_message">Felicitaciones, el jugador {winner} ganó la partida.</p>
            <button className="tic_restart modal_button" onClick={handleRestart}>
              Jugar de nuevo
            </button>
          </div>
        </div>
      )}

      <button className="tic_restart" onClick={handleRestart}>
        Reiniciar
      </button>
    </main>
  );
}

export default App;
