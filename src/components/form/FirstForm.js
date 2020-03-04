import React, { Component } from 'react'
import Container from '../props_children/Container'
import { Button, Col } from 'react-bootstrap'

export default class FirstForm extends Component {

  state = {
    names:[],
    nama:'',
    namas:[],
    fields:{
      name:'',
      email:'',
      umur:''
    },
    people:[]
  }

  greate = (event) => {
    const btn = event.target 
    console.log(btn)
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

  handlerChange = (event) => {
    //bisa begini 1
    // const fieldsBaru = this.state.fields
    //atau begini 2
    const fields = this.state.fields
    //1
    // fieldsBaru[event.target.name] = [event.target.value]
    //2
    fields[event.target.name] = [event.target.value]
    //1
    // this.setState({fields:fieldsBaru})
    //2
    this.setState({ fields })
  }

  multipleField = (event) => {
    event.preventDefault()

    const people = [...this.state.people, this.state.fields]

    this.setState({
      people,
      fields:{
        name:'',
        email:'',
        umur:''
      }
    })

  }

  getElement = (event) => {
    const ele = event.target
    console.log(`ini adalah name ${ele.name} dan ini adalah value ${ele.value}`)
  }

  render() {
    // console.log(this.state.fields.name)
    // console.log(this.state.fields.email)
    return (
      <Container>
        <Col className='text-center'>
          <h3 >What do you think of React?</h3>
          <Button
            variant='primary'
            name='greate'
            value='great'
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

            <Button type='submit' variant='success'>Submit</Button>

          </form>


          <br />
          <br />
          <br />

          <ul>
            {this.state.namas.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>


          <br />
          <br />
          <br />

          <form onSubmit={this.multipleField}>
            <input 
              type='text'
              placeholder='input name'
              name='name'
              value={this.state.fields.name}
              onChange={this.handlerChange}
            /> &nbsp;

            <input 
              type='email'
              placeholder='input email'
              name='email'
              value={this.state.fields.email}
              onChange={this.handlerChange}
            /> &nbsp;

            <input 
              type='number'
              placeholder='input age'
              name='umur'
              value={this.state.fields.umur}
              onChange={this.handlerChange}
            /> &nbsp;

            <Button type='submit' variant='danger'>Submit</Button>
          </form>


          <ul className='text-center'>
            {this.state.people.map((item,idx) => <li key={idx}>{item.name} {item.email} {item.umur}</li>)}
          </ul>

        </Col>


          <p onClick={this.getElement} name='tes name' value='tes value' data-name='data name'>testing element</p>
      </Container>
    )
  }
}
