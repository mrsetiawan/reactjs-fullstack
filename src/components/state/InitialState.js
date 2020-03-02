import React from 'react';
import Counter from './Counter'

import ContainerParent from '../Container'


function InitialState(props) {
  return (
    <ContainerParent>
      <Counter InitialState={125} />
    </ContainerParent>
  )
}

export default InitialState;
