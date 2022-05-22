import React from "react";
import Uuid from "./Uuid";
import {Button, Paper, Stack, styled} from "@mui/material";
import {RefreshOutlined} from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    width: '100%'
}));

export default function UuidContent() {
    return (
        <Stack width='100%'>
            <Item>
                Click on the UUID to copy..
            </Item>
            <Item>
                <Uuid />
            </Item>
            <Item>
                <Button variant="outlined" startIcon={<RefreshOutlined />}>
                    Regenerate
                </Button>
            </Item>
        </Stack>
    );
}

