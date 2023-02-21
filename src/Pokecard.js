import React from 'react'
import './Pokecard.css'


const Pokecard = (props) => {
    return (
        <div className="Pokecard">
            <h2 className='Pokecard-header'>{props.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt=''/>
            <p>Type: {props.type}</p>
            <p>EXP: {props.exp}</p>
        </div>
    )
}

export default Pokecard