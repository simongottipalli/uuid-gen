import React from 'react'
import './App.css';

class UUIDGen extends React.Component {
  constructor(props) {
    super(props);
    this.basePath = "http://localhost:8080"
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
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.uuid}
        </ul>
      );
    }
  }
}
export default UUIDGen;