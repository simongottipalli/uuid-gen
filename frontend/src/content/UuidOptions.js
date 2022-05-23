import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

export default function UuidChoices() {
    return (
        <Box component="span" sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            height: 100,
            alignItems: 'center',
            p: 3,
            m: 2,
        }}>
            <FormGroup row sx={{
                justifyContent: 'space-evenly'
            }}>
                <FormControlLabel control={<Checkbox />} label="Uppercase" />
                <FormControlLabel control={<Checkbox />} label="Remove hyphens" />
                <FormControlLabel control={<Checkbox />} label="Numbers only" />
            </FormGroup>
        </Box>
    );
}