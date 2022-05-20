import * as React from 'react';
import {Container} from "@mui/material";
import VerticalTabs from "./UuidChoices";
import UuidChoices from "./UuidOptions";

export default function Content() {
    return(
        <Container>
            <VerticalTabs />
            <UuidChoices />
        </Container>
    );
}