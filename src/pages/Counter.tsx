import React from 'react'

function Counter() {
  return (
    <div>
      <header className="App-header">Redux Counter</header>
      <main className="Counter">
        <p className="count">0</p>
      </main>
      <div className="Counter-actions">
        <button className="primary">Increment</button>
        <button className="danger">Decrement</button>
        <button className="info">Reset</button>
        <p>
          <label>
            Increment By <br />
            <input type="number" />
          </label>
        </p>
      </div>
    </div>
  )
}

export default Counter
