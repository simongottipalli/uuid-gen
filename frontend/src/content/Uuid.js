import React from 'react'
import {LinearProgress, Typography, Box, Button} from "@mui/material";
import {CopyToClipboard} from "react-copy-to-clipboard/src";

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

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <Box sx={{height: 100, alignItems: 'center'}}>
                <LinearProgress />
            </Box>
        )
    } else {
        return (
          <Box component="span" sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
          }}>
              {/*TODO: Show a message "Copied"*/}
              <CopyToClipboard text={items.uuid}>
                  <Button sx={{textTransform:'none'}}>
                      <Typography variant="h3" fontWeight="bold">
                           {items.uuid}
                      </Typography>
                  </Button>

              </CopyToClipboard>

          </Box>
      );
    }
  }
}

export default Uuid;
