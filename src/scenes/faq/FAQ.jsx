import React from 'react'
import { 
    Box, 
    useTheme, 
    Typography, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails 
} from '@mui/material'
import Header from '../../components/Header';
import { ExpandMoreOutlined } from '@mui/icons-material';

import { colorTokens } from '../../themes';
const FAQ = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode)
  return (
    <Box m="20px">
        <Header title={"FAQ"} subtitle={"Frequently Asked Questions Page"}/>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography colors={colors.lightEmerald[500]} variant="h5">
                    A Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Shiver me timbers transom crow's nest booty nipper brig coffer take a caulk Yellow Jack black jack. 
                Capstan yawl scuppers Admiral of the Black overhaul belay Buccaneer loot hempen halter hail-shot.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography colors={colors.lightEmerald[500]} variant="h5">
                    A Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Shiver me timbers transom crow's nest booty nipper brig coffer take a caulk Yellow Jack black jack. 
                Capstan yawl scuppers Admiral of the Black overhaul belay Buccaneer loot hempen halter hail-shot.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography colors={colors.lightEmerald[500]} variant="h5">
                    A Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Shiver me timbers transom crow's nest booty nipper brig coffer take a caulk Yellow Jack black jack. 
                Capstan yawl scuppers Admiral of the Black overhaul belay Buccaneer loot hempen halter hail-shot.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography colors={colors.lightEmerald[500]} variant="h5">
                    A Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Shiver me timbers transom crow's nest booty nipper brig coffer take a caulk Yellow Jack black jack. 
                Capstan yawl scuppers Admiral of the Black overhaul belay Buccaneer loot hempen halter hail-shot.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography colors={colors.lightEmerald[500]} variant="h5">
                    A Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Shiver me timbers transom crow's nest booty nipper brig coffer take a caulk Yellow Jack black jack. 
                Capstan yawl scuppers Admiral of the Black overhaul belay Buccaneer loot hempen halter hail-shot.
                </Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreOutlined />}>
                <Typography colors={colors.lightEmerald[500]} variant="h5">
                    A Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Shiver me timbers transom crow's nest booty nipper brig coffer take a caulk Yellow Jack black jack. 
                Capstan yawl scuppers Admiral of the Black overhaul belay Buccaneer loot hempen halter hail-shot.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default FAQ;