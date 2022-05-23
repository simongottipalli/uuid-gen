import * as React from 'react';
import {Container} from "@mui/material";
import Instructions from "./Instructions"
import UuidChoices from "./UuidOptions";
import Uuid from "./Uuid";
import ContentButtons from "./ContentButtons";

export default function Content() {
    return(
        <Container maxWidth="xl">
            <Instructions />
            <Uuid />
            <ContentButtons />
            <UuidChoices />
        </Container>
    );
}