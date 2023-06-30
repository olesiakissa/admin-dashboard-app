import React from 'react';
import { colorTokens } from '../../themes';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon            from '@mui/icons-material/Email';
import PointOfSaleIcon      from '@mui/icons-material/PointOfSale';
import PersonAddIcon        from '@mui/icons-material/PersonAdd';
import TrafficIcon          from '@mui/icons-material/Traffic';
import Header               from '../../components/Header';
import LineChart            from '../charts/LineChart';
import BarChart             from '../charts/BarChart';
import PieChart             from '../charts/PieChart';
import GeographyChart       from '../charts/GeographyChart';
import StatBox              from '../../components/StatBox';
import ProgressCircle       from '../../components/ProgressCircle';

const Dashboard = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD"
                subtitle="Welcome to your dashboard"/>
      </Box>

      <Box>
        <Button
        sx={{ 
            backgroundColor: colors.blue[700], 
            color: colors.gray[100], 
            fontSize: "14px", 
            fontWeight: "bold",
            padding: "10px 20px"
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }}/>
          Download Reports
        </Button>
      </Box>

      {/* Grid of charts */}
      <Box display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* First row */}
        <Box  gridColumn="span 3" 
              backgroundColor={colors.darkBlue[400]} 
              display="flex"
              alignItems="center"
              justifyContent="center"
        >
          <StatBox 
              title="15,688"
              subtitle="Emails Sent"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon 
                sx={{ 
                  color: colors.lightEmerald[600], 
                  fontSize: "26px",
                }}/>
              }
          />
        </Box>
        <Box  gridColumn="span 3" 
              backgroundColor={colors.darkBlue[400]} 
              display="flex"
              alignItems="center"
              justifyContent="center"
        >
          <StatBox 
              title="422,713"
              subtitle="Sales Obtained"
              progress="0.5"
              increase="+21%"
              icon={
                <PointOfSaleIcon 
                sx={{ 
                  color: colors.lightEmerald[600], 
                  fontSize: "26px",
                }}/>
              }
          />
        </Box>
        <Box  gridColumn="span 3" 
              backgroundColor={colors.darkBlue[400]} 
              display="flex"
              alignItems="center"
              justifyContent="center"
        >
          <StatBox 
              title="2,363"
              subtitle="New Clients"
              progress="0.30"
              increase="+3%"
              icon={
                <PersonAddIcon 
                sx={{ 
                  color: colors.lightEmerald[600], 
                  fontSize: "26px",
                }}/>
              }
          />
        </Box>
        <Box  gridColumn="span 3" 
              backgroundColor={colors.darkBlue[400]} 
              display="flex"
              alignItems="center"
              justifyContent="center"
        >
          <StatBox 
              title="1,663,124"
              subtitle="Traffic inbound"
              progress="0.80"
              increase="+12%"
              icon={
                <TrafficIcon 
                sx={{ 
                  color: colors.lightEmerald[600], 
                  fontSize: "26px",
                }}/>
              }
          />
        </Box>

        {/* Second row */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.darkBlue[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.lightEmerald[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.lightEmerald[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.darkBlue[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.darkBlue[500]}`}
            colors={colors.gray[100]}
            p="15px"
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.darkBlue[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.lightEmerald[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.gray[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.gray[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.lightEmerald[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        ></Box>

        {/* Third Row */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.darkBlue[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.lightEmerald[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.darkBlue[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.darkBlue[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
       
    </Box>
  )
}

export default Dashboard;