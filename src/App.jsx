import { useState } from 'react'
import './App.css'
import { GameStarted } from './components/GameStarted'
import { TURNS, SCORE } from './components/constant'
import { Board } from './components/Board'
import { getWinner } from './utils/getwinner'
import { motion } from 'framer-motion'
import { updateScore } from './utils/updateScore'
// import confetti from 'canvas-confetti'
function App () {
  const [gameStarted, setGameStarted] = useState(false)
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)
  const [score, setScore] = useState(SCORE)

  // Updates the board when a player click on a squiare
  function updateBoard (index) {
    if (board[index] || winner) return
    // Make a copy of the board array
    const newBoard = [...board]
    // Sets the value at the clicked index to X or O
    newBoard[index] = turn

    setBoard(newBoard)

    changeTurn(turn)

    const newWinner = getWinner(newBoard)

    if (newWinner) {
      setWinner(newWinner)
      restartGame()
    } else if ((newWinner === false)) {
      setWinner(false)
      restartGame()
    }

    const saveScore = updateScore(newWinner, score)

    if (saveScore) {
      setScore(saveScore)
    }
  }

  function changeTurn () {
    setTurn(prevTurn => prevTurn === TURNS.X ? TURNS.O : TURNS.X)
  }

  function restartGame () {
    setTimeout(() => {
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
    }, 1000)
  }

  function RestartScore () {
    setScore(SCORE)
  }
  return (
    <main>
      <section>
        {!gameStarted
          ? (

            <GameStarted setGameStarted={setGameStarted} />

            )
          : (

            <motion.div
              animate={{ y: 20 }}
              initial={{ opacity: 7 }}
            >

              <Board
                board={board}
                updateBoard={updateBoard}
                currentTurn={turn}
                score={score}
                RestartScore={RestartScore}
              />

            </motion.div>

            )}
      </section>
    </main>
  )
}

export default App
