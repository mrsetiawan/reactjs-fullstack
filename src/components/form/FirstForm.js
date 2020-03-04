import React, { Component } from 'react'
import Container from '../props_children/Container'
import { Button, Col } from 'react-bootstrap'

export default class FirstForm extends Component {

  state = {
    names:[],
    nama:'',
    namas:[]
  }

  greate = (event) => {
    const btn = event.target 
    console.log(`ini nama ${btn.name} dan ini nilai ${btn.value} dan ini adalah type ${btn.type}`)
  }
  // amazing = (event) => console.log('The user clicked : amazing', event)

  onSubmit = (event) => {
    event.preventDefault()
    // console.log(this.refs.name.value)
    // console.log(this.refs.number.value)
    const name = this.refs.name.value
    const address = this.refs.address.value
    const num = this.refs.number.value
    const getValue = [...this.state.names, name, address ,num]
    this.setState({
      names:getValue
    })

    this.refs.name.value = ''
    this.refs.address.value = ''
    this.refs.number.value = ''
  }

  nameOnChange = (event) => {
    this.setState({
      nama: event.target.value
    })
  }

  formSumbit = (event) => {
    const namaBaru = [...this.state.namas, this.state.nama]
    this.setState({
      namas: namaBaru,
      nama:''
    })
    
    event.preventDefault()
    console.log(this.state.namas)
  }

  render() {
    console.log(this.state.nama)
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

          {/* Uncontrolled */}
          <form onSubmit={this.onSubmit}>

            <input 
              placeholder='input name'
              ref='name'
            />&nbsp;

            <input 
              placeholder='input address'
              ref='address'
              type='text'
            /> &nbsp;

            <input 
              placeholder='input number'
              ref='number'
              type='number'
            /> &nbsp;

            <button type='submit' variant='warning'>Submit</button>

            <br />

            <ul className='text-center'>
              {this.state.names.map((name,idx) => <li key={idx}>{name}</li>)}
            </ul>

          </form>

          <br />
          <br />
          <br />

          <form onSubmit={this.formSumbit}>

            <input 
              type='text'
              name='nama'
              value={this.state.nama}
              onChange={this.nameOnChange}
            />


            <button type='submit' variant='success'>Submit</button>

          </form>
        </Col>
      </Container>
    )
  }
}
