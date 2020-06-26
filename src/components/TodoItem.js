import React from "react";

class TodoItem extends React.Component {
  render() {
    let styles = {
      color: this.props.item.completed ? "#f00" : "#00f",
    };

    return (
      <div className="todoItem">
        <input
          type="checkbox"
          checked={this.props.item.completed}
          onChange={() => this.props.handleChange(this.props.item.id)}
        ></input>
        <p
          style={styles}
          onClick={() => this.props.handleChange(this.props.item.id)}
        >
          {this.props.item.text}
        </p>
      </div>
    );
  }
}

export default TodoItem;
