import React from 'react'
import { Box, useTheme } from '@mui/material'
import { colorTokens } from '../themes';

const ProgressCircle = ({ progress='0.75', size='40'} ) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const angle = progress * 360;

    return (
        <Box
            sx={{
                background: `radial-gradient(${colors.darkBlue[500]} 55%, transparent  56%),
                            conic-gradient(transparent 0deg ${angle}deg, ${colors.blue[500]} ${angle}deg 360deg)
                            ${colors.lightEmerald[500]}`,
                borderRadius: "50%",
                width:  `${size}px`,
                height: `${size}px`
            }} 
            >

        </Box>
    )
}

export default ProgressCircle