import React from 'react';
import rand from 'random-key';
import './TodoForm.css';
import {Container, Row, Col, Form, Input, Button, InputGroup, InputGroupAddon } from "reactstrap";

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
           if (this.state.text !== "") {
           this.props.onSubmit({
               id: rand.generate(),
               text: this.state.text,
               complete: false
           })
           this.setState({
               text: ""
           })
        }
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <Button
                                    onClick={this.props.click}
                                    outline
                                    color="secondary">
                                    {this.props.toggleAllComplete}
                                </Button>
                            </InputGroupAddon>
                            <Form onSubmit={this.handleSubmit}>
                                <Input
                                    className="main-input"
                                    name="text"
                                    value={this.state.text}
                                    placeholder="What needs to be done?"
                                    onChange={this.handleChange}
                                />
                            </Form>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default TodoForm;
