import './App.css'

function App() {

  return (
    <main className='tic_container'>
      <h1 className='tic_title'>Tic Tac Toe</h1>
      <div className='tic_board'>
        <span className='board_cell'>X</span>
        <span className='board_cell'>X</span>
        <span className='board_cell'>O</span>
        <span className='board_cell'>X</span>
        <span className='board_cell'>X</span>
        <span className='board_cell'>O</span>
        <span className='board_cell'>X</span>
        <span className='board_cell'>X</span>
        <span className='board_cell'>O</span>
      </div>
      <h2 className='tic_nextTurn'>Es el turno de: X</h2>
      <button className='tic_restart'>Reiniciar</button>
    </main>
  )
}

export default App
