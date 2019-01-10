import React from 'react';
import rand from 'random-key';

class TodoForm extends React.Component{
    state = {
        text: ''
    };

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: rand.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ""
        })
    };


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="text"
                        value={this.state.text}
                        placeholder="What needs to be done?"
                        onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>add todo</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;