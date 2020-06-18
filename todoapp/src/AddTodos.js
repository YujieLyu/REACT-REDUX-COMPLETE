import React, { Component } from 'react';

class AddTodos extends Component {
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        });
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        
        this.setState({
            content:''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="content">Add new todo:</label>
                    <input type="text" id="content" onChange={this.handleChange}></input>
                   <button>Add</button>
                </form>
            </div>
        );
    }
}

export default AddTodos