import React, { Component } from 'react';
import Timer from './Timer'
import TimerForm from './TimerForm'

class EditableTimer extends Component {

  state = {
    editFormOpen:false
  }

  render() {

    const { id, title, project, elapsed, runningSince, editFormOpen } = this.props

    return (
      <>
        {editFormOpen ?
          <TimerForm 
            id={id}
            title={title}
            project={project}
          />
          :
          <Timer 
            id={id}
            title={title}
            project={project}
            elapsed={elapsed}
            runningSince={runningSince}
            editFormOpen={editFormOpen}
          />
        }
      </>
    )
  }
  
}

export default EditableTimer;
