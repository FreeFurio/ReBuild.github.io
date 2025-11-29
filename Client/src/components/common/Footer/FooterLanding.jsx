import React from 'react'
import { Box, Container, Typography, Grid, Link } from '@mui/material'


export function FooterLanding() {

    return (
        <Box sx={{ backgroundColor: '#16213e', textAlign:'center', py: 2, color:'white'}}>
            <Container maxWidth="lg">
                <Typography>
                    © 2024 Reeon Lance Tobia - Full Stack Developer
                </Typography>
            </Container>
        </Box>
    )
}
