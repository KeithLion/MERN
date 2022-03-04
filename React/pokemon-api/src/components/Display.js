import React, {useState,useEffect} from 'react'
import axios from 'axios'


const Display = (props) =>{
    const {pokemonList,setPokemonList} = useState(null);
    useEffect(()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon?=limit=807')
        .then(response=>{setPokemonList(response.data.results)})
    },[]);


    return(
        <div>
            <h1>Pokemon</h1>
                <ul>
                    {pokemonList.map((pokemon,index)=> (
                        <li key={index}>
                            {pokemon.name}
                        </li>
                        ))}
                </ul>
        </div>
    )
}

export default Display;