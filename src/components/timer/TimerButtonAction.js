import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class TimerButtonAction extends Component {
  render() {
    console.log(this.props.runningSince)
    return (
      <>
        {this.props.runningSince ?
          <Button variant="outline-danger" size='block'>Stop</Button>
          :
          <Button variant="outline-warning" size='block'>Start</Button>
        }
      </>
    )
  }
}
