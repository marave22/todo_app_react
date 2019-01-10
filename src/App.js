import React from 'react';
import TodoList from './Components/TodoList';
import './App.css';

class App extends React.Component {
    state = {
        count: 0,
    };

    increment = () => {
        this.setState({
            count: this.state.conut + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };



    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };

   render () {
      return (
         <div className="App">
             <TodoList />
         </div>
      );
   }
}

export default App;
