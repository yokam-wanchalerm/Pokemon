import React, { lazy, useEffect, useState } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Style from '../../assetes/sass/BaseLayout.module.scss'
import PageRoute from '../../utils/constants/PageRoute';
import PokemonList from '../../pages/pokemon/PokemonList';
import Navbar from '../layout/Navbar';
const PokemonDetail = lazy(() => import('../../pages/pokemon/PokemonDetail'));

interface RoutesItem {
    path: string;
    Component: React.FunctionComponent;
}

const BaseLayout = () => {
    let [darkMode, setDarkMode] = useState(false);

    const publicRoutes: RoutesItem[] = [
        { path: PageRoute.HOME, Component: PokemonList },
        { path: PageRoute.DETAIL, Component: PokemonDetail }
    ];

    const handleToggleDarkMode = () => {
        let oppositeOfCurrentDarkMode = !darkMode
        console.log(oppositeOfCurrentDarkMode)
        localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
        setDarkMode(oppositeOfCurrentDarkMode)
    }

    useEffect(() => {
        let detectedDarkMode = eval(localStorage.getItem('darkMode') || '');

        if (detectedDarkMode) {
            setDarkMode(detectedDarkMode)
        } else {
            localStorage.setItem('darkMode', 'false')
        }
    }, []);

    return (
        <Box className={darkMode ? Style.dark : Style.light}>
            <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
                justifyContent={'space-between'}>
                <Grid item>
                    <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
                </Grid>
                <Grid item flexGrow={1}>
                    <Routes>
                        {publicRoutes.map((route) => (
                            <Route key={route.path} {...route} />
                        ))}
                        <Route path='*' element={<Navigate to={PageRoute.HOME} replace />} />
                    </Routes>
                </Grid>
                <Grid item>
                    <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                        py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                        <p>&copy; 2023</p>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
};

export default BaseLayout;