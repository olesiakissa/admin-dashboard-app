import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { colorTokens } from '../themes';

const Header = ( {title, subtitle} ) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box mb="30px">
            <Typography variant='h2' 
                        color={colors.gray[100]} 
                        fontWeight="bold" 
                        sx={{ mb: "5px"}}>
                        {title}
            </Typography>
            <Typography variant='h5' 
                        color={colors.lightEmerald[400]} 
                        >
                        {subtitle}</Typography>
        </Box>
    )
}

export default Header;