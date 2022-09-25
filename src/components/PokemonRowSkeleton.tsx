import React, {FunctionComponent} from 'react';
import ContentLoader from "react-content-loader";

const PokemonRowSkeleton: FunctionComponent = () => {
	return (
		<ContentLoader width='100%' height='96px'>
			<rect x="0" y="0" rx="4" ry="4" width="100%" height="96" />
		</ContentLoader>
	);
}

export default PokemonRowSkeleton;
