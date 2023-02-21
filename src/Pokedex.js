import React from 'react'
import pokemons from './pokemons'
import Pokecard from './Pokecard'
import './Pokedex.css' 

const Pokedex = () => {
    return (
        <div className="Pokedex">
           {pokemons.map(pokemon => (
            <div className="Pokedex-item" key={pokemon.id}>
                <Pokecard  id={pokemon.id} name={pokemon.name} type={pokemon.type} exp={pokemon.base_experience}/>
            </div>
           ))}
        </div>
    )
}

export default Pokedex