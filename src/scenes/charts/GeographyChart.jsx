import React from 'react'
import { ResponsiveChoropleth } from '@nivo/geo';
import { useTheme, Box } from '@mui/material';
import { colorTokens } from '../../themes';
import { geoFeatures } from '../../data/mockGeoFeatures';
import { mockGeographyData as data } from '../../data/mockData';
import Header from '../../components/Header';


const GeographyChart = ( {isDashboard = false}) => {
    const theme = useTheme();
    const colors = colorTokens(theme.palette.mode);

    return (
        <Box m="20px">
        <Header title="Pie chart" subtitle="Simple Pie Chart" />
            <Box height="75vh" 
                 border={`1px solid ${colors.gray[100]}`}
                 borderRadius="4px">
            <ResponsiveChoropleth
                data={data}
                theme={{
                    axis: {
                    domain: {
                        line: {
                            stroke: colors.gray[100],
                        },
                    },
                    legend: {
                        text: {
                            fill: colors.gray[100],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: colors.gray[100],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: colors.gray[100],
                        },
                    },
                    },
                    legends: {
                        text: {
                            fill: colors.gray[100],
                        },
                    },
                }}
                features={geoFeatures.features}
                margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                colors="nivo"
                domain={[ 0, 1000000 ]}
                unknownColor="#666666"
                label="properties.name"
                valueFormat=".2s"
                projectionScale={ isDashboard ? 40 : 150 }
                projectionTranslation={ isDashboard ? [0.49, 0.6] : [0.5, 0.5] }
                projectionRotation={[ 0, 0, 0 ]}
                enableGraticule={true}
                graticuleLineColor="#dddddd"
                borderWidth={1.5}
                borderColor="#152538"
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: '#38bcb2',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: '#eed312',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    },
                    {
                        id: 'gradient',
                        type: 'linearGradient',
                        colors: [
                            {
                                offset: 0,
                                color: '#000'
                            },
                            {
                                offset: 100,
                                color: 'inherit'
                            }
                        ]
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'CAN'
                        },
                        id: 'dots'
                    },
                    {
                        match: {
                            id: 'CHN'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'ATA'
                        },
                        id: 'gradient'
                    }
                ]}
                legends={
                    !isDashboard
                    ? [
                        {
                            anchor: "bottom-left",
                            direction: "column",
                            justify: true,
                            translateX: 20,
                            translateY: -100,
                            itemsSpacing: 0,
                            itemWidth: 94,
                            itemHeight: 18,
                            itemDirection: "left-to-right",
                            itemTextColor: colors.gray[100],
                            itemOpacity: 0.85,
                            symbolSize: 18,
                            effects: [
                            {
                                on: "hover",
                                style: {
                                itemTextColor: "#ffffff",
                                itemOpacity: 1,
                                },
                            },
                            ],
                        },
                        ]
                    : undefined
                }
            />
            </Box>
        </Box>
    )
}

export default GeographyChart