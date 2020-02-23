import React, { Component } from 'react'
import TimerForm from './TimerForm'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class ToggleableTimerFormat extends Component {
  render() {
    return (
      <Row className='m-3'>
        {this.props.isOpen ?
          <TimerForm />
          :
          <Col md={4} className='text-center'>
            <Button>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        }
      </Row>
    )
  }
}
