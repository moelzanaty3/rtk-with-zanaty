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
        <div className="d-flex mt-1 justify-content-center align-items-center">
          <input type="number" />
          <button className="warning">increment By</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
