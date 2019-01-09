import React, { Component } from 'react';
import TodoList from './Components/TodoList';
//import TodoItem from './Components/TodoItem';
import './App.css';

class App extends Component {

  state = {
    text: "",
    items: [],
    done: false
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const text = this.state.text;
    let newItems = this.state.items.concat(text);
    console.log("form submitted value", text);
    this.setState({
      text: "",
      items: newItems
    });
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
    console.log(this.state.text);
  };

  handleDelete = (itemIndex) => {
    const newItems = this.state.items;
    newItems.splice(itemIndex, 1);
    this.setState({
      items: newItems
    })
  };

  handleOnChange = () => {
    const doesDone = !this.state.done;
    this.setState({
      done: doesDone
    })
  };

  render() {
    return (
      <div className="App">
        <p>TODO</p>
        <form onSubmit={this.handleSubmit}>
          <input 
            onChange={this.handleChange}
            value={this.state.text}/>
          <button>Submit</button>
        </form>
        <TodoList
            items={this.state.items}
            delete={this.handleDelete}
            change={this.handleOnChange}
        />

      </div>
    );
  }
}

export default App;
