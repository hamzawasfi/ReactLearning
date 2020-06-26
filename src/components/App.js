import React from "react";
import TodoItem from "./TodoItem";
import todoData from "./TodoData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headertxt: "this is the header",
      footertxt: "this is the footer",
      todos: [...todoData],
      user: {},
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState(() => {
          return {
            user: data,
          };
        })
      );
  }

  handleChange(id) {
    this.setState((prevState) => {
      const newTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: newTodos,
      };
    });
  }

  render() {
    const todoComps = this.state.todos.map((item) => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <React.Fragment>
        <header className="navbar">{this.state.headertxt}</header>
        {todoComps}
        <p>{this.state.loading ? "loading" : this.state.user.name}</p>
        <footer className="footer">{this.state.footertxt}</footer>
      </React.Fragment>
    );
  }
}

export default App;
