import React, { Component } from 'react'
import TimerButtonAction from './TimerButtonAction'
//UI
import { Col, Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export default class Timer extends Component {
  
  handleEditForm = () => this.props.handleEditForm()
  deleteList = (id) => this.props.deleteList(this.props.id)

  componentWillMount() {
    clearInterval(this.forceUpdateInterval)
  }

  componentDidMount() {
    this.forceUpdateInterval = () => setInterval(() => this.forceUpdate(), 50)
  }

  render() {
    
    const { id,title, project, elapsed, runningSince } = this.props
    // const elapsedString = 
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
            <TimerButtonAction
              runningSince={!!runningSince}
            />
            <br />
            <Card.Link >
              <FontAwesomeIcon icon={faEdit} className='text-primary' onClick={this.handleEditForm}/>
            </Card.Link>
            <Card.Link >
              <FontAwesomeIcon icon={faTrash} className='text-primary' onClick={(id) => this.deleteList(id)}/>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
