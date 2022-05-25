import React from 'react'
import {LinearProgress, Typography, Box, Button} from "@mui/material";
import {CopyToClipboard} from "react-copy-to-clipboard/src";

export default function Uuid(props)  {
    const {isLoaded, uuid, error} = props.item;
    if (error) {
      return <div>Error: {error.message}</div>;
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