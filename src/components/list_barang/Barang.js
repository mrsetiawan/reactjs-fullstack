import React, { Component } from 'react'
import { Card, Col, Button, Row } from 'react-bootstrap'

class Barang extends Component {

  addPrice = (qty,harga) => this.props.addPrice(this.props.qty,this.props.harga)

  render() {

    const { id, nama_barang, kategori, img, harga, qty } = this.props

    return (
      <>
        <Col md={3} className='mb-3'>
          <Card>
            <Card.Img variant="top" src={img} className='embed-responsive-item' style={{ maxHeight: '170px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
            <Card.Body>
              <Card.Title>{nama_barang}</Card.Title>
              <p>Id Barang: {id}</p>
              <p>kategori: {kategori}</p>
              <p>QTY: {qty}</p>
              <p>harga: {harga}</p>
              <Button variant="primary" onClick={(qty,harga) => this.addPrice(qty,harga)}>Tambah</Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

// Barang.defaultProps = {
//   img:'https://via.placeholder.com/350x150'
// }

export default Barang
