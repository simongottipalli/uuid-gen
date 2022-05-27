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
        this.removeHyphens = this.removeHyphens.bind(this)
        this.fetchUuid = this.fetchUuid.bind(this)
    }

    componentDidMount() {
        this.fetchUuid()
    }

    fetchUuid() {
        this.setState({
            items: {
                isLoaded: false,
            },
        });
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
                version: this.state.items.version,
                isHyphenated: this.state.items.isHyphenated,
                isNumeric: this.state.items.isNumeric,
        }})
    }

    removeHyphens() {
        //TODO: Figure out how to bring back hyphens?
        let uuidToSet = this.state.items.uuid
        if (this.state.items.uuid.includes("-"))    {
            uuidToSet = this.state.items.uuid.replaceAll("-", "")
        }
        this.setState({
            items:  {
                isHyphenated: false,
                uuid: uuidToSet,
                isLoaded: true,
                version: this.state.items.version,
                isUppercase: this.state.items.isUppercase,
                isNumeric: this.state.items.isNumeric,
            }})
    }

    render() {

        return (
            <Container maxWidth="xl">
                <Instructions />
                <Uuid item={this.state.items}/>
                <ContentButtons regenerate={this.fetchUuid}/>
                <UuidChoices
                    onCaseChange={this.onCaseChange}
                    removeHyphens={this.removeHyphens}
                />
            </Container>
        );
    }
}
export default Content;