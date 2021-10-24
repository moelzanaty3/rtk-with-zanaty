import { useAppDispatch, useAppSelector } from './app/hooks'
import Counter from './pages/Counter'
import UsersListInit from './pages/UsersListInit'

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <UsersListInit />
    </div>
  )
}

export default App
