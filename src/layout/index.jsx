import { useState } from 'react'
import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography, Button } from '@mui/material'
import Configuration from '../components/configuration'
import Description from '../components/description'
import MainComponent from '../components/maincomponent'

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
        <Box
            sx={{
                height: 'calc(100vh - 64px)',
                p: 1,
                display: 'grid',
                gridTemplateRows: 'auto auto auto',
                gap: 1,
                overflow: 'hidden',
            }}
        >
            <Box>
                <Configuration currentConfig={currentConfig} onConfigChange={handleConfigChange} />
            </Box>
            <Box>
                <Description />
            </Box>
            <Box>
                <Button variant='contained' color='primary' fullWidth>
                    Download PDF
                </Button>
            </Box>
        </Box>
    )

    return (
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
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
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        borderLeft: 'none',
                        marginTop: '64px',
                        height: `calc(100vh - 64px)`,
                        overflow: 'hidden',
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
