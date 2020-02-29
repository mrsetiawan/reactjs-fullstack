import React, { Component } from 'react'
import { Col, Card, Form, Button } from 'react-bootstrap'

export default class TimerForm extends Component {

  // static defaultProps = {
  //   title: 'ini default title',
  //   project: 'ini default project'
  // }

  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  }

  
  handleChangeTitle = (e) => this.setState({title:e.target.value})
  handleProject = (e) => this.setState({project:e.target.value})
  
  handleSubmit = () => {
    this.props.handleSubmit({
      id:this.props.id,
      title:this.state.title,
      project:this.state.project
    })
  }
  
  handlerFormClose = () => this.props.handlerFormClose()
  
  render() {
    const { title, project } = this.state
    const titleButton = this.props.id ? 'Update' : 'Create'

    return (
      <Col className='mb-3'>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{project}</Card.Subtitle>
            <br />
            <Form>
              <Form.Group controlId="formBasic">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => this.handleChangeTitle(e)}/>
              </Form.Group>

              <Form.Group controlId="formBasic">
                <Form.Label>Project</Form.Label>
                <Form.Control type="text" value={project} onChange={(e) => this.handleProject(e)} />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.handleSubmit}>
                {titleButton}
              </Button> &nbsp;  
              <Button variant="danger" type="button" onClick={this.handlerFormClose}>
                Cancel
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

