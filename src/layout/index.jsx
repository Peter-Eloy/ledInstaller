import { useState } from 'react'

import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography, Button } from '@mui/material'

import Configuration from '../components/configuration'
import Description from '../components/description'
import MainComponent from '../components/maincomponent'

// ==============================|| LAYOUT ||============================== //

const Layout = () => {
    const drawerWidth = `calc(17vw)`

    const [currentConfig, setCurrentConfig] = useState({
        selectedScreen: '',
        selectedMediaPlayer: '',
        selectedMount: '',
        selectedBox: '',
        orientation: 'vertical',
        installation: 'niche',
        floorDistance: '',
        nicheDepthVar: '0',
    })

    const handleConfigChange = (newConfig) => {
        setCurrentConfig(newConfig)
    }

    const drawer = (
        <Box display='flex' flexDirection='column' height='100%' p={1}>
            <Configuration currentConfig={currentConfig} onConfigChange={handleConfigChange} />
            <Description />
            <Button variant='contained' color='primary' fullWidth>
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
