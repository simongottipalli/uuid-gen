import * as React from 'react';
import {Container} from "@mui/material";
import Instructions from "./Instructions"
import UuidChoices from "./UuidOptions";
import Uuid from "./Uuid";
import ContentButtons from "./ContentButtons";
import Fields from "./Fields";


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.basePath = "https://uuid-gen-g6d5qy6jra-ew.a.run.app"
        this.genUUIDPath = "/uuid"
        this.state = {
            error: null,
            isLoaded: false,
        };
        this.onCaseChange = this.onCaseChange.bind(this)
        this.removeHyphens = this.removeHyphens.bind(this)
        this.fetchUuid = this.fetchUuid.bind(this)
        this.preparePath = this.preparePath.bind(this)
        this.renderUuid = this.renderUuid.bind(this)
    }

    version()   {
        if (this.props.page==="Version3")   {
            return "/v3"
        }
        else    {
            return "/v1"
        }
    }

    componentDidMount() {
        this.fetchUuid()
    }

    preparePath(params)   {
        this.path = this.basePath + this.genUUIDPath + this.version()+ '?'
        if (params) {
            Object.keys(params).forEach(
                (key) => {
                if (key !== 'generate') {
                    this.path = this.path + key + '=' + params[key] + '&'
                }
            })
        }
    }

    fetchUuid(params) {
        this.setState(() => { return {
                isLoaded: false,
            }
        });

        this.preparePath(params)

        fetch(this.path)
            .then(res => res.json())
            .then(
                (result) => {
                    if (result.uuid != null)   {
                        this.setState(() => {
                            return  {
                                isLoaded: true,
                                uuid: result.uuid,
                                isUppercase: false,
                                isHyphenated: true,
                                isNumeric: false,
                                version: this.props.page,
                            }});
                    }
                    else if (result.error !== null)   {
                        this.setState(() => {
                            return  {
                                error: result.error
                            }
                        });
                    }
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
            return {
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
            return {
                isHyphenated: false,
                uuid: uuidToSet,
            }})
    }

    renderUuid()  {
        return (
            <Container maxWidth="xl">
                <Instructions generated={true}/>
                <Uuid isLoaded={this.state.isLoaded} uuid={this.state.uuid} error={this.state.error}/>
                <ContentButtons generate={this.fetchUuid}/>
                <UuidChoices
                    onCaseChange={this.onCaseChange}
                    removeHyphens={this.removeHyphens}
                />
            </Container>
        );
    }
    renderV1()  {
        return (
            <Container maxWidth="xl">
                <Instructions generated={true}/>
                <Uuid isLoaded={this.state.isLoaded} uuid={this.state.uuid} error={this.state.error}/>
                <ContentButtons generate={this.fetchUuid}/>
                <UuidChoices
                    onCaseChange={this.onCaseChange}
                    removeHyphens={this.removeHyphens}
                />
            </Container>
        );
    }

    renderV3()  {
        return  (
            <Container maxWidth="xl">
                <Instructions generated={false}/>
                <Fields onClick={this.fetchUuid}/>
            </Container>
        )
    }

    render() {
        if ((this.props.page === "Version3" === this.state.version) && (this.state.isLoaded))  {
            return this.renderUuid()
        }
        else if ((this.props.page === "Version3") && (this.state.version !== "Version3")) {
            return this.renderV3()
        }
        else   {
            return this.renderUuid()
        }
    }
}
export default Content;