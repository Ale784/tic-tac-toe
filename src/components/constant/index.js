export const TURNS = {
  X: '🍉',
  O: '🍑'
}

export const winConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]
]

export const SCORE = {
  player: 0,
  machine: 0,
  tie: 0
}

export const PLAYERS = {
  player: 'PLAYER',
  tie: 'TIE',
  machine: 'MACHINE'
}
