import { Paper, Typography, Box } from '@mui/material'

// ==============================|| NICHE COMPONENT ||============================== //

const parseDimension = (dim) => {
    if (typeof dim === 'number') return dim
    if (typeof dim === 'string') {
        let cleaned = dim.replace(',', '.')
        let val = parseFloat(cleaned)
        return isNaN(val) ? 0 : val
    }
    return 0
}

const DimensionRow = ({ label, value }) => (
    <Box sx={{ display: 'flex', mb: 1 }}>
        <Box sx={{ bgcolor: '#A9A9A9', px: 2, py: 1, width: '40%' }}>
            <Typography>{label}</Typography>
        </Box>
        <Box sx={{ border: '1px solid #A9A9A9', px: 2, py: 1, width: '60%' }}>
            <Typography>{value}</Typography>
        </Box>
    </Box>
)

const NicheDimensions = ({ currentConfig, selectedScreenObj, orientation }) => {
    const { installation, nicheDepthVar } = currentConfig

    if (installation !== 'niche') {
        return null
    }

    if (!selectedScreenObj) {
        return (
            <Paper sx={{ p: 2, width: 300 }}>
                <Typography variant='subtitle1' fontWeight='bold' mb={2}>
                    Niche Dimensions:
                </Typography>
                <Typography>Please select a screen.</Typography>
            </Paper>
        )
    }

    let screenHeight = parseDimension(selectedScreenObj.Height)
    let screenWidth = parseDimension(selectedScreenObj.Width)
    let screenDepth = parseDimension(selectedScreenObj.Depth)
    const screenSize = selectedScreenObj['Screen Size'] || 0

    if (orientation === 'horizontal') {
        ;[screenHeight, screenWidth] = [screenWidth, screenHeight]
    }

    const margin = screenSize < 55 ? 1.5 : 2

    const depthAdjustment = parseFloat(nicheDepthVar) || 0

    const nicheHeight = screenHeight + margin * 2 - depthAdjustment
    const nicheWidth = screenWidth + margin * 2 - depthAdjustment
    const nicheDepthDimension = screenDepth + margin * 2 - depthAdjustment

    return (
        <Paper sx={{ p: 2, width: '100%' }}>
            <Typography variant='subtitle1' fontWeight='bold' mb={2}>
                Niche Dimensions:
            </Typography>
            <DimensionRow label='Height' value={`${nicheHeight.toFixed(2)}"`} />
            <DimensionRow label='Width' value={`${nicheWidth.toFixed(2)}"`} />
            <DimensionRow label='Depth' value={`${nicheDepthDimension.toFixed(2)}"`} />
        </Paper>
    )
}

export default NicheDimensions
