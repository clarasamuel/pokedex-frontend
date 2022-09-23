import React, {FunctionComponent} from 'react';
import {Pokemon} from "../interfaces/PokemonInterface";

const CardPokemon: FunctionComponent<{ pokemon: Pokemon }> = ({pokemon}) => {

	return (
		<div className='rounded shadow bg-pokemon-darkest-purple px-4 flex flex-row justify-around' key={pokemon.id}>
			<img src={pokemon.picture ?? 'img_pokemon_not_found.png'} alt={pokemon.name}/>
			<span className='capitalize flex items-center'>{pokemon.name}</span>
		</div>
	);
}

export default CardPokemon;
