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

const ScreenDimensions = ({ height, width, orientation, floorDistance }) => {
    let finalHeight = height
    let finalWidth = width

    // If orientation is horizontal, swap
    if (orientation === 'horizontal') {
        ;[finalHeight, finalWidth] = [finalWidth, finalHeight]
    }

    const floorLine = floorDistance || '0'

    const dimensions = [
        { label: 'Height', value: `${finalHeight}"` },
        { label: 'Width', value: `${finalWidth}"` },
        { label: 'Floor Line', value: `${floorLine}"` },
    ]

    return (
        <Paper sx={{ p: 2, width: 300 }}>
            <Typography variant='subtitle1' fontWeight='bold' mb={2}>
                Screen Dimensions
            </Typography>
            {dimensions.map((dimension, index) => (
                <Box key={index} sx={{ display: 'flex', mb: 1 }}>
                    <Box sx={{ bgcolor: '#A9A9A9', px: 2, py: 1, width: '40%' }}>
                        <Typography>{dimension.label}</Typography>
                    </Box>
                    <Box sx={{ border: '1px solid #A9A9A9', px: 2, py: 1, width: '60%' }}>
                        <Typography>{dimension.value}</Typography>
                    </Box>
                </Box>
            ))}
        </Paper>
    )
}

export default ScreenDimensions
