import { ChangeEvent, createContext, useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import PokemonInfo from './PokemonInfo';

export const PokemonContext = createContext({response: {}});

function App() {
  
  const [currentPokemon, setCurrentPokemon] = useState("");
  const [responseData, setResponseData] = useState({})
  
  const handlePokemon = (event: ChangeEvent<HTMLInputElement>) => {

    setCurrentPokemon(event.target.value)

  }

   useEffect(() => {
    if (currentPokemon !== "") {
     axios.get('https://pokeapi.co/api/v2/pokemon/' + currentPokemon)
      .then((response)=> {
        setResponseData(response)
        

      }).catch((error)=> {
        console.log(error)

      })
    }
   }, [currentPokemon]
   )

  return (
    <PokemonContext.Provider value={{response:responseData}}>
    <h1 className='title'>Pokedex</h1>
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      Eum quis consequatur architecto tenetur, magni sit numquam assumenda 
      dolorum. Velit tempore, ea aliquid omnis accusamus quod natus sapiente sint fugit ad.
    </p>
    {/*Add pokemon and search */}
      <div className='searchBox'>
        <button>
          +
        </button>
        <input type="text" name="searchPokemon" onChange={handlePokemon}/>
      </div>
      <div>
    {/*Pokemon info */}
      <PokemonInfo/>
      </div>
    </PokemonContext.Provider>
  )
}

export default App
function crateContext() {
  throw new Error('Function not implemented.');
}

