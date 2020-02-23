import React, { Component } from 'react'
import { Col, Card, Form, Button } from 'react-bootstrap'

export default class TimerForm extends Component {
  render() {

    const { title, project } = this.props
    
    const submitText = title ? 'Update' : 'Create'

    return (
      <Col lg={4}>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{project}</Card.Subtitle>
            <br />
            <Form>
              <Form.Group controlId="formBasic">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" defaultValue={this.props.title} />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Project</Form.Label>
                <Form.Control type="text" defaultValue={this.props.project} />
              </Form.Group>
              <Button variant="primary" type="submit">
                {submitText}
              </Button> &nbsp;  
              <Button variant="danger" type="submit">
                Cancel
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
