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
  
  handleCreateForm = (value) => {
    this.createTimer(value)
  }

  createTimer = (value) => {
    const newValue = value
    this.setState({timers:this.state.timers.concat(newValue)})
  }

  handleEditFormSubmit = (data) => {
    this.updateTimer(data)
  }

  updateTimer = (data) => {
    this.setState({
      timers: this.state.timers.map((newData) => {
        if(newData.id === data.id){
          // return Object.assign({}, newData, {
          //   title: newData.title,
          //   project: newData.project,
          // });

          return {...newData, title:newData.title, project:newData.project}
        }else{
          return newData
        }
      })
    })
  }

  deleteList = (id) => this.deleteListByid(id)

  deleteListByid = (id) => {
    this.setState({
      timers: this.state.timers.filter(item => item.id !== id)
    })
  }

  onStartClick = (id) => this.handlerStart(id)
  
  
  handlerStart = (id) => {
    const now = Date.now()
    console.log(now)
    this.setState({
      timers: this.state.timers.map(item => {
        if(item.id === id){
          return {...item, runningSince:now}
        }else{
          return item
        }
      })
    })
  }
  
  onStopClick = (id) => this.handlerStop(id)

  handlerStop = (id) => {
    const now = Date.now()
    this.setState({
      timers: this.state.timers.map(item => {
        if(item.id !== id){
          const lastElapsed = now - item.runningSince
          return {...item, elapsed: item.elapsed + lastElapsed, runningSince:null}
        }else{
          return item
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
            onFormSubmit={this.handleEditFormSubmit}
            deleteList={(id) => this.deleteList(id)}
            onStartClick={(id) => this.onStartClick(id)}
            onStopClick={(id) => this.onStopClick(id)}
          />
        </Col>
        <Col xs={12}>
          <ToggleableTimerFormat 
            handleCreateForm={(value) => this.handleCreateForm(value)}
          />
        </Col>
      </ContainerParent>
    )
  }
}
