import { TURNS } from './constant'
import { ScoringBoard } from './score'
import { Square } from './Square'

export function Board ({ board, updateBoard, currentTurn, score, RestartScore }) {
  return (
    <section className='board'>
      <h1>Tic Tac Toe</h1>
      <h2>Player
        <span className={currentTurn === TURNS.X ? 'spanX' : 'span0'}>
          {currentTurn}
        </span>'s turn
      </h2>
      <button onClick={RestartScore}>Restart</button>
      <div className='game'>
        {

          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })

        }
      </div>

      <ScoringBoard score={score} />
    </section>
  )
}
