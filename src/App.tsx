import { Link, Redirect, Route, Switch } from 'react-router-dom'

import CounterPage from './pages/CounterPage'
import DogsPage from './pages/DogsPage'
import UsersPage from './pages/UsersPage'

import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      {/*Switch to tell to React Router to load only one route at a time*/}
      <Switch>
        <Route path="/" exact component={CounterPage} />
        <Route path="/users" component={UsersPage} />
        <Route path="/dogs" component={DogsPage} />
        <Route
          path="/404"
          render={() => (
            <div className="page-not-found">
              <h1>404: page not found</h1>
              <Link to="/">Home</Link>
            </div>
          )}
        />
        <Redirect to="/404" />
      </Switch>
    </div>
  )
}

export default App
