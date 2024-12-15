import { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import dayjs from 'dayjs'

const Description = () => {
    const [title, setTitle] = useState('')
    const [drawer, setDrawer] = useState('')
    const [department, setDepartment] = useState('')
    const [screenSize, setScreenSize] = useState('')
    const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'))

    const handleSubmit = () => {
        const descriptionData = { title, drawer, department, screenSize, date }
        console.log('Description Data:', descriptionData)
    }

    return (
        <Box
            sx={{
                p: 1,
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                width: '100%',
                marginBottom: 1,
            }}
        >
            <Typography variant='h6'>Description</Typography>

            <TextField size='small' label='Title' fullWidth margin='dense' value={title} onChange={(e) => setTitle(e.target.value)} />
            <TextField size='small' label='Drawer' fullWidth margin='dense' value={drawer} onChange={(e) => setDrawer(e.target.value)} />
            <TextField size='small' label='Department' fullWidth margin='dense' value={department} onChange={(e) => setDepartment(e.target.value)} />
            <TextField size='small' label='Screen Size' fullWidth margin='dense' value={screenSize} onChange={(e) => setScreenSize(e.target.value)} />
            <TextField size='small' label='Date' type='date' fullWidth margin='dense' value={date} onChange={(e) => setDate(e.target.value)} />
        </Box>
    )
}

export default Description
