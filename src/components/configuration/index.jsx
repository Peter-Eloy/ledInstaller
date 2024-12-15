import { Box, FormControl, InputLabel, Select, MenuItem, TextField, ToggleButtonGroup, ToggleButton, Typography } from '@mui/material'
import screenMFRData from '../../data/screenMFR.json'
import mountsData from '../../data/mounts.json'
import mediaplayerMFRData from '../../data/mediaplayerMFR.json'
import receptableBoxData from '../../data/receptableBox.json'

const Configuration = ({ currentConfig, onConfigChange }) => {
    const handleChange = (key, value) => {
        onConfigChange({ ...currentConfig, [key]: value })
    }

    const screenManufacturers = screenMFRData.map((screen) => screen['Screen MFR'])
    const mediaPlayers = mediaplayerMFRData.map((player) => player['MFG. PART'])
    const mounts = mountsData.map((mount) => mount['MFG. PART'])
    const receptacleBoxes = receptableBoxData.map((box) => box['MFG. PART'])

    return (
        <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '8px', mb: 2, width: '100%' }}>
            <Typography variant='h6' sx={{ mb: 2 }}>
                Configuration Form
            </Typography>

            <FormControl fullWidth sx={{ mb: 2 }} size='small'>
                <InputLabel>Screen Manufacturer</InputLabel>
                <Select value={currentConfig.selectedScreen} onChange={(e) => handleChange('selectedScreen', e.target.value)}>
                    {screenManufacturers.map((manufacturer, index) => (
                        <MenuItem key={index} value={manufacturer}>
                            {manufacturer}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Media Player */}
            <FormControl fullWidth sx={{ mb: 2 }} size='small'>
                <InputLabel>Media Player</InputLabel>
                <Select value={currentConfig.selectedMediaPlayer} onChange={(e) => handleChange('selectedMediaPlayer', e.target.value)}>
                    {mediaPlayers.map((part, index) => (
                        <MenuItem key={index} value={part}>
                            {part}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Mount */}
            <FormControl fullWidth sx={{ mb: 2 }} size='small'>
                <InputLabel>Mount</InputLabel>
                <Select value={currentConfig.selectedMount} onChange={(e) => handleChange('selectedMount', e.target.value)}>
                    {mounts.map((part, index) => (
                        <MenuItem key={index} value={part}>
                            {part}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {/* Receptacle Box */}
            <FormControl fullWidth sx={{ mb: 2 }} size='small'>
                <InputLabel>Receptacle Box</InputLabel>
                <Select value={currentConfig.selectedBox} onChange={(e) => handleChange('selectedBox', e.target.value)}>
                    {receptacleBoxes.map((part, index) => (
                        <MenuItem key={index} value={part}>
                            {part}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant='body1' sx={{ mb: 1 }}>
                Orientation
            </Typography>
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

            <Typography variant='body1' sx={{ mt: 2, mb: 1 }}>
                Installation Type
            </Typography>
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
                sx={{ mt: 2, mb: 2 }}
                value={currentConfig.floorDistance}
                onChange={(e) => handleChange('floorDistance', e.target.value)}
            />
            <TextField
                label='Niche Depth'
                fullWidth
                size='small'
                value={currentConfig.nicheDepth}
                onChange={(e) => handleChange('nicheDepth', e.target.value)}
            />
        </Box>
    )
}

export default Configuration
