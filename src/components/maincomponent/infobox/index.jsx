import { Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material'

// ==============================|| INFOBOX COMPONENT ||============================== //

const InfoBox = () => {
    return (
        <Paper sx={{ p: 2, width: '100%', mt: 2 }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: 3,
                    px: 2,
                }}
            >
                <Box>
                    <Typography variant='h6'>Peter - Eloy</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography>@petereloy</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        follow me on x.com
                    </Typography>
                </Box>
                <Box>
                    <Typography>Description</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Some screen data HERE
                    </Typography>
                </Box>
            </Box>

            <TableContainer>
                <Table
                    sx={{
                        border: '1px solid #e0e0e0',
                        '& .MuiTableCell-root': {
                            border: '1px solid #e0e0e0',
                            p: 1,
                        },
                    }}
                >
                    <TableBody>
                        <TableRow>
                            <TableCell
                                sx={{
                                    bgcolor: '#FFF3E0',
                                    width: '25%',
                                }}
                            >
                                <Typography variant='subtitle2'>Drawn</Typography>
                            </TableCell>
                            <TableCell
                                rowSpan={2}
                                sx={{
                                    bgcolor: '#FFF3E0',
                                    width: '25%',
                                }}
                            >
                                <Typography variant='subtitle2'>Dimensions</Typography>
                                <Typography variant='subtitle2'>in Inches</Typography>
                            </TableCell>
                            <TableCell
                                rowSpan={2}
                                sx={{
                                    width: '25%',
                                }}
                            >
                                <Typography variant='subtitle2'>Some</Typography>
                                <Typography variant='subtitle2'>logo</Typography>
                            </TableCell>
                            <TableCell
                                sx={{
                                    bgcolor: '#FFF3E0',
                                    width: '25%',
                                }}
                            >
                                <Typography variant='subtitle2'>Screen Size</Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle2'>someone</Typography>
                            </TableCell>

                            <TableCell>
                                <Typography variant='subtitle2'>LG55"</Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell sx={{ bgcolor: '#FFF3E0' }}>
                                <Typography variant='subtitle2'>Date</Typography>
                            </TableCell>
                            <TableCell sx={{ bgcolor: '#FFF3E0' }}>
                                <Typography variant='subtitle2'>Sheet</Typography>
                            </TableCell>
                            <TableCell sx={{ bgcolor: '#FFF3E0' }}>
                                <Typography variant='subtitle2'>Revision</Typography>
                            </TableCell>
                            <TableCell sx={{ bgcolor: '#FFF3E0' }}>
                                <Typography variant='subtitle2'>Department</Typography>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Typography variant='subtitle2'>09/12/2023</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='subtitle2'>1 of 1</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='subtitle2'>00</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant='subtitle2'>Installations</Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}

export default InfoBox
