import { Box, TextField, Typography } from '@mui/material'
import dayjs from 'dayjs'

// ==============================|| DESCRIPTION COMPONENT ||============================== //

const Description = ({ data = {}, setData }) => {
    const { title = '', drawer = '', department = '', screenSize = '', date = dayjs().format('YYYY-MM-DD') } = data

    // Handle changes for each field
    const handleChange = (field) => (event) => {
        if (setData) {
            const value = event.target.value
            setData({ ...data, [field]: value })
        }
    }

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

            <TextField size='small' label='Title' fullWidth value={title} onChange={handleChange('title')} />
            <TextField size='small' label='Drawer' fullWidth value={drawer} onChange={handleChange('drawer')} />
            <TextField size='small' label='Department' fullWidth value={department} onChange={handleChange('department')} />
            <TextField size='small' label='Screen Size' fullWidth value={screenSize} onChange={handleChange('screenSize')} />
            <TextField
                size='small'
                label='Date'
                type='date'
                fullWidth
                value={dayjs(date).format('YYYY-MM-DD')} // Ensure date is in the correct format
                onChange={handleChange('date')}
            />
        </Box>
    )
}

export default Description
