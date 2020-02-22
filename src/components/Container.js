import React from 'react';
import {
  Container,
  Row,
} from 'react-bootstrap'

function ContainerParent(props) {
  return (
    <Container>
      <Row className='p-3'>
        {props.children}
      </Row>
    </Container>
  )
}

export default ContainerParent;
