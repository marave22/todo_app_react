import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

class TodoList extends React.Component{
    state = {
        todos: [],
        todoToShow: 'all',
        toggleAllComplete: true
    };

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    };

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    // suppose to update
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    };

    updateTodoToShow = (show) => {
        this.setState({
            todoToShow: show
        })
    };

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    removeAllTodosThatAreComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        });
    };

    render() {
        let todos = [];

        if (this.state.todoToShow === 'all') {
            todos = this.state.todos;
        } else if (this.state.todoToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete);
        } else if (this.state.todoToShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete);
        }
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button
                        onClick={() => this.setState({
                            todos: this.state.todos.map(todo => ({
                                ...todo,
                                complete: this.state.toggleAllComplete
                            })),
                            toggleAllComplete: !this.state.toggleAllComplete
                        })
                        }
                    >{this.state.toggleAllComplete}
                    </button>

                <TodoForm onSubmit={this.addTodo}/>
                </div>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        onDelete={() => this.handleDeleteTodo(todo.id)}
                    />
                ))}
                <div>
                    items left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button onClick={() => this.updateTodoToShow("all")}>All</button>
                    <button onClick={() => this.updateTodoToShow("active")}>Active</button>
                    <button onClick={() => this.updateTodoToShow("complete")}>Complete</button>
                </div>
                {this.state.todos.some(todo => todo.complete) ? (
                <div style={{display: "flex", justifyContent: "center"}}>
                    <button onClick={this.removeAllTodosThatAreComplete}>Clear completed</button>
                </div>
                ) : null }
                </div>
        );
    }
}

export default TodoList;