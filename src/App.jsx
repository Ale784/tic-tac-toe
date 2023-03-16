import { useState } from 'react'
import './App.css'
import { TURNS, SCORE } from './components/constant'
import { Board } from './components/Board'
import { getWinner } from './utils/getwinner'
import { motion } from 'framer-motion'
import { updateScore } from './utils/updateScore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// import confetti from 'canvas-confetti'
function App () {
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

    const messageWinner = `${newWinner ? 'Player' + newWinner + 'wins' : 'TIE'}!`

    const notify = () => toast(messageWinner, { autoClose: 900 })

    if (newWinner) {
      setWinner(newWinner)
      notify()
      restartGame()
    } else if ((newWinner === false)) {
      setWinner(false)
      restartGame()
      notify()
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
    }, 400)
  }

  function RestartScore () {
    setScore(SCORE)
    restartGame()
  }

  return (
    <main>
      <section>
        <ToastContainer />
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
      </section>
    </main>
  )
}

export default App
