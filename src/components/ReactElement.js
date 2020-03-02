import React, { Component } from 'react'

const CREDITCARD = 'Creditcard';
const BTC = 'Bitcoin';

export default class ReactElement extends Component {

  state = {
    paymentMethod: BTC
  }

  selected = (choice) => {
    return (event) => {
      this.setState({
        paymentMethod:choice
      })
    }
  }

  render() {
    // console.log(this.state.paymentMethod)
    // let a = 'tes'
    // const boldElement = <b>Text (as a string)</b>;
    return (
      <div>
        <p onClick={this.selected(CREDITCARD)}>{CREDITCARD}</p>
        <p onClick={this.selected(BTC)}>{BTC}</p>
        <p>pay with : {this.state.paymentMethod}</p>
      </div>
    )
  }
}


{/* <label htmlFor='label'>label</label>
<input name='email' type='email' />

<ul>
  <li>phone: {a}</li>
  <li>dolpin {'\uD83D\uDC2C'} </li>
  <li>star: {'\u2606'}</li>
</ul>


<div className='box' data-dismissible='aaa' />
<span data-highlight={true} />
<div aria-hidden={true} />

{ boldElement } */}