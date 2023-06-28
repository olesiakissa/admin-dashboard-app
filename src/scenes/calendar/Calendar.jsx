import { React, useState } from 'react';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import timeGridPlugin from '@fullcalendar/timegrid' ;
import listGridPlugin from '@fullcalendar/list' ;

import interactionPlugin from '@fullcalendar/interaction'
import { 
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme 
} from '@mui/material';

import Header from '../../components/Header';
import { colorTokens } from '../../themes';
import { formatDate } from '@fullcalendar/core';


const Calendar = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please, enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }
    }

    const handleEventClick = (selected) => {
        if (window.confirm(
            `Are you sure you want to delete the event '${selected.event.title}' ?`
            )) {
                selected.event.remove();
            }
    };

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Full Calendar interactive page" />
            <Box display="flex" justifyContent="space-between">
                {/* Calendar sidebar */}

                <Box 
                flex="1 1 20%" 
                backgroundColor={colors.darkBlue[400]} 
                p="15px" 
                borderRadius="4px">
                    <Typography variant="h5">Events</Typography>
                    <List>
                       {currentEvents.map( (e) => (
                        <ListItem
                            key={e.id}
                            sx={{backgroundColor: colors.lightEmerald[500],
                            margin: "10px 0",
                            borderRadius: "2px"}}
                            >
                            <ListItemText
                                primary={e.title}
                                secondary={
                                    <Typography>
                                        {formatDate(e.start, 
                                        {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                    </Typography>
                                }
                                >
                            </ListItemText>
                        </ListItem>
                       ))}
                    </List>
                </Box>

                {/* Calendar widget */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listGridPlugin
                        ]}
                        headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)} // saving the events
                        initialEvents={[
                            {
                                id: "1234",
                                title: "All-day event",
                                date: "2023-06-28"
                            },
                            {
                                id: "5678",
                                title: "Timed event",
                                date: "2023-06-29"
                            }
                        ]}
                    >

                    </FullCalendar>
                </Box>
            </Box>
        </Box>
    )
}

export default Calendar