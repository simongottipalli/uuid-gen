import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

export default function Instructions(props) {
    if (props.generated) {
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
    else    {
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
                    Fill in the name and identifier
                </Typography>
            </Box>
        )
    }
}
