import { useState, useEffect } from 'react'
// MUI Components
import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography, Button } from '@mui/material'

// Internal Modules
import Configuration from '../components/configuration'
import Description from '../components/description'
import MainComponent from '../components/maincomponent'

const Layout = () => {
    const drawerWidth = `calc(17vw)`

    // Define the state for currentConfig here
    const [currentConfig, setCurrentConfig] = useState({
        selectedScreen: '',
        selectedMediaPlayer: '',
        selectedMount: '',
        selectedBox: '',
        orientation: 'vertical',
        installation: 'niche',
        floorDistance: '',
        nicheDepth: '',
    })

    const handleConfigChange = (newConfig) => {
        setCurrentConfig(newConfig)
    }

    useEffect(() => {
        // This will run whenever currentConfig changes
        console.log('currentConfig state in Layout:', currentConfig)
    }, [currentConfig])

    const drawer = (
        <Box display='flex' flexDirection='column' height='100%' p={1}>
            {/* Pass currentConfig and onConfigChange to Configuration */}
            <Configuration currentConfig={currentConfig} onConfigChange={handleConfigChange} />
            <Description />
            <Button variant='contained' color='primary' fullWidth onClick={() => console.log('Download PDF clicked!')}>
                Download PDF
            </Button>
        </Box>
    )

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position='fixed' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant='h6' noWrap component='div'>
                        LED Screen Installer by P-E
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* Pass currentConfig to MainComponent */}
            <MainComponent currentConfig={currentConfig} />

            <Drawer
                variant='permanent'
                anchor='right'
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: drawerWidth,
                        borderLeft: 'none',
                        marginTop: 8,
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    )
}

export default Layout
