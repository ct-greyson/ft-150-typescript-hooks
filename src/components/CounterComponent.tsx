import React from 'react'

interface CounterProps {
    increment: () => void,
    decrement: () => void,
    count: number
}

const CounterComponent = ({increment, decrement, count}: CounterProps) => {
  return (
    <>
        <h3>Count: {count}</h3>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
  )
}

export default CounterComponent