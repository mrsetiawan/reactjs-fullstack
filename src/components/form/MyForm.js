import React, { Component } from 'react'
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
    data: [],
    fields: {
      name:'',
      address:''
    }
  }

  onChangeHandler = (event) => {
    const fields = this.state.fields
    fields[event.target.name] = [event.target.value]
    this.setState({
      fields
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    const data = [...this.state.data, this.state.fields]

    this.setState({
      data,
      fields:{
        name:'',
        address:''
      }
    })

  }

  render() {
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
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Address"
                      value={this.state.fields.address}
                      name='address'
                      onChange={this.onChangeHandler}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
              
              <Col xs={12}>
                <h3 className='text-center'>List</h3>
                <ListGroup>
                  {this.state.data.map((item,idx) => (
                      <ListGroup.Item key={idx}>
                        <span>Nama: {item.name} <br /> Alamat: {item.address}</span> 
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
