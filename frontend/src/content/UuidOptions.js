import {Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";

class UuidChoices extends React.Component   {
    constructor(props) {
        super(props);
        this.handleCaseChange = this.handleCaseChange.bind(this)
        this.removeHyphens = this.removeHyphens.bind(this)
        this.state = {
            error: null,
            isHyphenated: true,
        }
    }

    handleCaseChange()  {
        this.props.onCaseChange();
    }

    removeHyphens() {
        this.props.removeHyphens();
        this.setState({
            error: null,
            isHyphenated: false,
        })
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
                <FormControl>
                    <FormGroup row sx={{
                        justifyContent: 'space-evenly'
                    }}>
                        <FormControlLabel control={<Checkbox />} label="Uppercase" onChange={this.handleCaseChange} />
                        <FormControlLabel control={<Checkbox />} label="Remove hyphens" onChange={this.removeHyphens} disabled={!this.state.isHyphenated}/>
                        <FormControlLabel control={<Checkbox />} label="Numbers only" />
                    </FormGroup>
                    <FormHelperText>Removing hyphens and making it numeric are irreversible. You can always regenerate a new UUID</FormHelperText>
                </FormControl>
            </Box>
        );
    }
}
export default UuidChoices