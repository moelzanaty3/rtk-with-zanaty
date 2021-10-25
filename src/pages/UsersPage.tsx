import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import User from '../features/users/User'
import { fetchUsers } from '../features/users/usersSlice'
import IUser from '../features/users/IUser'

const UsersPage = () => {
  const [value, setValue] = React.useState<number>(0)
  const users = useAppSelector(state => state.users)
  const dispatch = useAppDispatch()

  // When clicked, dispatch `fetchUsers`:
  const handleClick = () => dispatch(fetchUsers(value))

  return (
    <div>
      <header className="App-header">Users List</header>
      <main>
        <div className="d-flex mt-1 justify-content-center align-items-center">
          <input
            type="number"
            placeholder="number of users"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // plus + convert the string to number format
              setValue(+event.target.value)
            }}
          />
          <button className="primary" onClick={handleClick}>
            {users.status === 'loading' ? 'Loading users...' : 'Load Users'}
          </button>
        </div>
        <div className="row users-container">
          {users.list.map(
            (user: IUser): JSX.Element => (
              <div className="col-12 col-md-6" key={user.login.uuid}>
                <User user={user} />
              </div>
            ),
          )}
        </div>
      </main>
    </div>
  )
}
export default UsersPage
