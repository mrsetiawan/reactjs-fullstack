import React, { Component } from 'react'
import Container from '../props_children/Container'
import { Button, Col } from 'react-bootstrap'

export default class FirstForm extends Component {

  greate = (event) => {
    const btn = event.target 
    console.log(`ini nama ${btn.name} dan ini nilai ${btn.value} dan ini adalah type ${btn.type}`)
  }
  // amazing = (event) => console.log('The user clicked : amazing', event)

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.refs.number.value)
  }
  render() {
    return (
      <Container>
        <Col className='text-center'>
          <h3 >What do you think of React?</h3>
          <Button
            variant='primary'
            name='greate'
            value='great'
            tes='wadidaw'
            onClick={this.greate}
          >Great
          </Button> &nbsp;
          <Button
            variant='success'
            name='amazing'
            value='amazing'
            onClick={this.greate}
          >Amazing
          </Button>

          <br /><br />

          <form onSubmit={this.onSubmit}>
            
            <input 
              placeholder='input name'
              ref='name'
            />

            <input 
              placeholder='input number'
              ref='number'
              type='number'
            />

            <button type='submit' variant='warning'>Submit</button>

          </form>
        </Col>
      </Container>
    )
  }
}
