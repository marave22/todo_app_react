import React from 'react';
import TodoList from './Components/TodoList.js';
import rand from 'random-key';

import './App.css';

class App extends React.Component {

   state = {
      title: '',
      todos: [
         { title: '', done: false, id: null }
      ],
      editing: true
   };

   handleChange = (event) => {
      let title = event.target.value;
      this.setState({ title: title });
   };

  handleDone = (idToBeMarkedAsDone) => {
    let _todos = this.state.todos;
    let todo = _todos.filter((todo) => {
      return todo.id === idToBeMarkedAsDone;
    })[0];

    todo.done = !todo.done;

    this.setState({ todos: _todos });
  }

  handleDelete = (idToBeDeleted) => {
    let newTodos = this.state.todos.filter( (todo) => {
      return todo.id !== idToBeDeleted
    } )

    this.setState({ todos: newTodos});
 };

 handleSubmit = (event) => {
    event.preventDefault();

    let title = this.state.title;
    let newTodos = this.state.todos.concat({ title: title, done: false, id: rand.generate() });

    if (this.state.title !== "") {
       this.setState({
         title: '',
         todos: newTodos
      });
   }
};

handleClearCompleted = () => {
   let newTodos = this.state.todos.filter((todo) => { return !todo.done });
   this.setState({
      todos: newTodos
   });
};

handleSelectAll = (selectAll) => {
   let done = !this.state.todos.done;
   let newTodos = this.state.todos.filter((todo) => {
      return todo.done = selectAll
   })
   this.setState({ todos: newTodos });
}

   render () {
      return (
         <div id="todoapp"
               className="App">
            <h1>TODO</h1>

            <form onSubmit={this.handleSubmit}>
               <input
                  id="main-check"
                  type="checkbox"
                  onChange={this.handleSelectAll}/>
               <input
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.title} />
            </form>

               <TodoList
                  handleDone={this.handleDone}
                  handleDelete={this.handleDelete}
                  todos={this.state.todos}/>

            <footer id="todo-count">
               All: ({ this.state.todos.length }) |
               Active: ({ this.state.todos.filter((todo) => { return !todo.done }).length }) |
               Completed: ({ this.state.todos.filter((todo) => { return todo.done }).length }) |
               <a
                  id="clear-completed"
                  href="#"
                  onClick={this.handleClearCompleted}>Clear Completed
               </a>
            </footer>
         </div>
      );
   }
}

export default App;
