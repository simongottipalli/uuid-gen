import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import Banner from "./Banner"

export default function BannerRow() {
    return (
        <Box sx={{flexGrow: 1}} container spacing={3}>
            <Grid container>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={8}>
                    <Banner />
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </Box>
    );
}
