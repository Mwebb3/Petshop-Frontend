import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async() => {
      const response = await axios.get("http://localhost:3000/api/pets");
      setPets(response.data);
    };
    fetchPets()
  }, [])

  return (
    <>
    <h1>Petshop ({pets.length})</h1>
    <ul>
      {
        pets.map((pet) => {
          return (
            <li key={pet.id} className={pet.is_favorite ? "favorite" : ""}>
              {pet.name}
            </li>
          )
        })
      }
    </ul>
    </>
  )
}

export default App
