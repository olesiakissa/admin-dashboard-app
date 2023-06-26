import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { colorTokens } from '../../themes';
import { mockDataInvoices } from '../../data/mockData';

import Header from '../../components/Header';

const Invoices = () => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    const columns = [
    {
        field: "id",
        headerName: "ID"
    },
    {
        field: "name",
        headerName : "Name",
        flex: 1,
        cellClassName: "name-column--cell"
    },
    {
        field: "email",
        headerName : "Email",
        flex: 1
    },
    {
        field: "cost",
        headerName : "Cost",
        flex: 1,
        renderCell: (params) => {
            <Typography color={colors.lightEmerald[500]}>
                ${params.row.cost}
            </Typography>
        }
    },
    {
        field: "phone",
        headerName : "Phone Number",
        flex: 1
    },
    {
        field: "date",
        headerName : "Date",
        flex: 1
    }
];

  return (
    <Box m="20px">
        <Header title="INVOICES" subtitle="List of invoice balances"/>
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
                },
                "& .MuiCheckbox-root" : {
                    color: `${colors.lightEmerald[200]} !important`
                }
            }}
        >
            <DataGrid
                checkboxSelection
                rows={ mockDataInvoices }
                columns={ columns }

            >
            </DataGrid>
        </Box>
    </Box>
  )
}

export default Invoices;