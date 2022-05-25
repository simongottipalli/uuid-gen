import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

class UuidChoices extends React.Component   {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange()  {
        this.props.onChange();
    }

    render()    {
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
                    <FormControlLabel control={<Checkbox />} label="Uppercase" onChange={this.handleChange} />
                    <FormControlLabel control={<Checkbox />} label="Remove hyphens" />
                    <FormControlLabel control={<Checkbox />} label="Numbers only" />
                </FormGroup>
            </Box>
        );
    }
}
export default UuidChoices