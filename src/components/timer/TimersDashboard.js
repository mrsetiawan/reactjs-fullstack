import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerFormat from './ToggleableTimerFormat'
//UI
import ContainerParent from '../Container'
import {
  Col,
} from 'react-bootstrap'

export default class TimersDashboard extends Component {

  state = {
    isOpen: true
  }
  
  render() {
    return (
      <ContainerParent>
        <Col xs={12}>
          <h3 className='text-center'><b>Timer app</b></h3>
        </Col>
        <Col xs={12}>
          <EditableTimerList />
        </Col>
        <Col xs={12}>
          <ToggleableTimerFormat isOpen={this.state.isOpen} />
        </Col>
      </ContainerParent>
    )
  }
}
