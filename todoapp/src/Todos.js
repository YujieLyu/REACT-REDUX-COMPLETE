import React from 'react';

const Todos = ({ todos, deleteTodo }) => {
    console.log(todos);
    const todoList = todos.length > 0 ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { deleteTodo(todo.id) }}>{todo.content} and id is {todo.id}</span>
                </div>
            )
        })
    ) : (
            <p className="center">You have no todos</p>
        )


    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;