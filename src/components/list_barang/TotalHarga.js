import React from 'react';
import {
  Button, Col
} from 'react-bootstrap'

function TotalHarga({ addPrice,harga }) {
  return (
    <Col>
      <Button onClick>Total Harga : {harga}</Button>
    </Col>
  )
}

export default TotalHarga;
