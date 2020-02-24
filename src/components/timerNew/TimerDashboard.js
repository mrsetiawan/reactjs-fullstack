import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleTimer from './ToogleTimer'
import uuid from 'uuid/v4'

import ContainerParent from '../Container'
import {
  Col,
} from 'react-bootstrap'

export default class TimerDashboard extends Component {

  state = {
    timers: [
      { id: uuid(), 
        title:'Learn React',
        project: 'Web Domination',
        elapsed: '8986300',
        runningSince: null,
        editFormOpen: false
      },
      { id: uuid(), 
        title: 'Learn extreme ironing', 
        project: 'Web Domination', 
        elapsed:'3890985', 
        runningSince:null, 
        editFormOpen:true 
      }
    ],
    isOpen: true
  }

  render() {
    return (
      <ContainerParent>
        <Col xs={12}>
          <h3 className='text-center'><b>Timer app</b></h3>
        </Col>
        <Col xs={12}>
          <EditableTimerList timers={this.state.timers} />
        </Col>
        <Col xs={12}>
          <ToggleTimer isOpen={this.state.isOpen} />
        </Col>
      </ContainerParent>
    )
  }
}
