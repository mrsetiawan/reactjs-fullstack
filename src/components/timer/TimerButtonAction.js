import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class TimerButtonAction extends Component {
  render() {
    return (
      <>
        {this.props.runningSince ?
          <Button 
            variant="outline-danger" 
            size='block'
            onClick={this.props.onStopClick}>Stop
          </Button>
          :
          <Button 
            variant="outline-warning" 
            size='block' 
            onClick={this.props.onStartClick}>Start
          </Button>
        }
      </>
    )
  }
}
