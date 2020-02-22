import React, { Component } from 'react'
import ContainerParent from '../components/Container'
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
    console.log(`id ${id}`)
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
        id={item.id}
        titile={item.title}
        description={item.description}
        votes={item.votes}
        submitterAvatarUrl={item.submitterAvatarUrl}
        productImageUrl={item.productImageUrl}
        handleUpdate={this.handleUpdate}
      />
    ));

    return (
      <ContainerParent>
        {productComponent}
      </ContainerParent>
    )
  }
}

export default ProductList