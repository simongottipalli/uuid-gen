import {Checkbox, FormControlLabel, FormGroup, Grid} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

export default function UuidChoices() {
    return (
        <Box component="div"
            sx={{ display: 'flex', color: 'white', justifyContent: 'space-around' }}>
            <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Uppercase" />
                <FormControlLabel control={<Checkbox />} label="Remove hyphens" />
                <FormControlLabel control={<Checkbox />} label="Numbers only" />
            </FormGroup>
        </Box>
    );
}