import React from "react";

class Button extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    console.log(this.state.count);

    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button defaultValue="click me!" onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default Button;
