import React, { Component } from 'react';
import TimerForm from './TimerForm'
import { Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ToogleTimer extends Component {

  state = {
    isOpen:false
  }

  handleToogle = () => this.setState({isOpen: !this.state.isOpen})

  handleSubmit = (data) => {
    this.props.handleSubmitFromParent(data);
    this.setState({isOpen:false})
  }

  render() {
    return (
      <>
        {this.state.isOpen ?
          <TimerForm 
            handleToogle={this.handleToogle} 
            handleSubmitFromToogle={(data) => this.handleSubmit(data)}
          />
          :
          <Col className='text-center'>
            <Button onClick={this.handleToogle}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        }
      </>
    )
  }
}

export default ToogleTimer;
