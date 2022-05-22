import * as React from 'react';
import {Container} from "@mui/material";
import UuidChoices from "./UuidOptions";
import UuidContent from "./UuidContent";

export default function Content() {
    return(
        <Container maxWidth="xl">
            <UuidContent />
            <UuidChoices />
        </Container>
    );
}