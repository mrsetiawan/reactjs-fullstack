import React from 'react';
import TimerForm from './TimerForm'
import { Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function ToogleTimer({ isOpen }) {
  return (
    <>
      {isOpen ?
        <TimerForm />
        :
        <Col className='text-center'>
          <Button>
            <FontAwesomeIcon icon={faPlus} />
          </Button>
        </Col>
      }
    </>
  )
}

export default ToogleTimer;
