import {Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import * as React from "react";
import Box from "@mui/material/Box";
import {Alert} from "@mui/material";

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
            <Box component="span">
                <Box component="span" sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    p: 3,
                    m: 2,
                }}>
                    <FormGroup row sx={{
                        justifyContent: 'space-evenly'
                    }}>
                        <FormControlLabel control={<Checkbox />} label="Uppercase" onChange={this.handleCaseChange} />
                        <FormControlLabel control={<Checkbox />} label="Remove hyphens" onChange={this.removeHyphens} disabled={!this.state.isHyphenated}/>
                        <FormControlLabel control={<Checkbox />} label="Numbers only" />
                    </FormGroup>
                </Box>
                <Box component="span" sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                    <Alert severity="info" variant="outlined" sx={{width: '60%', justifyContent: 'center'}}>
                        Removing hyphens or choosing numeric UUIDS are irreversible actions. You can always generate a new UUID.
                    </Alert>
                </Box>
            </Box>
        );
    }
}
export default UuidChoices