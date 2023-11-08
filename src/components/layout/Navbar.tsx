import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Toggler from './Toggler';

interface NevbarIProps {
    darkMode: boolean,
    handleClick?: () => void;
}

const Navbar = (props: NevbarIProps): React.FunctionComponentElement<NevbarIProps> => {
    const { darkMode, handleClick } = props;
    return (
        <Box component={'nav'} width={'100%'}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}
                gap={{ xs: '2rem', md: '8rem' }} fontSize={'1rem'}>
                <Box component={'h1'}>
                    Prokemons
                </Box>
                <Toggler darkMode={darkMode} handleClick={handleClick} />
            </Box>
        </Box>
    )
};

export default Navbar;