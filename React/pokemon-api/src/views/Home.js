import React, {useState} from 'react'
import Display from '../components/Display'

const Home = (props) => {
    const [pokemonList, setPokemonList] = useState([])

    return (
        <div>
        <Display pokemonList = {pokemonList} setPokemonList={setPokemonList} />
        </div>
    )
}

export default Home