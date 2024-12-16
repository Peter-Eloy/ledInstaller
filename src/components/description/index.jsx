import { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import dayjs from 'dayjs'

// ==============================|| DESCRIPTION ||============================== //

const Description = () => {
    const [title, setTitle] = useState('')
    const [drawer, setDrawer] = useState('')
    const [department, setDepartment] = useState('')
    const [screenSize, setScreenSize] = useState('')
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))

    return (
        <Box
            sx={{
                p: 1,
                border: '1px solid #ccc',
                borderRadius: '8px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
            }}
        >
            <Typography variant='h6' sx={{ fontSize: '1rem', mb: 1 }}>
                Description
            </Typography>

            <TextField size='small' label='Title' fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField size='small' label='Drawer' fullWidth value={drawer} onChange={(e) => setDrawer(e.target.value)} />
            <TextField size='small' label='Department' fullWidth value={department} onChange={(e) => setDepartment(e.target.value)} />
            <TextField size='small' label='Screen Size' fullWidth value={screenSize} onChange={(e) => setScreenSize(e.target.value)} />
            <TextField size='small' label='Date' type='date' fullWidth value={date} onChange={(e) => setDate(e.target.value)} />
        </Box>
    )
}

export default Description
