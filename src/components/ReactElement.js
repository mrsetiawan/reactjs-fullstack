import React, { Component } from 'react'

export default class ReactElement extends Component {
  render() {
    let a = 'tes'
    const boldElement = <b>Text (as a string)</b>;
    return (
      <div>
        <label htmlFor='label'>label</label>
        <input name='email' type='email' />

        <ul>
          <li>phone: {a}</li>
          <li>dolpin {'\uD83D\uDC2C'} </li> 
          <li>star: {'\u2606'}</li>
        </ul>


        <div className='box' data-dismissible='aaa' />
        <span data-highlight={true} />
        <div aria-hidden={true} />

        {boldElement}
      </div>
    )
  }
}
