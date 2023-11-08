import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";

interface TogglerIProps {
    darkMode: boolean,
    handleClick?: () => void;
}

const Toggler = (props: TogglerIProps): React.FunctionComponentElement<TogglerIProps> => {
    const { darkMode, handleClick } = props;
    const transition = 'all 250ms ease';

    return (
        <Box fontSize={'1.5rem'} sx={{ cursor: 'pointer', ":hover": { transform: 'translateY(-3px)', transition: transition } }}>
            {
                darkMode ?
                    <span onClick={handleClick} aria-label="Full Moon" role="img">🌕</span>
                    :
                    <span onClick={handleClick} aria-label="New Moon" role="img">🌑</span>
            }
        </Box>
    )
};

export default Toggler;