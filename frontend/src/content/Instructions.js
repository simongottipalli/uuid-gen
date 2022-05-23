import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

export default function Instructions() {
    return (
        <Box component="span" sx={{
            display: 'flex',
            justifyContent: 'center',
            height: 100,
            alignItems: 'center',
            p: 3,
            m: 2,
        }}>
            <Typography variant="h6">
                Click the UUID to copy..
            </Typography>
        </Box>
    );
}
