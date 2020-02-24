import React, { Component } from 'react'
//UI
import { Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default class Timer extends Component {
  
  handleEditForm = () => this.props.handleEditForm()

  render() {

    const { id,title, project, elapsed, runningSince } = this.props

    return (
      <Col>
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
            <Card.Link >
              <FontAwesomeIcon icon={faEdit} className='text-primary' onClick={this.handleEditForm}/>
            </Card.Link>
            <Card.Link >
              <FontAwesomeIcon icon={faTrash} className='text-primary' />
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
