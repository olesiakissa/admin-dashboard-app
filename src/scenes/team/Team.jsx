import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { colorTokens } from '../../themes';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import Header from '../../components/Header';

const Team = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const columns = [
    {
        field: "id", // cell value
        headerName: "ID"
    },
    {
        field: "name",
        headerName : "Name",
        flex: 1,
        cellClassName: "name-column--cell"
    },
    {
        field: "age",
        headerName : "Age",
        type: "number",
        headerAlign: "left",
        align: "left"
    },
    {
        field: "phone",
        headerName : "Phone Number",
        flex: 1
    },
    {
        field: "email",
        headerName : "Email",
        flex: 1
    },
    {
        field: "access",
        headerName : "Access Level",
        flex: 1,
        renderCell: ({row: { access }}) => {
            return (
                <Box
                    width="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                        access === "admin"
                        ? colors.lightEmerald[600]
                        : colors.lightEmerald[700]
                    }
                    borderRadius="4px"
                >
                {/* Showing icons depending on access level */}
                {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {access === "manager" && <SecurityOutlinedIcon />}
                {access === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.gray[100]} sx={{ml: "5px"}}>
                    {access}
                </Typography>
                </Box>
            )
        }
    }
];

  return (
    <Box m="20px">
        <Header title="TEAM" subtitle="Managing the Team members"/>
        <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root" : { border: "none"},
                "& .MuiDataGrid-cell" : { borderBottom: "none"},
                "& .name-column--cell" : { color:  colors.lightEmerald[300]},
                "& .MuiDataGrid-columnHeaders" : { 
                    backgroundColor: colors.blue[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller" : { backgroundColor : colors.darkBlue[400]},
                "& .MuiDataGrid-footerContainer" : {
                    borderTop: "none",
                    backgroundColor: colors.blue[700]
                }
            }}
        >
            <DataGrid
                rows={mockDataTeam}
                columns={columns}
            >
            </DataGrid>
        </Box>
    </Box>
  )
}

export default Team;