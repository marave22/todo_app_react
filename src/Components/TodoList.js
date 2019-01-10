import React from 'react';
import TodoItem from './TodoItem.js';
import '../App.css';

const todoList = ( props ) => {
   return (
      <div id="todo-list">
         <ul>
          { props.todos.map((todo, i) => {
             return (

                <section id="main" key={todo.title}>

               <TodoItem
                     value={props.value}
                     todo={todo}
                     handleDone={props.handleDone}
                     handleDelete={props.handleDelete}
                     handleEdit={props.handleedit}
                     handleEditDone={props.handleeditdone} />

               </section>


               )
            }) }
         </ul>
         
      </div>
   )
};

export default todoList;
