import * as React from 'react';
import Uuid from "./Uuid";
import {Checkbox, FormControlLabel, FormGroup, Grid} from "@mui/material";

export default function Content() {
    return(
        <React.StrictMode>
            <Uuid />
            <RenderOptions />
        </React.StrictMode>
    );
}

function RenderOptions() {
    return (
        <Grid container sx={{
            maxWidth: '80%',
            alignItems: 'right',
            color: 'white',
        }}>
            <Grid item xs={12} bgcolor={"green"}>
                <FormGroup row>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="UUID4" />
                    <FormControlLabel control={<Checkbox />} label="Uppercase" />
                    <FormControlLabel control={<Checkbox />} label="Remove hyphens" />
                </FormGroup>
            </Grid>
        </Grid>
    );
}