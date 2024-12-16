import { Paper, Typography, Box } from '@mui/material'
import Grid from '@mui/material/Grid2'

// ==============================|| NOTES COMPONENT ||============================== //

const DimensionRow = ({ label, value }) => (
    <Box sx={{ display: 'flex', mb: 1 }}>
        <Box sx={{ bgcolor: '#A9A9A9', px: 4, py: 1, width: '40%' }}>
            <Typography>{label}</Typography>
        </Box>
        <Box sx={{ border: '1px solid #A9A9A9', px: 4, py: 1, width: '60%' }}>
            <Typography>{value}</Typography>
        </Box>
    </Box>
)

const Notes = () => (
    <Paper sx={{ p: 2, width: '100%' }}>
        <Grid container spacing={4}>
            <Grid xs={5}>
                <Typography variant='subtitle1' fontWeight='bold' mb={1}>
                    Notes
                </Typography>
                <Typography variant='body2' mb={2}>
                    Install recessed receptacle box with:
                </Typography>
                <Box sx={{ pl: 1, mb: 2 }}>
                    <Typography variant='body2'>2x Terminated Power Outlets</Typography>
                    <Typography variant='body2'>1x Terminated Data CAT5 Ethernet Outlet</Typography>
                </Box>
            </Grid>
            <Grid xs={7}>
                <DimensionRow label='Height' value='6.6″' />
                <DimensionRow label='Width' value='6.012″' />
                <DimensionRow label='Depth' value='3.75″' />
            </Grid>
        </Grid>
    </Paper>
)

export default Notes
