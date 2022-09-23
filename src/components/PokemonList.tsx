import React, {FunctionComponent} from 'react';
import {Pokemon} from "../interfaces/PokemonInterface";
import CardPokemon from "./CardPokemon";

const PokemonList: FunctionComponent<{ pokemonToShow: Pokemon[] }> = ({pokemonToShow}) => {

	return (
		<div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4'>
			{
				pokemonToShow.map((poke) => <CardPokemon pokemon={poke}/>)
			}
		</div>
	);
}

export default PokemonList;
