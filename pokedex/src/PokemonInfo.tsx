import React, { useContext } from 'react';
import { PokemonContext } from './App';


const PokemonInfo = () => {

    const {response} = useContext(PokemonContext)

    console.log(response)

    return (
        <div>
            <img src={response && response.data ? response.data.sprites.front_default : ""} alt="" />
            {response && response.data ? response.data.name: ""}
        </div>
    );
};

export default PokemonInfo;