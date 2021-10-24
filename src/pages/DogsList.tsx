import React from 'react'
import Dog from '../components/Dog'
import { useFetchBreedsQuery } from '../features/dogs/dogsApiSlice'
import { IDog } from '../interfaces/IDog'

const DogsList = () => {
  const [numDogs, setNumDogs] = React.useState(10)
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs)

  return (
    <div>
      <header className="App-header">Dogs List</header>
      <main>
        <div className="d-flex mt-1 justify-content-center align-items-center">
          <input
            type="number"
            placeholder="number of dogs"
            value={numDogs}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              // plus + convert the string to number format
              setNumDogs(+event.target.value)
            }}
          />
        </div>
        {isFetching && (
          <div className="loading">
            <img
              src="https://i.pinimg.com/originals/5d/94/54/5d9454bff0c9c75b4e85a0924ed7c0eb.gif"
              alt="dog loading"
            />
          </div>
        )}
        {!isFetching && (
          <div className="row users-container">
            {data.map(
              (dog: IDog): JSX.Element => (
                <div className="col-12 col-md-6" key={dog.id}>
                  <Dog dog={dog} />
                </div>
              ),
            )}
          </div>
        )}
      </main>
    </div>
  )
}
export default DogsList
