import React from 'react';
import '../index.css';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

export default function Banner() {
    return (
        <Box sx={{
            color: 'text.primary',
            zIndex: 'modal',
            textAlign: 'center',
            fontSize: 'h2.fontSize',
        }}>
            UUID Gen
            <Divider variant="inset" light />
        </Box>
    );
}
