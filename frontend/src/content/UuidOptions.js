import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

class UuidChoices extends React.Component   {
    constructor(props) {
        super(props);
        this.handleCaseChange = this.handleCaseChange.bind(this)
        this.removeHyphens = this.removeHyphens.bind(this)
    }

    handleCaseChange()  {
        this.props.onCaseChange();
    }

    removeHyphens() {
       this.props.removeHyphens();
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
                    <FormControlLabel control={<Checkbox />} label="Uppercase" onChange={this.handleCaseChange} />
                    <FormControlLabel control={<Checkbox />} label="Remove hyphens" onChange={this.removeHyphens} />
                    <FormControlLabel control={<Checkbox />} label="Numbers only" />
                </FormGroup>
            </Box>
        );
    }
}
export default UuidChoices