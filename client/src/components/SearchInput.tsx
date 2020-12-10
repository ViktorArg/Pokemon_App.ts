import React from 'react';

interface SearchInputProps {
    newPokemonName(name:string):void;
}

export const SearchInput:React.FC<SearchInputProps> = ({ newPokemonName }) => {
    const [pokemonName, setPokemonName] = React.useState("");
    const updatePokemonName = (event:React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(event.target.value)
    }
    const onSearchClick = () => {
        newPokemonName(pokemonName)
        setPokemonName("")
    }
    return (
        <div>
            <input type="text" onChange={updatePokemonName} value={pokemonName} placeholder="Pokemon name (lowercase)"/>
            <button onClick={onSearchClick}>Search</button>
        </div>
    )
}