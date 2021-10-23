import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { decrement, increment, incrementBy, reset } from '../features/counter/counterSlice'

function Counter() {
  const [value, setValue] = React.useState<number>(0)
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <header className="App-header">Redux Counter</header>
      <main className="Counter">
        <p className="count">{count}</p>
      </main>
      <div className="Counter-actions">
        <button
          className="primary"
          onClick={() => {
            dispatch(increment())
          }}
        >
          Increment
        </button>
        <button
          className="danger"
          onClick={() => {
            dispatch(decrement())
          }}
        >
          Decrement
        </button>
        <button
          className="info"
          onClick={() => {
            dispatch(reset())
          }}
        >
          Reset
        </button>
        <div className="d-flex mt-1 justify-content-center align-items-center">
          <input
            type="number"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // plus + convert the string to number format
              setValue(+event.target.value)
            }}
          />
          <button
            className="warning"
            onClick={() => {
              dispatch(incrementBy(value))
            }}
          >
            increment By
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
