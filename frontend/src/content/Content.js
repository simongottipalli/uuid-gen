import * as React from 'react';
import {Container} from "@mui/material";
import GenerateButton from "../components/generate-button";
import ClickToCopyText from "../components/click-to-copy-text";
import UuidText from "../components/uuid-text";
import FormatUuidCheckboxes from "../components/format-uuid-checkboxes";
import ErrorText from "../components/error-text";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.basePath = "https://uuid-gen-g6d5qy6jra-ew.a.run.app"
        this.genUUIDPath = "/uuid/v1"
        this.state = {
            error: null,
            isLoaded: false,
            isUppercase: false,
            isHyphenated: true,
            isNumeric: false,
        };
        this.onCaseChange = this.onCaseChange.bind(this)
        this.removeHyphens = this.removeHyphens.bind(this)
        this.fetchUuid = this.fetchUuid.bind(this)
        this.newUuid = this.newUuid.bind(this)
    }

    componentDidMount() {
        this.newUuid()
    }

    newUuid()   {
        this.setState(() => {
            return {
                error: null,
                isLoaded: false,
                isUppercase: false,
                isHyphenated: true,
                isNumeric: false,
            }
        });
        this.fetchUuid()
    }

    fetchUuid() {
        fetch(this.basePath + this.genUUIDPath)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(() => {
                        return {
                            isLoaded: true,
                            uuid: result.uuid,
                        }
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
        const stateToSet = !this.state.isUppercase
        let uuidToSet
        if (stateToSet) {
            uuidToSet = this.state.uuid.toUpperCase()
        }
        else {
            uuidToSet = this.state.uuid.toLowerCase()
        }
        this.setState(() => {
            return  {
                isUppercase: stateToSet,
                uuid: uuidToSet,
        }})
    }

    removeHyphens() {
        //TODO: Figure out how to bring back hyphens?
        let uuidToSet = this.state.uuid
        if (this.state.uuid.includes("-"))    {
            uuidToSet = this.state.uuid.replaceAll("-", "")
        }
        this.setState(() => {
            return  {
                isHyphenated: false,
                uuid: uuidToSet,
            }})
    }

    render() {

        return (
            <Container maxWidth="xl">
                <ClickToCopyText />
                <UuidText isLoaded={this.state.isLoaded} uuid={this.state.uuid} />
                <ErrorText error={this.state.error} />
                <GenerateButton onClick={this.newUuid} buttonText={"Regenerate"}/>
                <FormatUuidCheckboxes
                    onCaseChange={this.onCaseChange}
                    removeHyphens={this.removeHyphens}
                />
            </Container>
        );
    }
}
export default Content;