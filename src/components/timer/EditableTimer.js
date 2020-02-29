import React, { Component } from 'react'
import Timer from './Timer'
import TimerForm from './TimerForm'
import { Row } from 'react-bootstrap'

export default class EditableTimer extends Component {

  state = {
    isEditFormOpen: false
  }

  openForm = () => this.setState({isEditFormOpen: true})
  closeForm = () => this.setState({isEditFormOpen: false})

  handleOpenForm = () => this.openForm()
  handleCloseForm = () => this.closeForm()
  handleEditForm = () => this.openForm()
  handleSubmit = (data) => {
    this.props.onFormSubmit(data)
    this.closeForm()
  }

  deleteList = (id) => this.props.deleteList(id)

  render() {

    return (
      <Row className='m-3'>
        {this.state.isEditFormOpen ?
          <TimerForm
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            handleFormClose={this.handleCloseForm}
            handleSubmit={this.handleSubmit}
          />
          :
          <Timer
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            runningSince={this.props.runningSince}
            handleEditForm={this.handleEditForm}
            deleteList={(id) => this.deleteList(id)}
          />
        }
      </Row>
    )
  }
}
