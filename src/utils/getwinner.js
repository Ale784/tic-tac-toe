import { winConditions } from '../components/constant'

export const getWinner = (newBoard) => {
  for (const combo of winConditions) {
    if (newBoard[0] &&
        newBoard[combo[0]] === newBoard[combo[1]] &&
        newBoard[combo[0]] === newBoard[combo[2]]) {
      return newBoard[combo[0]]
    }
  }

  if (!newBoard.includes(null)) {
    return false
  }
  return null
}
