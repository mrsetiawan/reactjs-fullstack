import React, { Component } from 'react';
import Timer from './Timer'
import TimerForm from './TimerForm'

class EditableTimer extends Component {

  state = {
    editFormOpen:false
  }
  

  handleSubmit = (data) => {
    this.props.handleSubmit(data)
  }

  render() {

    const { id, title, project, elapsed, runningSince, editFormOpen } = this.props

    return (
      <>
        {this.state.editFormOpen ?
          <TimerForm 
            id={id}
            title={title}
            project={project}
            handleCloseForm={this.handleCloseForm}
            handleSubmit={this.handleSubmit}
          />
          :
          <Timer 
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            runningSince={runningSince}
            editFormOpen={editFormOpen}
            editHandler={this.handleToogle}
          />
        }
      </>
    )
  }
  
}

export default EditableTimer;
