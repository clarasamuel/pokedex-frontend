import React, {FunctionComponent, useEffect, useState} from 'react';
import {Pokemon} from "../../interfaces/PokemonInterface";
import PokemonService from "../../services/PokemonService";
import PokemonList from "../PokemonList";
import Pagination from "../Pagination";

const HomeView: FunctionComponent = () => {
	const [isLoading, setIsLoading] = useState(true)
	const [pokemonToShow, setPokemonToShow] = useState<Pokemon[]>([])
	const [page, setPage] = useState<number>(0)

	useEffect(() => {
		setIsLoading(true)
		//Récuperation des pokémons a afficher
		PokemonService.getPokemonList(page, 15).then((pokeToShow) => {
			setPokemonToShow(pokeToShow)
			setIsLoading(false)
		})
	}, [page])

	return (
		<div className='bg-gradient-to-b from-pokemon-light-purple to-pokemon-dark-purple'>
			<div className='container mx-auto py-12'>
				<div className='px-32 lg:px-56'>
					<img alt='Pokemon logo' src='International_Pokémon_logo.png'/>
				</div>
				<div className='mt-12 mx-32'>
					{
						isLoading ?
							'SCELETTON' :
							<PokemonList pokemonToShow={pokemonToShow}/>
					}
				</div>
				<div className='mt-12 flex justify-center'>
					<Pagination page={page} setPage={setPage} />
				</div>
			</div>
		</div>
	);
}

export default HomeView;
