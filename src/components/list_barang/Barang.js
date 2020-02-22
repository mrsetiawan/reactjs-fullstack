import React, { Component } from 'react'
import { Card, Col, Button } from 'react-bootstrap'

class Barang extends Component {

  addPrice = (harga) => this.props.addPrice(this.props.harga)

  render() {

    const {id,nama_barang,kategori,img,distributor,retur,harga,deskripsi} = this.props

    return (
      <Col md={3} className='mb-3'>
        <Card>
          <Card.Img variant="top" src={img} className='embed-responsive-item' style={{maxHeight: '170px', backgroundSize:'cover', backgroundPosition:'center', backgroundRepeat: 'no-repeat'}}/>
          <Card.Body>
            <Card.Title>{nama_barang}</Card.Title>
            <p>kategori: {kategori}</p>
            <p>deskripsi: {deskripsi}</p>
            <p>harga: {harga}</p>
            <Button variant="primary" onClick={(harga) => this.addPrice(harga)}>Tambah</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

// Barang.defaultProps = {
//   img:'https://via.placeholder.com/350x150'
// }

export default Barang
