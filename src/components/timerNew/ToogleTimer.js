import React, { Component } from 'react';
import TimerForm from './TimerForm'
import { Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ToogleTimer extends Component {

  state = {
    isOpen:false
  }

  handlerFormClose = () => this.closeForm()
  handlerFormOpen = () => this.openForm()

  closeForm = () => this.setState({isOpen:false})
  openForm = () => this.setState({isOpen:true})


  handleSubmit = (data) => {
    this.props.handleSubmitFromParent(data);
    this.closeForm()
  }

  render() {
    return (
      <>
        {this.state.isOpen ?
          <TimerForm 
            handlerFormClose={this.handlerFormClose} 
            handleSubmit={(data) => this.handleSubmit(data)}
          />
          :
          <Col className='text-center'>
            <Button onClick={this.handlerFormOpen}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        }
      </>
    )
  }
}

export default ToogleTimer;
