import React, { Component } from 'react'
import {
  Container,
} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'

export default class MyRouter extends Component {
  render() {
    return (
      <Container>
        <ul>
          <li>
            <Link to='/router/atlantic' >
              <code>/atlantics</code>
            </Link>
          </li>
          <li>
            <Link to='/router/pacific' >
              <code>/pacific</code>
            </Link>
          </li>
        </ul>

        <hr />
        <Route path='/router/atlantic' exact={true} render={() => (
          <div>
            <h3>Atlantic Ocean — Again!</h3>
            <p>
              Also known as "The Pond."
            </p>
          </div>
        )} />

        <Switch>
          <Route path='/router/pacific' exact={true} component={Pacific} />
          <Route path='/*' render={({ location }) => (<div>page not found</div>)}/>
        </Switch>
      </Container>
    )
  }
}

export const Atlantic = () => {
  console.log('tes ata')
  return (
    <div>
      <h3>Atlantic Ocean</h3>
      <p>
        The Atlantic Ocean covers approximately 1/5th of the
        surface of the earth.
      </p>
    </div>
  )

}

export const Pacific = () => {
  console.log('tes pas')
  return (
    <div>
      <h3>Pacific Ocean</h3>
      <p>
        Ferdinand Magellan, a Portuguese explorer, named the ocean
        'mar pacifico' in 1521, which means peaceful sea.
      </p>
    </div>
  )

}