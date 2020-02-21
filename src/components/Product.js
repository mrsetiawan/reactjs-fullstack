import React, { Component } from 'react'
import {
  Figure,
  Col,
  Row
} from 'react-bootstrap'

export default class Product extends Component {

  handleUpdate = () => this.props.handleUpdate(this.props._id)
  render() {
    const { _id, _title, _votes, _description, _url, _submitterAvatarUrl, _productImageUrl } = this.props
    return (
      <Col md={3}>
        <Figure>
          <Figure.Image
            width="100%"
            height={180}
            alt={_title}
            src={_productImageUrl}
          />
          <Figure.Caption>
            <p>{_description}</p>
            <p onClick={this.handleUpdate}>Vote {_votes}</p>
          </Figure.Caption>
        </Figure>
      </Col>
    )
  }
}
