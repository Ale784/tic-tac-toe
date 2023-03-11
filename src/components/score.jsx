import { TURNS, PLAYERS } from './constant'

export function ScoringBoard (score) {
  const { player, tie, machine } = score.score

  return (
    <div>
      <section className='winner'>
        <div className='text'>
          <section className='score'>
            <div>
              <h2>{PLAYERS.player} 1 ({TURNS.X})</h2>
              <span> {player}</span>
            </div>

            <div>
              <h2>{PLAYERS.tie}</h2>
              <span>{tie}</span>
            </div>

            <div>
              <h2>MACHINE ({TURNS.O})</h2>
              <span>{machine}</span>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
