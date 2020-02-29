import React, { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default class TImer extends Component {

  handlerEdit = () => this.props.editHandlerForm()

  render() {

    const {id, title, project, elapsed, runningSince, editFormOpen} = this.props

    return (
      <Col className='mb-3'>
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
            <Card.Link className='text-primary' onClick={this.handlerEdit}>
              <FontAwesomeIcon icon={faEdit} />
            </Card.Link>
            <Card.Link className='text-primary'>
              <FontAwesomeIcon icon={faTrash} />
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
