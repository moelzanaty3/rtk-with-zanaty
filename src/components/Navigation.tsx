import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <Link className="nav-link" to="/">
        <span>Counter</span>
      </Link>
      <Link className="nav-link" to="/users">
        <span>Users</span>
      </Link>
      <Link className="nav-link" to="/dogs">
        <span>Dogs</span>
      </Link>
    </nav>
  )
}
