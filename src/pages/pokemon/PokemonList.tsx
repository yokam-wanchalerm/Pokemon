import React, { useEffect, useState } from 'react';
import { Box, Grid } from "@mui/material";
import { PokemonClient } from '../../api/PokemonClient';
import { IPokemonItem } from '../../model/pekemon';
import PokemonItem from './PokemonItem';

const PokemonList = (): React.FunctionComponentElement<any> => {
    const [pokemonList, setPokemonList] = useState<IPokemonItem[]>([]);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        PokemonClient.getPokemon().then((res) => {
            setPokemonList(res);
        });
    }, []);

    const searchPokemon = (pokemonList: IPokemonItem[]) => {
        return pokemonList.filter((p) => p.name?.toLocaleLowerCase().includes(searchText))
    }

    const filterPokemonList = searchPokemon(pokemonList);

    return (
        <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
            py={'1.5rem'} width={'100%'}>
            <input type='text' id="searchbar" onKeyUp={(e: any) => setSearchText(e?.target?.value! || '')} />
            <Grid container>
                {filterPokemonList.length > 0 ? filterPokemonList.map((p) =>
                    <React.Fragment key={`pokemon${p.id}`}>
                        <Grid item xs={3}>
                            <PokemonItem data={p} />
                        </Grid>
                    </React.Fragment>)! : searchText ?
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                        py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                        <h1>Not Found</h1>
                    </Box>
                    :
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                        py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                        <h1>Loading</h1>
                    </Box>
                }
            </Grid>
        </Box>
    )
};

export default PokemonList;