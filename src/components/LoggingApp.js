import React from "react";
import Logging from "./Logging";

class LoggingApp extends React.Component {
  constructor() {
    super();

    this.state = {
      logged: false,
    };
  }

  handleLog = () => {
    this.setState((prevState) => {
      return { logged: !prevState.logged };
    });
  };

  render() {
    return <Logging logged={this.state.logged} handleLog={this.handleLog} />;
  }
}

export default LoggingApp;
