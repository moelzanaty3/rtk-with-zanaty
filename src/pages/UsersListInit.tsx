import UserInit from '../components/UserInit'

const UsersListInit = () => {
  return (
    <div>
      <header className="App-header">Users List</header>
      <main>
        <button className="primary mt-1">Get Users</button>
        <div className="row users-container">
          <div className="col-12 col-md-6">
            <UserInit />
          </div>
        </div>
      </main>
    </div>
  )
}
export default UsersListInit
