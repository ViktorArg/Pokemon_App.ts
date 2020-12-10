import {combineReducers} from "redux";
import pokemonReducer from "./PokemonReducer";

//                                     reducers: {
const RootReducer = combineReducers({
    pokemon: pokemonReducer
});

export default RootReducer;