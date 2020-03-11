import React, { Component } from 'react'
import Fields from './Fields';

import {
  Container,
  Col,
  Form,
  Button,
  Row,
  ListGroup

} from 'react-bootstrap'

export default class MyForm extends Component {

  state = {
    people: [],
    fields: {
      name: '',
      email: ''
    },
    fieldError: {}
  }

  onChangeHandler = (event) => {
    const fields = this.state.fields
    fields[event.target.name] = [event.target.value]
    this.setState({
      fields
    })
  }

  validate = (person) => {
    const errors = {}
    if (!person.name) errors.nameee = 'Name is required'
    if (!person.email) errors.emailll = 'Email is required'

    return errors
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    const person = { ...this.state.fields }
    const fieldError = this.validate(person)
    this.setState({ fieldError })

    if (Object.keys(fieldError).length) return

    const people = [...this.state.people]

    this.setState({
      people: people.concat(person),
      fields: {
        name: '',
        email: ''
      }
    })

  }

  render() {
    // console.log(this.state.fieldError)
    return (
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Row>
              <Col xs={12} className='m-3'>
                <h3>
                  <center>
                    <b>What do you think in REACT ?</b>
                  </center>
                </h3>
              </Col>
              <Col xs={12} className='mb-3'>
                <Form onSubmit={this.onFormSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      name='name'
                      value={this.state.fields.name}
                      onChange={this.onChangeHandler}
                    />
                    <Form.Text className="text-danger">
                      {this.state.fieldError.nameee}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={this.state.fields.email}
                      name='email'
                      onChange={this.onChangeHandler}
                    />
                    <Form.Text className="text-danger">
                      {this.state.fieldError.emailll}
                    </Form.Text>
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>

              <Col xs={12}>
                <h3 className='text-center'>List</h3>
                <ListGroup>
                  {this.state.people.map((item, idx) => (
                    <ListGroup.Item key={idx}>
                      <span>Nama: {item.name} <br /> Alamat: {item.email}</span>
                    </ListGroup.Item>
                  )
                  )}
                </ListGroup>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
