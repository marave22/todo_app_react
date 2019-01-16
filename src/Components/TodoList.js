import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';
import { } from 'reactstrap';
import { Container, Row, Col} from 'reactstrap';
import Button from "reactstrap/es/Button";
import {InputGroupAddon} from "reactstrap";

class TodoList extends React.Component{
    state = {
        text: '',
        todos: [],
        todoToShow: 'all',
        toggleAllComplete: true,
        editing: false,
        editMode: false,
        disable: false,
        checked: false
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

    handleonSave = (event) => {
      event.preventDefault();
      event.target.querySelector('input').setAttribute('disabled','true');
      const id = event.target.querySelector('input').getAttribute('data-id');
      const val = event.target.querySelector('input').value;
      const todos = [...this.state.todos];
      const todo = todos.filter(t => t.id === id);
      todo[0].text = val;
      this.setState({
         todos:todos
      })
   }

   toggleAll = () => {
        this.setState({
            todos: this.state.todos.map(todo => ({
                ...todo,
                complete: this.state.toggleAllComplete
            })),
            toggleAllComplete: !this.state.toggleAllComplete,
            editing: !this.state.editing
        })
   }


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
            <Container>
                <Container>
                    <Row style={{display: "flex", justifyContent: "center"}}>
                        <Col>
                            <TodoForm
                                click={this.toggleAll}
                                onSubmit={this.addTodo}/>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            {todos.map(todo => (
                                <Todo
                                    todo_id={todo.id}
                                    check={this.state.editing}
                                    key={todo.id}
                                    todo={todo}
                                    toggleComplete={() => this.toggleComplete(todo.id)}
                                    onDelete={() => this.handleDeleteTodo(todo.id)}
                                    edit={this.handleOnEdit}
                                    save={this.handleonSave}
                                    disable={this.state.disable}
                                />
                            ))}
                        </Col>
                    </Row>
                </Container>
                <Container id="left-items">
                    <Row>
                        <Col>
                            items left: {this.state.todos.filter(todo => !todo.complete).length}
                            <Button style={{marginLeft: "10px"}} className="event-button" onClick={() => this.updateTodoToShow("all")}>All</Button>
                            <Button className="event-button" onClick={() => this.updateTodoToShow("active")}>Active</Button>
                            <Button className="event-button" onClick={() => this.updateTodoToShow("complete")}>Complete</Button>
                            {this.state.todos.some(todo => todo.complete) ? (
                                    <Button className="event-button" onClick={this.removeAllTodosThatAreComplete}>Clear completed</Button>
                            ) : null }
                        </Col>
                    </Row>
            </Container>
            </Container>
        );
    }
}

export default TodoList;
