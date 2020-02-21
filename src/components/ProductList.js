import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import Product from './Product'
import productList from '../Seed.js'

class ProductList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.setState({ products: productList })
  }

  handleUpdate = (id) => {
    const addVote = this.state.products.map((product) => {
      if (product.id === id) {
        // return Object.assign({}, product, {
        //    votes: product.votes + 1
        // });
        return { ...product, votes: product.votes + 1 }
      } else {
        return product;
      }
    });

    this.setState({ products: addVote })

  }

  render() {

    console.log(this.state.products)

    const products = this.state.products.sort((a, b) => (
      a.votes - b.votes
    ))

    const productComponent = products.map((item, idx) => (
      <Product
        key={idx}
        _id={item.id}
        _title={item.title}
        _votes={item.votes}
        _description={item.description}
        _url={item.url}
        _submitterAvatarUrl={item.submitterAvatarUrl}
        _productImageUrl={item.productImageUrl}
        handleUpdate={this.handleUpdate}
      />
    ));

    return (
      <Container>
        <Row className='p-3'>
          {productComponent}
        </Row>
      </Container>
    )
  }
}

export default ProductList