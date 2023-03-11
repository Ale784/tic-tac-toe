/**
 *  Implement component to initialize the game by clicking a button
*/

export function GameStarted ({ setGameStarted }) {
  const handleCLick = () => {
    setGameStarted(true)
  }

  return (
    <div>
      <button onClick={handleCLick}>Hit me to start the game</button>
    </div>
  )
}
