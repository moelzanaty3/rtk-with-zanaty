import { Link, Redirect, Route, Switch } from 'react-router-dom'

import Counter from './pages/Counter'
import DogsList from './pages/DogsList'
import UsersList from './pages/UsersList'

import Navigation from './components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      {/*Switch to tell to React Router to load only one route at a time*/}
      <Switch>
        <Route path="/" exact component={Counter} />
        <Route path="/users" component={UsersList} />
        <Route path="/dogs" component={DogsList} />
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
