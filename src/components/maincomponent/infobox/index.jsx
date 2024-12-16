import React from 'react'
import { Paper, Typography, Box } from '@mui/material'
import { DataGrid, gridClasses } from '@mui/x-data-grid'

const InfoBox = () => {
    const columns = [
        {
            field: 'col1',
            headerName: '',
            width: 150,
            renderCell: (params) => {
                const isHeader = params.row.isHeader
                return (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            bgcolor: isHeader ? '#FFF3E0' : 'white',
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='subtitle2'>{params.value}</Typography>
                    </Box>
                )
            },
        },
        {
            field: 'col2',
            headerName: '',
            width: 150,
            renderCell: (params) => {
                const isHeader = params.row.isHeader
                return (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            bgcolor: isHeader ? '#FFF3E0' : 'white',
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='subtitle2'>{params.value}</Typography>
                    </Box>
                )
            },
        },
        {
            field: 'col3',
            headerName: '',
            width: 150,
            renderCell: (params) => {
                const isHeader = params.row.isHeader
                return (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            bgcolor: isHeader ? '#FFF3E0' : 'white',
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='subtitle2'>{params.value}</Typography>
                    </Box>
                )
            },
        },
        {
            field: 'col4',
            headerName: '',
            width: 150,
            renderCell: (params) => {
                const isHeader = params.row.isHeader
                return (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            bgcolor: isHeader ? '#FFF3E0' : 'white',
                            p: 1,
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='subtitle2'>{params.value}</Typography>
                    </Box>
                )
            },
        },
    ]

    // Create rows with the merged cells structure
    const rows = [
        // Row 1 - Headers
        {
            id: 1,
            isHeader: true,
            col1: 'Drawn',
            col2: 'Dimensions\nin Inches',
            col3: 'Some\nlogo',
            col4: 'Screen Size',
        },
        // Row 2 - Values and merged cells continue
        {
            id: 2,
            isHeader: false,
            col1: 'someone',
            col2: '', // Part of merged cell
            col3: '', // Part of merged cell
            col4: 'LG55"',
        },
        // Row 3 - Headers
        {
            id: 3,
            isHeader: true,
            col1: 'Date',
            col2: 'Sheet',
            col3: 'Revision',
            col4: 'Department',
        },
        // Row 4 - Values
        {
            id: 4,
            isHeader: false,
            col1: '09/12/2023',
            col2: '1 of 1',
            col3: '00',
            col4: 'Installations',
        },
    ]

    return (
        <Paper sx={{ p: 2, width: '100%' }}>
            {/* Header Section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 3,
                    px: 2,
                }}
            >
                <Box>
                    <Typography variant='h6'>Peter - Eloy</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography>@petereloy</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        follow me on x.com
                    </Typography>
                </Box>
                <Box>
                    <Typography>Description</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Some screen data HERE
                    </Typography>
                </Box>
            </Box>

            {/* DataGrid */}
            <DataGrid
                rows={rows}
                columns={columns}
                hideFooter={true}
                disableColumnMenu
                disableColumnFilter
                disableColumnSelector
                disableRowSelectionOnClick
                rowHeight={65}
                sx={{
                    '& .MuiDataGrid-cell': {
                        border: '1px solid #e0e0e0',
                        p: 0,
                    },
                    '& .MuiDataGrid-columnHeaders': {
                        display: 'none',
                    },
                    '& .MuiDataGrid-virtualScroller': {
                        marginTop: '0!important',
                    },
                    border: '1px solid #e0e0e0',
                    [`& .${gridClasses.row}.merged-cell`]: {
                        bgcolor: 'transparent',
                    },
                }}
                getRowClassName={(params) => (params.row.isMerged ? 'merged-cell' : '')}
                autoHeight
            />
        </Paper>
    )
}

export default InfoBox
