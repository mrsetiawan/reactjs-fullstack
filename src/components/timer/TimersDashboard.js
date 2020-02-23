import React, { Component } from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerFormat from './ToggleableTimerFormat'

export default class TimersDashboard extends Component {
  render() {
    return (
      <div>
        from TimersDashboard
        <EditableTimerList />
        <ToggleableTimerFormat />
      </div>
    )
  }
}
