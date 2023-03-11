export const Square = ({ children, updateBoard, index }) => {
  function handleClick () {
    updateBoard(index)
  }
  return (
    <div className='square' onClick={handleClick}>
      {children}
    </div>
  )
}
