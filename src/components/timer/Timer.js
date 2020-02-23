import React, { Component } from 'react'
//UI
import { Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default class Timer extends Component {
  render() {

    const { title, project, elapsed, runningSince } = this.props

    return (
      <Col lg={4}>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {project}
            </Card.Subtitle>
            <h3 className='text-center p-5'>
              {elapsed}
            </h3>
            <Button variant="outline-warning" size='block'>Start</Button>
            <br />
            <Card.Link href="#">
              <FontAwesomeIcon icon={faEdit} />
            </Card.Link>
            <Card.Link href="#">
              <FontAwesomeIcon icon={faTrash} />
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
