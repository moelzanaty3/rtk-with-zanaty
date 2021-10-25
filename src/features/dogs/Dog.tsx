import { IDog } from './IDog'

interface IPops {
  dog: IDog
}

const Dog: React.FC<IPops> = ({ dog }) => {
  return (
    <div className="d-flex align-items-center">
      <div className="flex-shrink-0">
        <img
          src={dog.image.url}
          className="rounded-circle"
          alt={dog.name}
          width="120"
          height="120"
        />
      </div>
      <div className="flex-grow-1 card-body text-left">
        <h4 className="card-title">{dog.name}</h4>
        <h5 className="card-subtitle mb-2 text-muted">Breed Group: {dog.breed_group}</h5>
        <p className="card-text">🐾 {dog.bred_for}</p>
        <p className="card-text">🐶 {dog.life_span}</p>
      </div>
    </div>
  )
}
export default Dog
