import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerFormat from './ToggleableTimerFormat'
import uuid from 'uuid/v4'
//UI
import ContainerParent from '../Container'
import {
  Col,
} from 'react-bootstrap'

export default class TimersDashboard extends Component {

  state = {
    timers:[
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
    ]
  }
  
  // handleCreateForm = (value) => {
  //   this.onFormSubmit(value)
  // }

  onFormSubmit = (value) => {
    const newValue = value

    this.setState({timers:this.state.timers.concat(newValue)})
  }

  render() {
    return (
      <ContainerParent>
        <Col xs={12}>
          <h3 className='text-center'><b>Timer app</b></h3>
        </Col>
        <Col xs={12}>
          <EditableTimerList 
            timers={this.state.timers} 
          />
        </Col>
        <Col xs={12}>
          <ToggleableTimerFormat 
            onFormSubmit={this.onFormSubmit}
          />
        </Col>
      </ContainerParent>
    )
  }
}
