import React from 'react'
import {
    Box,
    Stack,
    TextField,
} from "@mui/material";
import ContentButtons from "./ContentButtons";

class Fields extends React.Component  {
    constructor(props)  {
        super(props);
        this.state = {
            name: "",
            id: "",
        }

        this.setName = this.setName.bind(this)
        this.setId = this.setId.bind(this)

    }

    setName(e)   {
        this.setState(() => {
            return {
                name: e.target.value
            }
        })
    }

    setId(e)    {
        this.setState(() => {
            return {
                id: e.target.value
            }
        })
    }

    render()    {
        return (
            <Box component="span" sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 100,
            }}>
                <Stack spacing={2} sx={{
                    width: "100%",
                }}>

                    <TextField fullWidth required label="Name" id="name" variant="outlined" onChange={this.setName} />
                    <TextField fullWidth required label="Identifier" id="identifier" variant="outlined" onChange={this.setId} />
                    <ContentButtons generate={this.props.onClick} name={this.state.name} uuid={this.state.id} />
                </Stack>
            </Box>
        );
    }
}

export default Fields