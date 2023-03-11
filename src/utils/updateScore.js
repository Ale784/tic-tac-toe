import { TURNS } from '../components/constant'

export function updateScore (player, score) {
  const newScore = { ...score }
  if (player === TURNS.X) {
    newScore.player += 1
  } else if (player === TURNS.O) {
    newScore.machine += 1
  } else if ((player === false)) {
    newScore.tie += 1
  }
  return newScore
}
