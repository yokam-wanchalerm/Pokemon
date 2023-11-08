import React, { useEffect, useState } from 'react';
import { Box, Grid } from "@mui/material";

const PokemonList = (): React.FunctionComponentElement<any> => {
    return (
        <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
            py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
            <input type='text' />
        </Box>
    )
};

export default PokemonList;