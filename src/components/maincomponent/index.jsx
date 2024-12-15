import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import screenMFRData from '../../data/screenMFR.json'
import NicheDimensions from './dimensions/niche'
import ScreenDimensions from './dimensions/screen'
import Notes from './notes'
import InfoBox from './infobox'

const MainComponent = ({ currentConfig }) => {
    // It's now safe to access currentConfig properties
    const selectedScreenObj = screenMFRData.find((s) => s['Screen MFR'] === currentConfig.selectedScreen)

    let screenHeight = ''
    let screenWidth = ''
    if (selectedScreenObj) {
        screenHeight = selectedScreenObj.Height
        screenWidth = selectedScreenObj.Width
    }

    return (
        <Box
            sx={{
                position: 'fixed',
                top: '72px',
                left: 5,
                right: '18vw',
                bottom: 5,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={7}>
                    TEST
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} mt={1}>
                            <NicheDimensions
                            // If NicheDimensions needs props, pass them here
                            />
                        </Grid>
                        <Grid item xs={6} mt={1}>
                            <ScreenDimensions
                                height={screenHeight}
                                width={screenWidth}
                                orientation={currentConfig.orientation}
                                floorDistance={currentConfig.floorDistance}
                            />
                        </Grid>
                    </Grid>

                    <Box mt={15} />
                    <Notes />
                    <InfoBox />
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainComponent
