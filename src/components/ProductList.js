import React, { Component } from 'react'
import Product from './Product'

import productList from '../Seed.js'

class ProductList extends Component {

  render() {
    console.log(productList)
    return (
      <div>
        <Product />
      </div>
    )
  }
}

export default ProductList