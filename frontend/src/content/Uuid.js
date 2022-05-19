import React from 'react'
import {Grid, Typography} from "@mui/material";
import {ContentCopy} from "@mui/icons-material";

class Uuid extends React.Component {
  constructor(props) {
    super(props);
    this.basePath = "https://uuid-gen-g6d5qy6jra-ew.a.run.app"
    this.genUUIDPath = "/uuid"
    this.state = {
      error: null,
      isLoaded: false,
      items: {}
    };
  }

  componentDidMount() {
    fetch(this.basePath + this.genUUIDPath)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderUuid(items) {
    return (
        <Typography variant="h4" component="div" sx={{
          flexGrow: 1,
          textAlign: 'right',
          fontWeight: 'bold',
          verticalAlign: 'top',
          pb: 5,
        }}>
          {items.uuid}
        </Typography>
    );
  }

  renderPage(items) {
    return (
        <Grid container spacing={2} sx={{
          maxWidth: '80%',
          textAlign: 'center',
          color: 'white',
        }}>
          <Grid item xs={11} bgcolor={"blue"}>
            {this.renderUuid(items)}
          </Grid>
          <Grid item xs={1}>
            <ContentCopy size="large"/>
          </Grid>
        </Grid>
    );
  }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
          this.renderPage(items)
      );
    }
  }
}

export default Uuid;
