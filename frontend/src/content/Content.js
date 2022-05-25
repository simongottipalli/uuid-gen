import * as React from 'react';
import {Container} from "@mui/material";
import Instructions from "./Instructions"
import UuidChoices from "./UuidOptions";
import Uuid from "./Uuid";
import ContentButtons from "./ContentButtons";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.basePath = "https://uuid-gen-g6d5qy6jra-ew.a.run.app"
        this.genUUIDPath = "/uuid"
        this.state = {
            error: null,
            items: {
                isLoaded: false,
            }
        };
        this.onCaseChange = this.onCaseChange.bind(this)
    }

    componentDidMount() {
        fetch(this.basePath + this.genUUIDPath)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: {
                            isLoaded: true,
                            uuid: result.uuid,
                            version: "V4",
                            isUppercase: false,
                            isHyphenated: true,
                            isNumeric: false,
                        },
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        error
                    });
                }
            )
    }

    onCaseChange() {
        const stateToSet = !this.state.items.isUppercase
        let uuidToSet
        if (stateToSet) {
            uuidToSet = this.state.items.uuid.toUpperCase()
        }
        else {
            uuidToSet = this.state.items.uuid.toLowerCase()
        }
        this.setState({
            items:  {
                isUppercase: stateToSet,
                uuid: uuidToSet,
                isLoaded: true,
        }})
    }

    render() {

        return (
            <Container maxWidth="xl">
                <Instructions />
                <Uuid item={this.state.items}/>
                <ContentButtons />
                <UuidChoices onChange={this.onCaseChange} />
            </Container>
        );
    }
}
export default Content;