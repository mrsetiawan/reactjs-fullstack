import React, { Component } from 'react'
import {
  Figure,
  Col,
  Row
} from 'react-bootstrap'

export default class Product extends Component {

  handleUpdate = (id) => this.props.handleUpdate(this.props.id)
  render() {
    const { id, title, votes, description, url, submitterAvatarUrl, productImageUrl } = this.props
    return (
      <Col md={3}>
        <Figure>
          <Figure.Image
            width="100%"
            height={180}
            alt={title}
            src={productImageUrl}
          />
          <Figure.Caption>
            <p>{description}</p>
            <p onClick={(id) => this.handleUpdate(id)}>Vote {votes}</p>
          </Figure.Caption>
        </Figure>
      </Col>
    )
  }
}
