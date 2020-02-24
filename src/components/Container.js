import React from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap'

function ContainerParent(props) {
  return (
    <Container>
      <Row className='p-3'>
        <Col md={{ span: 6, offset: 3 }}>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

export default ContainerParent;
