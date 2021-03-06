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
    ]
  }

  handleCreateForm = (data) => {
    this.createNewForm(data)
  }

  createNewForm = (data) => {
    this.setState({timers:this.state.timers.concat(data)})
  }

  handleFormEdit = (data) => this.updateForm(data)

  updateForm = (data) => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if(data.id === timer.id){
          return {...timer, title:timer.title, project:timer.project}
        }else{
          return timer
        } 
      })
    })
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
            onFormSubmit={this.handleFormEdit}
          />
        </Col>
        <Col xs={12}>
          <ToggleTimer 
            handleSubmitFromParent={this.handleCreateForm} />
        </Col>
      </ContainerParent>
    )
  }
}
