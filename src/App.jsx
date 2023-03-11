import { useState } from 'react'
import './App.css'
import { GameStarted } from './components/GameStarted'
import { TURNS } from './components/constant'
import { Board } from './components/Board'

function App () {
  const [gameStarted, setGameStarted] = useState(false)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // Updates the board when a player click on a squiare
  function updateBoard (index) {
    setBoard(prevBoard => {
      // Make a copy of the board array
      const newBoard = [...prevBoard]
      // Sets the value at the clicked index to X or O
      newBoard[index] = turn

      return newBoard
    })

    changeTurn()
  }

  function changeTurn () {
    setTurn(prevTurn => prevTurn === TURNS.X ? TURNS.O : TURNS.X)
  }

  return (
    <div>
      {!gameStarted
        ? (

          <GameStarted setGameStarted={setGameStarted} />

          )
        : (

          <Board board={board} updateBoard={updateBoard} currentTurn={turn} />

          )}
    </div>
  )
}

export default App
