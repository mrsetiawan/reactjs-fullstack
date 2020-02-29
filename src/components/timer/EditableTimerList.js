import React, { Component } from 'react'
import EditableTimer from './EditableTimer'

export default class EditableTimerList extends Component {
  
  render() {

    const timer = this.props.timers.map((timer, idx) => (
      <EditableTimer
        key={idx}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        editFormOpen={timer.editFormOpen}
        onFormSubmit={this.props.onFormSubmit}
        deleteList={(id) => this.props.deleteList(id)}
        onStartClick={(id) => this.props.onStartClick(id)}
        onStopClick={(id) => this.props.onStopClick(id)}
      />
    ))

    return (
      <>
        {timer}
      </>
    )
  }
}
