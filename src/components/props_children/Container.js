import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Container extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired
  }

  render() {

    // const arr = React.Children.toArray(this.props.children)
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
