/*
const resetBlocks = () => {
  setItems([])
  setCount(0)
}
*/

import { useContainer } from './containerBox'

function ResetButton() {
  const { setContainer } = useContainer()

  function resetBlocks() {
    setContainer([])
  }
  return (
    <button
      className="grid px-10 outer-btn place-items-center w-fit"
      onClick={resetBlocks}>
      Reset
    </button>
  )
}

export default ResetButton
