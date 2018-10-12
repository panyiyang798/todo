import React, { Component } from "react";
import uuid from "./utils/getId";
import Input from "./common/input";
import Output from "./common/output";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  handleChange = e => {
    const newTodo = e.target.value;
    this.setState({ newTodo });
  };

  handleToggle = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todos[index] };
    todos[index].completed = !todos[index].completed;
    this.setState({ todos });
  };

  handleAdd = () => {
    if (this.state.newTodo==='') return;
    const todos = [...this.state.todos];
    const updatedTodos = todos.concat({
      id: uuid(),
      title: this.state.newTodo,
      completed: false
    });
    this.setState({ todos: updatedTodos, newTodo: "" });
  };

  handleDelete = id => {
    const todos = [...this.state.todos];
    const updatedTodos = todos.filter(todo => todo.id !== id);
    this.setState({ todos: updatedTodos });
  };

  handleClearCompleted = () => {
    const todos = [...this.state.todos];
    const updatedTodos = todos.filter(todo=>todo.completed===false);
    this.setState({todos:updatedTodos})
  }

  render() {
    return (
      <div className="container">
        <Input
          value={this.state.newTodo}
          onChange={this.handleChange}
          onAdd={this.handleAdd}
          onClearCompleted = {this.handleClearCompleted}
        />
        <Output
          todos={this.state.todos}
          onDelete={this.handleDelete}
          onChange={this.handleToggle}
        />
      </div>
    );
  }
}

export default App;
