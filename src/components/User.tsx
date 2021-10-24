import IUser from '../interfaces/IUser'

interface IPops {
  user: IUser
}

const User: React.FC<IPops> = ({ user }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="flex-shrink-0">
        <img
          src={user.picture.large}
          className="card-img-top rounded-circle"
          alt={user.name.title}
        />
      </div>
      <div className="flex-grow-1 card-body text-left">
        <h4 className="card-title">
          {user.name.first} {user.name.last}
        </h4>
        <h5 className="card-subtitle mb-2 text-muted">📧 {user.email}</h5>
        <p className="card-text">
          🏠 {user.location.country} - {user.location.state} - {user.location.city}
        </p>
        <p className="card-text">☎️ {user.phone}</p>
      </div>
    </div>
  )
}
export default User
