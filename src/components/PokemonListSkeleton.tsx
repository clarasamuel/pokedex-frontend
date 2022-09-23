import React, {FunctionComponent} from 'react';
import PokemonRowSkeleton from "./PokemonRowSkeleton";

/**
 * Au vu des grid --> il y a 15 lignes en mobile; 5 en 'tablette' et 3 en 'desktop'
 * @constructor
 */
const PokemonListSkeleton: FunctionComponent = () => {
	return (
		<>
			{
				[...Array(3)].map(() => (
					<div className='mb-4'>
						<PokemonRowSkeleton/>
					</div>
				))
			}
			<div className='xl:hidden'>
				{
					[...Array(2)].map(() => (
						<div className='mb-4'>
							<PokemonRowSkeleton/>
						</div>
					))
				}
			</div>
			<div className='md:hidden'>
				{
					[...Array(10)].map(() => (
						<div className='mb-4'>
							<PokemonRowSkeleton/>
						</div>
					))
				}
			</div>
		</>

	);
}

export default PokemonListSkeleton;
