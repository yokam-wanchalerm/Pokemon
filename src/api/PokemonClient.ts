import { IPokemonItem } from "../model/pekemon";

const PokemonAPI = 'https://pokeapi.co/api/v2';
export class PokemonClient {

    public static async getPokemon(): Promise<IPokemonItem[]> {
        const promises = [];
        for (let i = 1; i <= 150; i++) {
            const url = `${PokemonAPI}/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        return Promise.all(promises).then((results) => {
            return results.map((result) => ({
                name: result.name,
                image: result.sprites['front_default'],
                type: result.types.map((type: any) => type.type.name).join(', '),
                id: result.id
            }));
        });
    }
}
