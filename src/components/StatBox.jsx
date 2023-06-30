import React from 'react'
import { Box, useTheme, Typography } from '@mui/material'
import { colorTokens } from '../themes';
import ProgressCircle from './ProgressCircle';

const StatBox = ({ title,subtitle, icon, progress, increase } ) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const angle = progress * 360;

    return (
        <Box width="100%" m="0 30px">
            <Box display="flex" justifyContent="space-between" >
                <Box>
                    {icon}
                    <Typography 
                        variant="h4" 
                        fontWeight="bold"
                        sx={{ color: colors.gray[100]}}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                   <ProgressCircle progress={progress}/> 
                </Box>
                <Box display="flex" justifyContent="space-between">
                <Typography 
                        variant="h5" 
                        sx={{ color: colors.lightEmerald[500]}}>
                        {subtitle}
                </Typography>
                <Typography 
                    variant="h5" 
                    fontStyle="italic"
                    sx={{ color: colors.lightEmerald[600]}}>
                        {increase}
                </Typography>
                </Box>
            </Box>

        </Box>
    )
}

export default StatBox