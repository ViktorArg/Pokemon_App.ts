import React, {useState} from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {RootStore} from "./Store";
import {GetPokemon} from "./actions/PokemonActions";
import {SearchInput} from "./components/SearchInput";

function App() {
  const dispatch = useDispatch();
  //                              selector: (state : DefaultRootState)
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
    
  const handleSubmit = (pokemonState:string) => {
    if (pokemonState == "") {
      dispatch(GetPokemon("charizard"));
    } else {
      dispatch(GetPokemon(pokemonState));
    }
  }
  
  console.log("pokemon state:", pokemonState);

  return (
    <div className="App">
      <SearchInput newPokemonName={handleSubmit}/>
        {pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="" />
            {pokemonState.pokemon.abilities.map(ability => {
              return <p>{ability.ability.name}</p>
            })}
          </div>
        )}
    </div>
  );
}

export default App;
