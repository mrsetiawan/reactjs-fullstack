import React, { Component } from 'react'
import Timer from './Timer'
import TimerForm from './TimerForm'
import { Row } from 'react-bootstrap'

export default class EditableTimer extends Component {
  render() {
    return (
      <Row className='m-3'>
        {this.props.editFormOpen ?
          <TimerForm
            title = {this.props.title}
            project = {this.props.project}
          />
          :
          <Timer 
            title = {this.props.title}
            project = {this.props.project}
            elapsed = {this.props.elapsed}
            runningSince = {this.props.runningSince}
          />
        }
      </Row>
    )
  }
}
