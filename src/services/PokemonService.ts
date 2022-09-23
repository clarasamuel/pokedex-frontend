import {Pokemon} from "../interfaces/PokemonInterface";
import {httpService} from "./HttpService";

class PokemonService {
	/**
	 * Importation des classifications de locarno
	 * @param page
	 * @param limit
	 */
	getPokemonList = async (page: number = 0, limit: number = 20): Promise<Pokemon[]> => {
		try {
			const url = `${process.env.REACT_APP_URL_API}/pokemons?limit=${limit}&page=${page}`
			console.log(url)
			return await httpService.get(url)
		} catch (error) {
			console.log(error)
			return Promise.reject(error)
		}
	}
}

export default new PokemonService()
