import {Button} from "@mui/material";
import {RefreshOutlined} from "@mui/icons-material";
import React from "react";
import Box from "@mui/material/Box";

class GenerateButton extends React.Component    {
    constructor(props)  {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange()  {
        this.props.onClick()
    }

    render()    {
        return (
            <Box component="span" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Button variant="outlined" startIcon={<RefreshOutlined />} onClick={this.handleChange}>
                    {this.props.buttonText}
                </Button>
            </Box>
        );
    }
}

export default GenerateButton