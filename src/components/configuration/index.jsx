import { Box, FormControl, InputLabel, Select, MenuItem, TextField, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material'
import screenMFRData from '../../data/screenMFR.json'
import mountsData from '../../data/mounts.json'
import mediaplayerMFRData from '../../data/mediaplayerMFR.json'
import receptableBoxData from '../../data/receptableBox.json'

// ==============================|| CONFIGURATION COMPONENT ||============================== //

const Configuration = ({ currentConfig, onConfigChange }) => {
    const handleChange = (key, value) => {
        onConfigChange({ ...currentConfig, [key]: value })
    }

    const screenManufacturers = screenMFRData.map((screen) => screen['Screen MFR'])
    const mediaPlayers = mediaplayerMFRData.map((player) => player['MFG. PART'])
    const mounts = mountsData.map((mount) => mount['MFG. PART'])
    const receptacleBoxes = receptableBoxData.map((box) => box['MFG. PART'])

    return (
        <Box
            sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                width: '100%',
                display: 'grid',
                gap: 1,
                p: 1,
                height: 'fit-content',
                overflow: 'visible',
            }}
        >
            <Typography variant='h6' sx={{ fontSize: '1rem' }}>
                Configuration Form
            </Typography>

            <FormControl fullWidth size='small'>
                <InputLabel>Screen Manufacturer</InputLabel>
                <Select value={currentConfig.selectedScreen} onChange={(e) => handleChange('selectedScreen', e.target.value)}>
                    {screenManufacturers.map((manufacturer, index) => (
                        <MenuItem key={index} value={manufacturer}>
                            {manufacturer}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth size='small'>
                <InputLabel>Media Player</InputLabel>
                <Select value={currentConfig.selectedMediaPlayer} onChange={(e) => handleChange('selectedMediaPlayer', e.target.value)}>
                    {mediaPlayers.map((part, index) => (
                        <MenuItem key={index} value={part}>
                            {part}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth size='small'>
                <InputLabel>Mount</InputLabel>
                <Select value={currentConfig.selectedMount} onChange={(e) => handleChange('selectedMount', e.target.value)}>
                    {mounts.map((part, index) => (
                        <MenuItem key={index} value={part}>
                            {part}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl fullWidth size='small'>
                <InputLabel>Receptacle Box</InputLabel>
                <Select value={currentConfig.selectedBox} onChange={(e) => handleChange('selectedBox', e.target.value)}>
                    {receptacleBoxes.map((part, index) => (
                        <MenuItem key={index} value={part}>
                            {part}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant='body1'>Orientation</Typography>
            <ToggleButtonGroup
                value={currentConfig.orientation}
                exclusive
                onChange={(e, newValue) => handleChange('orientation', newValue)}
                size='small'
                fullWidth
            >
                <ToggleButton value='vertical'>Vertical</ToggleButton>
                <ToggleButton value='horizontal'>Horizontal</ToggleButton>
            </ToggleButtonGroup>

            <Typography variant='body1'>Installation Type</Typography>
            <ToggleButtonGroup
                value={currentConfig.installation}
                exclusive
                onChange={(e, newValue) => handleChange('installation', newValue)}
                size='small'
                fullWidth
            >
                <ToggleButton value='niche'>Niche</ToggleButton>
                <ToggleButton value='flat-wall'>Flat Wall</ToggleButton>
            </ToggleButtonGroup>

            <TextField
                label='Floor Distance'
                fullWidth
                size='small'
                value={currentConfig.floorDistance}
                onChange={(e) => handleChange('floorDistance', e.target.value)}
            />
            <TextField
                label='Niche Depth Var'
                fullWidth
                size='small'
                value={currentConfig.nicheDepthVar}
                onChange={(e) => handleChange('nicheDepthVar', e.target.value)}
            />
        </Box>
    )
}

export default Configuration
