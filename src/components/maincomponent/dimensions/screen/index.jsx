import { Paper, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Grid2'

const DimensionRow = ({ label, value }) => (
    <Box sx={{ display: 'flex', mb: 1 }}>
        <Box sx={{ bgcolor: '#A9A9A9', px: 2, py: 1, width: '40%' }}>
            <Typography>{label}</Typography>
        </Box>
        <Box sx={{ border: '1px solid #A9A9A9', px: 2, py: 1, width: '60%' }}>
            <Typography>{value}</Typography>
        </Box>
    </Box>
)

const ScreenDimensions = () => {
    return (
        <Paper sx={{ p: 2, width: 300 }}>
            <Typography variant='subtitle1' fontWeight='bold' mb={2}>
                Screen Dimensions:
            </Typography>

            {/* Add more dynamic rows based on the config */}
        </Paper>
    )
}

export default ScreenDimensions
