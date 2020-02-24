import React, { Component } from 'react'
import TimerForm from './TimerForm'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class ToggleableTimerFormat extends Component {

  state = {
    isOpen:false
  }

  handleChange = () => this.setState({isOpen:!this.state.isOpen})

  render() {
    return (
      <Row className='m-3'>
        {this.state.isOpen ?
          <TimerForm />
          :
          <Col className='text-center'>
            <Button onClick={this.handleChange}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        }
      </Row>
    )
  }
}
