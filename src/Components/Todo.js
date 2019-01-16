import React from 'react';
import './Todo.css';
import { Button, Input, Form, Label, Col, Container, Row, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';


class Todo extends React.Component {

   handleOnEdit = (event) => {
     event.preventDefault();
     event.target.removeAttribute('disabled');
   };

   render () {
       return (
           <Container>
               <Row>
                   <Col style={{marginTop: "10px", marginBottom: "10px", display: "flex", }}>
                       <InputGroup>
                           <InputGroupAddon addonType="prepend">
                               <InputGroupText>
                                   <Input
                                       onClick={this.props.toggleComplete}
                                       addon
                                       aria-label="Checkbox for following text input"
                                       style={{
                                           textDecoration: this.props.todo.complete ? "line-through" : ""
                                       }}
                                       type="checkbox"
                                       data-id={this.props.todo_id}
                                       name="toggle-check"
                                       onChange={this.props.change}/>
                               </InputGroupText>
                           </InputGroupAddon>
                           <Form
                               onSubmit={this.props.save}
                               onDoubleClick={this.handleOnEdit}>
                               <Label style={{margin: "0"}}>
                                   <Input
                                       type="text"
                                       defaultValue={this.props.todo.text}
                                       data-id={this.props.todo_id}
                                       disabled={true}
                                       style={{
                                           marginRight: "20px",
                                           borderRadius: "0",
                                           textDecoration: this.props.todo.complete ? "line-through" : ""
                                       }}
                                   />
                               </Label>
                           </Form>
                           <Button
                               style={{
                                   borderRadius: "0.25rem"
                               }}
                               outline
                               color="secondary"
                               id="delete-button"
                               onClick={this.props.onDelete}>
                               x
                           </Button>
                       </InputGroup>
                   </Col>
               </Row>
           </Container>
       )
   }
};

export default Todo;
