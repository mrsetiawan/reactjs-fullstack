import React, { Component } from 'react';
import Timer from './Timer'
import TimerForm from './TimerForm'

class EditableTimer extends Component {

  state = {
    editFormOpen:false
  }
  
  openForm = () => this.setState({editFormOpen:true})
  closeForm = () => this.setState({editFormOpen:false})

  editHandlerForm = () => this.openForm()
  handlerFormClose = () => this.closeForm()

  handleSubmit = (data) => {
    this.props.onFormSubmit(data)
    this.closeForm();
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
            handlerFormClose={this.handlerFormClose}
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
            editHandlerForm={this.editHandlerForm}
          />
        }
      </>
    )
  }
  
}

export default EditableTimer;
