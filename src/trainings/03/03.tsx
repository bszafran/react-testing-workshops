import { useState } from "react"

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0)

  const onIncreaseCounter = () => setCounterValue((prevValue) => prevValue + 1)
  const onDecreaseCounter = () =>
    setCounterValue((prevValue) => {
      if (prevValue !== 0) {
        return prevValue - 1
      }
      return 0
    })

  return (
    <div>
      <div>Counter value: {counterValue}</div>
      <button onClick={onIncreaseCounter}>Increase</button>
      <button onClick={onDecreaseCounter}>Decrease</button>
    </div>
  )
}

export default Counter
