import { useState, useRef } from 'react'
import { AppBar, Box, CssBaseline, Drawer, Toolbar, Typography, Button } from '@mui/material'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import Configuration from '../components/configuration'
import Description from '../components/description'
import MainComponent from '../components/maincomponent'

// ==============================|| LAYOUT COMPONENT ||============================== //

const Layout = () => {
    const drawerWidth = `calc(17vw)`
    const [isGenerating, setIsGenerating] = useState(false)

    const [currentConfig, setCurrentConfig] = useState({
        selectedScreen: '',
        selectedMediaPlayer: '',
        selectedMount: '',
        selectedBox: '',
        orientation: 'horizontal',
        installation: 'niche',
        floorDistance: '',
        nicheDepthVar: '0',
    })

    const [descriptionData, setDescriptionData] = useState({
        title: '',
        drawer: '',
        department: '',
        screenSize: '',
        date: new Date().toISOString().split('T')[0],
    })

    const handleConfigChange = (newConfig) => {
        setCurrentConfig(newConfig)
    }

    const handleDownloadPDF = async () => {
        if (isGenerating) return
        setIsGenerating(true)

        try {
            const mainElement = document.querySelector('.main-content')
            if (!mainElement) {
                throw new Error('Could not find main component')
            }
            const rect = mainElement.getBoundingClientRect()
            const canvas = await html2canvas(mainElement, {
                scale: 2,
                logging: true,
                backgroundColor: '#ffffff',
                x: window.pageXOffset,
                y: window.pageYOffset,
                scrollX: -window.pageXOffset,
                scrollY: -window.pageYOffset,
                width: rect.width,
                height: rect.height,
                windowWidth: document.documentElement.offsetWidth,
                windowHeight: document.documentElement.offsetHeight,
            })

            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4',
                compress: false,
            })

            const imgData = canvas.toDataURL('image/png', 1.0)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()

            pdf.addImage(imgData, 'PNG', 10, 10, pdfWidth - 20, pdfHeight - 20)
            pdf.save(`LED_Screen_Installation_${descriptionData.title || 'Plan'}.pdf`)
        } catch (error) {
            console.error('Detailed error:', error)
            alert('There was an error generating the PDF. Please try again.')
        } finally {
            setIsGenerating(false)
        }
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
                <Description data={descriptionData} setData={setDescriptionData} />
            </Box>
            <Box>
                <Button variant='contained' color='primary' fullWidth onClick={handleDownloadPDF} disabled={isGenerating}>
                    {isGenerating ? 'Generating PDF...' : 'Download PDF'}
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

            <Box
                className='main-content'
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
                    backgroundColor: '#ffffff',
                }}
            >
                <MainComponent currentConfig={currentConfig} descriptionData={descriptionData} />
            </Box>

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
