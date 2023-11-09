import React, { useEffect, useState } from 'react';
import { Box, Grid } from "@mui/material";
import { IPokemonItem } from '../../model/pekemon';
import { useNavigate } from 'react-router-dom';
import PageRoute from '../../utils/constants/PageRoute';

export interface PokemonItemIProps {
    data: IPokemonItem
}

const PokemonItem = (props: PokemonItemIProps): React.FunctionComponentElement<any> => {
    const { data } = props;

    let navigate = useNavigate();
    const gotoDetail = () => {
        let path = PageRoute.HOME;
        navigate(path);
    }

    return (
        <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
            py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'} onClick={gotoDetail}>
            <img src={data.image} />
            <h1 >{data.name}</h1>
            <h1>{data.type}</h1>
        </Box>
    )
};

export default PokemonItem;