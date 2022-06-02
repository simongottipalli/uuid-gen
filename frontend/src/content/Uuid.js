import React from 'react'
import {LinearProgress, Typography, Box, Button} from "@mui/material";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import {Alert} from "@mui/material";

export default function Uuid(props)  {
    const {isLoaded, uuid, error} = props;
    if (error) {
      return (
        <Box component="span" sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
        }}>
            <Alert severity="error" variant={"outlined"}>{error}</Alert>
        </Box>
      )
    } else if (!isLoaded) {
        return (
            <Box sx={{height: 100, alignItems: 'center'}}>
                <LinearProgress />
            </Box>
        )
    } else {
        return (
            <Box component="span" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
            }}>
                {/*TODO: Show a message "Copied"*/}
                <CopyToClipboard text={uuid}>
                    <Button sx={{textTransform: 'none'}}>
                        <Typography variant="h3" fontWeight="bold">
                            {uuid}
                        </Typography>
                    </Button>

                </CopyToClipboard>
            </Box>
        );
    }
}