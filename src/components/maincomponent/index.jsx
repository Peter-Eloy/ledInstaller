import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import screenMFRData from '../../data/screenMFR.json'

import NicheDimensions from './dimensions/niche'
import ScreenDimensions from './dimensions/screen'
import Notes from './notes'
import InfoBox from './infobox'
import Map from './map'

// ==============================|| MAIN COMPONENT ||============================== //

const MainComponent = ({ currentConfig, descriptionData }) => {
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
                left: 15,
                right: '17vw',
                paddingRight: 1,
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
                    <Map currentConfig={currentConfig} selectedScreenObj={selectedScreenObj} />
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} mt={1}>
                            <NicheDimensions currentConfig={currentConfig} selectedScreenObj={selectedScreenObj} orientation={currentConfig.orientation} />
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
                    <InfoBox descriptionData={descriptionData} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainComponent
