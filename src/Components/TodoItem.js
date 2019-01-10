import React  from 'react';
import '../App.css';

class TodoItem extends React.Component {
   constructor (props) {
      super(props);
      this.state = { editing: false };
   };

   componentDidMount () {
      this.setState({ changedText: this.props.todo.title });
   };

   handleEditing = (event) => {
      this.setState({ editing: true, changedText: this.props.todo.title });
   };

   handleEditingDone = (event) => {
      if (event.keyCode === 13 ) { // submit
         this.setState({ editing: false });
      }
   };

   handleEditingChange = (event) => {
      let _changedText = event.target.value;
      this.setState({ changedText: _changedText });
   };

   render () {
      let todo = this.props.todo;

      let viewStyle = {};
      let editStyle = {};

      if (this.state.editing) {
         viewStyle.display = 'none';
      } else {
         editStyle.display = 'none';
      }

      return (
         <div id="todo-list">
            <li className={ todo.done ? 'done' : '' }>
               <div style={viewStyle} onDoubleClick={this.handleEditing.bind(this)}>
                  <input
                     checked={todo.done}
                     onChange={this.props.handleDone.bind(null, todo.id)}
                     type="checkbox"
                     style={{ fontSize: 'x-large' }} />

                   <label>
                     { this.state.changedText }
                   </label>

                   <a id="instructions credits"
                       href='#'
                       className="destroy"
                       onClick={ this.props.handleDelete.bind(null, todo.id) }>
                     [x]
                   </a>

               </div>

                 <input  type="text"
                         onKeyDown={this.handleEditingDone.bind(this)}
                         onChange={this.handleEditingChange.bind(this)}
                         style={editStyle}
                         value={this.state.changedText} />
            </li>
         </div>
      );
   }
}

export default TodoItem;
