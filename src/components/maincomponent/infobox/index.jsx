import { Paper, Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

const InfoBox = () => (
    <Paper sx={{ p: 2, mt: 2, mr: 3 }}>
        <Grid container spacing={10} sx={{ width: '100%' }}>
            <Grid item>
                <Typography>Peter - Eloy</Typography>
            </Grid>
            <Grid item>
                <Typography>@petereloy</Typography>
                <Typography>follow me on x.com</Typography>
            </Grid>
            <Grid item>
                <Typography>Description</Typography>
                <Typography>Some screen data HERE</Typography>
            </Grid>
        </Grid>

        <Grid container sx={{ width: '100%', mt: 2 }}>
            <Grid size={3}>
                <Box sx={{ p: 1, bgcolor: '#FFF3E0', border: '1px solid #FFE0B2' }}>
                    <Typography variant='subtitle2'>Drawn</Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px solid grey' }}>
                    <Typography variant='subtitle2'>someone</Typography>
                </Box>
            </Grid>

            <Grid size={3}>
                <Box sx={{ p: 3.1, bgcolor: '#FFF3E0', border: '1px solid #FFE0B2' }}>
                    <Typography variant='subtitle2'>Dimensions</Typography>
                    <Typography variant='subtitle2'>in Inches</Typography>
                </Box>
            </Grid>

            <Grid size={3}>
                <Box sx={{ p: 3.1, border: '1px solid grey' }}>
                    <Typography variant='subtitle2'>Some</Typography>
                    <Typography variant='subtitle2'>logo</Typography>
                </Box>
            </Grid>

            <Grid size={3}>
                <Box sx={{ p: 1, bgcolor: '#FFF3E0', border: '1px solid #FFE0B2' }}>
                    <Typography variant='subtitle2'>Screen Size</Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px solid grey' }}>
                    <Typography variant='subtitle2'>LG55"</Typography>
                </Box>
            </Grid>

            <Grid size={3}>
                <Box sx={{ p: 1, bgcolor: '#FFF3E0', border: '1px solid #FFE0B2' }}>
                    <Typography variant='subtitle2'>Date</Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px solid grey' }}>
                    <Typography variant='subtitle2'>09/12/2023</Typography>
                </Box>
            </Grid>

            <Grid size={3}>
                <Box sx={{ p: 1, bgcolor: '#FFF3E0', border: '1px solid #FFE0B2' }}>
                    <Typography variant='subtitle2'>Sheet</Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px solid grey' }}>
                    <Typography variant='subtitle2'>1 of 1</Typography>
                </Box>
            </Grid>

            <Grid size={3}>
                <Box sx={{ p: 1, bgcolor: '#FFF3E0', border: '1px solid #FFE0B2' }}>
                    <Typography variant='subtitle2'>Revision</Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px solid grey' }}>
                    <Typography variant='subtitle2'>00</Typography>
                </Box>
            </Grid>

            <Grid size={3}>
                <Box sx={{ p: 1, bgcolor: '#FFF3E0', border: '1px solid #FFE0B2' }}>
                    <Typography variant='subtitle2'>Department</Typography>
                </Box>
                <Box sx={{ p: 2, border: '1px solid grey' }}>
                    <Typography variant='subtitle2'>Installations</Typography>
                </Box>
            </Grid>
        </Grid>
    </Paper>
)

export default InfoBox
