import React, { Component } from 'react'
import { Col, Card, Form, Button } from 'react-bootstrap'

export default class TimerForm extends Component {
  render() {
    const { title, project } = this.props

    const titleButton = title ? 'Update' : 'Create'

    return (
      <Col className='mb-3'>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{project}</Card.Subtitle>
            <br />
            <Form>
              <Form.Group controlId="formBasic">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text"  defaultValue={title} />
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Project</Form.Label>
                <Form.Control type="text" defaultValue={project} />
              </Form.Group>
              <Button variant="primary" type="submit">
                {titleButton}
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
