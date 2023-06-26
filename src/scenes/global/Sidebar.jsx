import React from 'react';
import { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { colorTokens } from '../../themes';
import  HomeOutlinedIcon               from '@mui/icons-material/HomeOutlined';
import  PeopleOutlinedIcon             from '@mui/icons-material/PeopleOutlined';
import  ContactsOutlinedIcon           from '@mui/icons-material/ContactsOutlined';
import  ReceiptOutlinedIcon            from '@mui/icons-material/ReceiptOutlined';
import  PersonOutlinedIcon             from '@mui/icons-material/PersonOutlined';
import  CalendarTodayOutlinedIcon      from '@mui/icons-material/CalendarTodayOutlined';
import  HelpOutlinedIcon               from '@mui/icons-material/HelpOutlined';
import  BarChartOutlinedIcon           from '@mui/icons-material/BarChartOutlined';
import  PieChartOutlinedIcon           from '@mui/icons-material/PieChartOutlined';
import  TimelineOutlinedIcon           from '@mui/icons-material/TimelineOutlined';
import  MenuOutlinedIcon               from '@mui/icons-material/MenuOutlined';
import  MapOutlinedIcon                from '@mui/icons-material/MapOutlined';

// Custom Menu item with icon =>  can't be exported into separate file
// since the material ui icons stop showing
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.gray[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);          // sidebar is / not collapsed
  const [selectedPage, setSelectedPage] = useState('Dashboard');  // currently selected item on a dashboard

  return (
    <Box
      sx={{
        "$ .pro-sidebar-inner" : {
          background: `${colors.darkBlue[400]} !important`
        },
        "$ .pro-sidebar-wrapper" : {
          backgroundColor: "transparent !important"
        },
        "$ .pro-inner-item" : {
          padding: "5px 35px 5px 20px !important"
        },
        "$ .pro-inner-item:hover" : {
          color: "868dfb !important"
        },
        "$ .pro-inner-item:active" : {
          color: "6870fa !important"
        }
      }}>
    <ProSidebar collapsed={isCollapsed}>
      <Menu iconShape='square'>
        {/* LOGO / MENU ICON */}
        <MenuItem onClick={() => setIsCollapsed(!isCollapsed)}
                  icon={isCollapsed ? <MenuOutlinedIcon /> : undefined} // shows hamburger icon
                  style={{
                    margin: "10px 0 20px 0",
                    color: colors.gray[100]
                  }}
        >
          {!isCollapsed && (
            <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} ml="15px">
              <Typography variant='h3' color={colors.gray[100]}>ADMINIS</Typography>
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon></MenuOutlinedIcon>
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {/* USER */}

        {!isCollapsed && (
          <Box mb="25px">
             <Box  display="flex" justifyContent="center" alignItems="center">
              <img src={`assets/user.jpg`} 
                   alt="profile user"
                   width="100px"
                   heigth="100px"
                   style={{ cursor: "pointer", borderRadius: "50%" }} />
             </Box>
             <Box textAlign="center" mt="5px">
              <Typography variant='h2' color={colors.gray[100]} fontWeight="bold">Jane Doe</Typography>
              <Typography variant='h5' color={colors.lightEmerald[500]}>Admin</Typography>
             </Box>
          </Box>
        )}

        {/* MENU ITEMS */}
        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item 
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Typography
            variant="h6"
            color={colors.gray[300]}
            sx={{ m: "15px 0 5px 20px" }}
            >
              Data
          </Typography>
          <Item 
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Item 
            title="Contacts"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Item 
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Typography
            variant="h6"
            color={colors.gray[300]}
            sx={{ m: "15px 0 5px 20px" }}
            >
            Pages
          </Typography>
          <Item 
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Item 
            title="Calendar"
            to="/calendar"
            icon={<CalendarTodayOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Item 
            title="FAQ Page"
            to="/faq"
            icon={<HelpOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Typography
            variant="h6"
            color={colors.gray[300]}
            sx={{ m: "15px 0 5px 20px" }}
            >
            Charts
          </Typography>
          <Item 
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Item 
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Item 
            title="Line Chart"
            to="/char"
            icon={<TimelineOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
          <Item 
            title="Geography Chart"
            to="/geography"
            icon={<MapOutlinedIcon />}
            selected={selectedPage}
            setSelected={setSelectedPage}
          />
        </Box>
      </Menu>
    </ProSidebar>
    </Box>
  )
}

export default Sidebar