import {Button} from "@mui/material";
import {RefreshOutlined} from "@mui/icons-material";
import React from "react";
import Box from "@mui/material/Box";

export default function ContentButtons()    {
    return (
        <Box component="span" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Button variant="outlined" startIcon={<RefreshOutlined />}>
                Regenerate
            </Button>
        </Box>
    );
}