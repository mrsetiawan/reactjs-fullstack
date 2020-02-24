import React, { Component } from 'react'
import TimerForm from './TimerForm'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class ToggleableTimerFormat extends Component {

  state = {
    isOpen:false
  }

  handleFormOpen = () => this.setState({isOpen:true})
  handleFormClose = () => this.setState({isOpen:false})
  handleSubmit = (value) => {
    this.props.onFormSubmit(value)
    this.setState({isOpen:false})
  }

  render() {
    return (
      <Row className='m-3'>
        {this.state.isOpen ?
          <TimerForm 
            handleSubmit={this.handleSubmit}
            handleFormClose={this.handleFormClose}
          />
          :
          <Col className='text-center'>
            <Button onClick={this.handleFormOpen}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        }
      </Row>
    )
  }
}
