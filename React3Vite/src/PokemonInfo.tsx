import React, { useContext } from 'react';
import { PokemonContext } from './AppPokedex';

const PokemonInfo = () => {

    const {response} = useContext(PokemonContext)

    console.log(response)

    return (
        <div>
            <img src={response === undefined ? "" : response.data.sprites.front_default} alt="" />
            {response === undefined ? "" : response.data.name}
        </div>
    );
};

export default PokemonInfo;