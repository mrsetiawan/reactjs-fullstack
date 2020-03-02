import React, { Component } from 'react'
import {
  Col,
  Button
} from 'react-bootstrap'

export default class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.InitialState
    }
  }

  increment = () => {

    // const nextValue = this.state.value + 1 
    // this.setState ({
    //   value: nextValue
    // })

    this.setState(nextState => {
      return {
        value:nextState.value + 1
      }
    })
  }

  decrement = () => {
    this.setState(prevState => {
      return {
        value:prevState.value - 1
      }
    })
  }

  render() {
    console.log(this.state.value)
    return (
      <div>
        <h1 className='text-center'><b>{this.state.value}</b></h1>
        <Col className='text-center'>
          <Button onClick={this.increment}><b>+</b></Button> &nbsp;
          <Button onClick={this.decrement}><b>-</b></Button>
        </Col>
      </div>
    )
  }
}
