import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos'

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk' },
      { id: 2, content: 'play mario kart' }
    ]
  }

  deleteTodo = (id) => {
    const updatedTodos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: updatedTodos
    });
  }

  addTodo = (todo) => {
    // let todo = {...todo};
    todo.id = this.state.todos.length + 1
    let updatedTodos = [...this.state.todos, todo];
    this.setState({
      todos: updatedTodos
    })
    }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
